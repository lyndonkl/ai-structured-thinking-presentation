/**
 * Section 1: Force-Directed Graph Visualization
 * Shows how structured prompts activate multiple knowledge clusters
 */

let graphData = { nodes: [], links: [] };
let simulation;
let svg;
let nodeGroup;
let linkGroup;
let labelGroup;
let currentStep = 'intro';

// Initialize the force-directed graph
async function initForceGraph() {
    // Load cluster data
    const clusterData = await d3.json('data/force-graph-nodes.json');

    // Generate nodes based on cluster configuration
    generateNodes(clusterData);

    // Generate links between nodes
    generateLinks();

    // Set up SVG
    setupSVG();

    // Create force simulation
    createForceSimulation(clusterData);

    // Render initial state
    render();
}

/**
 * Generate ~1000 nodes distributed across clusters
 */
function generateNodes(clusterData) {
    const { clusters, nodeCount, concepts } = clusterData;
    let nodeId = 0;

    clusters.forEach(cluster => {
        const count = nodeCount[cluster.id];
        const clusterConcepts = concepts[cluster.id] || [];

        for (let i = 0; i < count; i++) {
            // Distribute nodes in a circular pattern around cluster center
            const angle = (i / count) * 2 * Math.PI;
            const radius = 80 + Math.random() * 40; // Random spread

            graphData.nodes.push({
                id: `${cluster.id}-${nodeId++}`,
                cluster: cluster.id,
                clusterLabel: cluster.label,
                clusterColor: cluster.color,
                clusterX: cluster.x,
                clusterY: cluster.y,
                concept: clusterConcepts[i % clusterConcepts.length] || `Concept ${i}`,
                x: cluster.x + radius * Math.cos(angle),
                y: cluster.y + radius * Math.sin(angle),
                radius: 3 + Math.random() * 2,
            });
        }
    });

    console.log(`Generated ${graphData.nodes.length} nodes across ${clusters.length} clusters`);
}

/**
 * Generate links between nodes (focusing on inter-cluster connections)
 */
function generateLinks() {
    const clusters = [...new Set(graphData.nodes.map(n => n.cluster))];

    // Create some intra-cluster links
    graphData.nodes.forEach((node, i) => {
        // Connect to a few random nodes in the same cluster
        const sameClusterNodes = graphData.nodes.filter(n => n.cluster === node.cluster);
        const numLinks = Math.floor(Math.random() * 2); // 0-1 links per node

        for (let j = 0; j < numLinks; j++) {
            const target = sameClusterNodes[Math.floor(Math.random() * sameClusterNodes.length)];
            if (target && target.id !== node.id) {
                graphData.links.push({
                    source: node.id,
                    target: target.id,
                    type: 'intra'
                });
            }
        }
    });

    // Create inter-cluster links (these are what light up for structured prompts)
    clusters.forEach((cluster1, i) => {
        clusters.forEach((cluster2, j) => {
            if (i < j) { // Only create links once per cluster pair
                const cluster1Nodes = graphData.nodes.filter(n => n.cluster === cluster1);
                const cluster2Nodes = graphData.nodes.filter(n => n.cluster === cluster2);

                // Create 2-5 links between clusters
                const numLinks = 2 + Math.floor(Math.random() * 4);
                for (let k = 0; k < numLinks; k++) {
                    const source = cluster1Nodes[Math.floor(Math.random() * cluster1Nodes.length)];
                    const target = cluster2Nodes[Math.floor(Math.random() * cluster2Nodes.length)];

                    graphData.links.push({
                        source: source.id,
                        target: target.id,
                        type: 'inter'
                    });
                }
            }
        });
    });

    console.log(`Generated ${graphData.links.length} links (${graphData.links.filter(l => l.type === 'inter').length} inter-cluster)`);
}

/**
 * Set up SVG canvas
 */
function setupSVG() {
    const container = d3.select('#force-graph');
    const width = window.innerWidth;
    const height = window.innerHeight;

    svg = container
        .attr('width', width)
        .attr('height', height);

    // Create groups for layering
    linkGroup = svg.append('g').attr('class', 'links');
    nodeGroup = svg.append('g').attr('class', 'nodes');
    labelGroup = svg.append('g').attr('class', 'labels');

    // Center the view
    const g = svg.append('g').attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Move groups into centered container
    linkGroup.attr('transform', `translate(${width / 2}, ${height / 2})`);
    nodeGroup.attr('transform', `translate(${width / 2}, ${height / 2})`);
    labelGroup.attr('transform', `translate(${width / 2}, ${height / 2})`);
}

/**
 * Create D3 force simulation with cluster gravity
 */
function createForceSimulation(clusterData) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    simulation = d3.forceSimulation(graphData.nodes)
        .force('link', d3.forceLink(graphData.links)
            .id(d => d.id)
            .distance(30)
            .strength(0.1))
        .force('charge', d3.forceManyBody()
            .strength(-15))
        .force('collision', d3.forceCollide()
            .radius(d => d.radius + 2))
        .force('center', d3.forceCenter(0, 0))
        .force('cluster', forceCluster()); // Custom cluster force

    simulation.on('tick', updatePositions);
}

/**
 * Custom force to pull nodes toward their cluster centers
 */
function forceCluster() {
    const strength = 0.15;

    function force(alpha) {
        graphData.nodes.forEach(node => {
            node.vx -= (node.x - node.clusterX) * strength * alpha;
            node.vy -= (node.y - node.clusterY) * strength * alpha;
        });
    }

    return force;
}

/**
 * Render nodes, links, and labels
 */
function render() {
    // Render links
    const links = linkGroup.selectAll('line')
        .data(graphData.links)
        .join('line')
        .attr('class', d => `link ${d.type}`)
        .attr('stroke', '#999')
        .attr('stroke-opacity', 0.1)
        .attr('stroke-width', 1);

    // Render nodes
    const nodes = nodeGroup.selectAll('circle')
        .data(graphData.nodes)
        .join('circle')
        .attr('class', 'node')
        .attr('r', d => d.radius)
        .attr('fill', d => d.clusterColor)
        .attr('opacity', 0.6)
        .on('mouseover', handleNodeHover)
        .on('mouseout', handleNodeOut);

    // Render cluster labels
    const clusterCenters = d3.group(graphData.nodes, d => d.cluster);
    const labels = labelGroup.selectAll('text')
        .data([...clusterCenters.keys()])
        .join('text')
        .attr('class', 'cluster-label')
        .attr('x', d => graphData.nodes.find(n => n.cluster === d).clusterX)
        .attr('y', d => graphData.nodes.find(n => n.cluster === d).clusterY - 120)
        .attr('text-anchor', 'middle')
        .attr('font-size', '16px')
        .attr('font-weight', 'bold')
        .attr('fill', '#333')
        .text(d => graphData.nodes.find(n => n.cluster === d).clusterLabel);

    // Store selections for updates
    window.graphSelections = { nodes, links, labels };
}

/**
 * Update positions on each simulation tick
 */
function updatePositions() {
    if (!window.graphSelections) return;

    const { nodes, links } = window.graphSelections;

    links
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

    nodes
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);
}

/**
 * Handle node hover
 */
function handleNodeHover(event, d) {
    // Show tooltip with concept name
    d3.select(event.target)
        .transition()
        .duration(200)
        .attr('r', d.radius * 2)
        .attr('opacity', 1);
}

/**
 * Handle node mouseout
 */
function handleNodeOut(event, d) {
    d3.select(event.target)
        .transition()
        .duration(200)
        .attr('r', d.radius)
        .attr('opacity', 0.6);
}

/**
 * Update visualization based on scroll step
 * Called from main.js
 */
window.updateForceGraph = function(step, direction) {
    currentStep = step;

    switch (step) {
        case 'intro':
            resetGraph();
            break;
        case 'simple-prompt':
            highlightSingleCluster('market-analysis');
            break;
        case 'structured-prompt':
            highlightMultipleClusters([
                'estimation-techniques',
                'demographics',
                'health-economics',
                'consumer-behavior',
                'digital-media',
                'subscription-models',
                'data-analysis',
                'market-analysis'
            ]);
            break;
        case 'key-insight':
            // Keep structured state active
            break;
        case 'transition':
            fadeOutGraph();
            break;
    }
};

/**
 * Reset graph to initial state
 */
function resetGraph() {
    if (!window.graphSelections) return;

    const { nodes, links } = window.graphSelections;

    nodes
        .transition()
        .duration(300)
        .attr('opacity', 0.6)
        .attr('fill', d => d.clusterColor);

    links
        .transition()
        .duration(300)
        .attr('stroke-opacity', 0.1)
        .attr('stroke-width', 1);
}

/**
 * Highlight a single cluster (simple prompt)
 */
function highlightSingleCluster(clusterId) {
    if (!window.graphSelections) return;

    const { nodes, links } = window.graphSelections;

    // Dim all nodes
    nodes
        .transition()
        .duration(300)
        .attr('opacity', d => d.cluster === clusterId ? 0.9 : 0.2)
        .attr('fill', d => d.cluster === clusterId ? '#f39c12' : d.clusterColor);

    // Dim all links
    links
        .transition()
        .duration(300)
        .attr('stroke-opacity', 0.05);

    // Pulse highlighted nodes
    nodes.filter(d => d.cluster === clusterId)
        .transition()
        .duration(1000)
        .attr('r', d => d.radius * 1.5)
        .transition()
        .duration(1000)
        .attr('r', d => d.radius)
        .on('end', function repeat() {
            d3.select(this)
                .transition()
                .duration(1000)
                .attr('r', d => d.radius * 1.5)
                .transition()
                .duration(1000)
                .attr('r', d => d.radius)
                .on('end', repeat);
        });
}

/**
 * Highlight multiple clusters (structured prompt)
 */
function highlightMultipleClusters(clusterIds) {
    if (!window.graphSelections) return;

    const { nodes, links } = window.graphSelections;

    // Highlight nodes in specified clusters
    nodes
        .transition()
        .duration(800)
        .delay((d, i) => {
            // Stagger activation by cluster
            const clusterIndex = clusterIds.indexOf(d.cluster);
            return clusterIndex >= 0 ? clusterIndex * 100 : 0;
        })
        .attr('opacity', d => clusterIds.includes(d.cluster) ? 0.9 : 0.1)
        .attr('fill', d => clusterIds.includes(d.cluster) ? '#3498db' : d.clusterColor);

    // Highlight inter-cluster links
    links
        .transition()
        .duration(600)
        .delay(800) // After nodes activate
        .attr('stroke-opacity', d => {
            const sourceCluster = graphData.nodes.find(n => n.id === d.source.id)?.cluster;
            const targetCluster = graphData.nodes.find(n => n.id === d.target.id)?.cluster;
            const isInterCluster = sourceCluster !== targetCluster &&
                                    clusterIds.includes(sourceCluster) &&
                                    clusterIds.includes(targetCluster);
            return isInterCluster ? 0.4 : 0.05;
        })
        .attr('stroke-width', d => {
            const sourceCluster = graphData.nodes.find(n => n.id === d.source.id)?.cluster;
            const targetCluster = graphData.nodes.find(n => n.id === d.target.id)?.cluster;
            const isInterCluster = sourceCluster !== targetCluster &&
                                    clusterIds.includes(sourceCluster) &&
                                    clusterIds.includes(targetCluster);
            return isInterCluster ? 2 : 1;
        })
        .attr('stroke', d => {
            const sourceCluster = graphData.nodes.find(n => n.id === d.source.id)?.cluster;
            const targetCluster = graphData.nodes.find(n => n.id === d.target.id)?.cluster;
            const isInterCluster = sourceCluster !== targetCluster &&
                                    clusterIds.includes(sourceCluster) &&
                                    clusterIds.includes(targetCluster);
            return isInterCluster ? '#3498db' : '#999';
        });
}

/**
 * Fade out graph for transition to next section
 */
function fadeOutGraph() {
    if (!window.graphSelections) return;

    const { nodes, links, labels } = window.graphSelections;

    nodes.transition().duration(800).attr('opacity', 0);
    links.transition().duration(800).attr('stroke-opacity', 0);
    labelGroup.selectAll('text').transition().duration(800).attr('opacity', 0);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initForceGraph);
