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
let highlightBoxGroup;
let currentStep = 'intro';
let activeAnimations = []; // Track active animations to cancel them
let tooltip; // Tooltip for node hover labels

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

    // Create tooltip for node hover
    createTooltip();

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
                radius: 4 + Math.random() * 2, // Larger base size for visibility
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
    // Use the left column container dimensions instead of full viewport
    const graphContainer = document.querySelector('#graph-container');
    const width = graphContainer.clientWidth;
    const height = graphContainer.clientHeight;

    svg = container
        .attr('width', width)
        .attr('height', height);

    // Create groups for layering (order matters - drawn bottom to top)
    // Center within the left column
    const mainGroup = svg.append('g').attr('transform', `translate(${width / 2}, ${height / 2})`);

    highlightBoxGroup = mainGroup.append('g').attr('class', 'highlight-boxes');
    linkGroup = mainGroup.append('g').attr('class', 'links');
    nodeGroup = mainGroup.append('g').attr('class', 'nodes');
    labelGroup = mainGroup.append('g').attr('class', 'labels');
}

/**
 * Create tooltip for node hover
 */
function createTooltip() {
    // Create tooltip div if it doesn't exist
    tooltip = d3.select('body').append('div')
        .attr('class', 'node-tooltip')
        .style('position', 'absolute')
        .style('visibility', 'hidden')
        .style('background-color', 'rgba(0, 0, 0, 0.85)')
        .style('color', 'white')
        .style('padding', '8px 12px')
        .style('border-radius', '6px')
        .style('font-size', '14px')
        .style('font-weight', '500')
        .style('pointer-events', 'none')
        .style('z-index', '1000')
        .style('box-shadow', '0 2px 8px rgba(0,0,0,0.3)');
}

/**
 * Create D3 force simulation with cluster gravity
 */
function createForceSimulation(clusterData) {
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
        .attr('stroke', '#95a5a6')
        .attr('stroke-opacity', 0.15)
        .attr('stroke-width', 1);

    // Render nodes
    const nodes = nodeGroup.selectAll('circle')
        .data(graphData.nodes)
        .join('circle')
        .attr('class', 'node')
        .attr('r', d => d.radius)
        .attr('fill', d => d.clusterColor)
        .attr('stroke', '#fff')
        .attr('stroke-width', 1)
        .attr('opacity', 0.5)
        .on('mouseover', handleNodeHover)
        .on('mousemove', handleNodeMove)
        .on('mouseout', handleNodeOut);

    // Get unique clusters and their positions
    const clusterCenters = new Map();
    graphData.nodes.forEach(node => {
        if (!clusterCenters.has(node.cluster)) {
            clusterCenters.set(node.cluster, {
                id: node.cluster,
                label: node.clusterLabel,
                x: node.clusterX,
                y: node.clusterY,
                color: node.clusterColor
            });
        }
    });

    // Render highlight boxes (invisible initially)
    const boxes = highlightBoxGroup.selectAll('rect')
        .data([...clusterCenters.values()])
        .join('rect')
        .attr('class', 'cluster-highlight-box')
        .attr('id', d => `box-${d.id}`)
        .attr('x', d => d.x - 140)
        .attr('y', d => d.y - 140)
        .attr('width', 280)
        .attr('height', 280)
        .attr('rx', 20);

    // Render cluster labels
    const labels = labelGroup.selectAll('text')
        .data([...clusterCenters.values()])
        .join('text')
        .attr('class', 'cluster-label')
        .attr('id', d => `label-${d.id}`)
        .attr('x', d => d.x)
        .attr('y', d => d.y - 130)
        .text(d => d.label);

    // Store selections for updates
    window.graphSelections = { nodes, links, labels, boxes };
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
    // Existing behavior: enlarge and highlight node
    d3.select(event.target)
        .transition()
        .duration(200)
        .attr('r', d.radius * 1.5)
        .attr('opacity', 1)
        .attr('stroke-width', 2);

    // New behavior: show tooltip with concept name
    tooltip
        .style('visibility', 'visible')
        .text(d.concept)
        .style('left', (event.pageX + 10) + 'px')
        .style('top', (event.pageY - 10) + 'px');
}

/**
 * Handle node mousemove - update tooltip position
 */
function handleNodeMove(event, d) {
    tooltip
        .style('left', (event.pageX + 10) + 'px')
        .style('top', (event.pageY - 10) + 'px');
}

/**
 * Handle node mouseout
 */
function handleNodeOut(event, d) {
    // Existing behavior: restore node to original size
    d3.select(event.target)
        .transition()
        .duration(200)
        .attr('r', d.radius)
        .attr('opacity', 0.5)
        .attr('stroke-width', 1);

    // New behavior: hide tooltip
    tooltip.style('visibility', 'hidden');
}

/**
 * Cancel all active animations
 */
function cancelAllAnimations() {
    activeAnimations.forEach(anim => {
        if (anim && anim.kill) anim.kill();
    });
    activeAnimations = [];

    // Stop all D3 transitions
    if (window.graphSelections) {
        const { nodes, links, labels, boxes } = window.graphSelections;
        nodes.interrupt();
        links.interrupt();
        labels.interrupt();
        boxes.interrupt();
    }
}

/**
 * Update visualization based on scroll step
 * Called from main.js
 */
window.updateForceGraph = function(step, direction) {
    if (currentStep === step) return; // Don't re-trigger same step

    currentStep = step;
    cancelAllAnimations(); // Stop any ongoing animations

    switch (step) {
        case 'title':
        case 'intro':
            resetGraph();
            break;
        case 'simple-prompt':
            highlightSingleCluster('market-analysis');
            break;
        case 'structured-prompt':
            highlightSubgraphsWithInteractions();
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

    const { nodes, links, labels, boxes } = window.graphSelections;

    nodes
        .transition()
        .duration(600)
        .attr('opacity', 0.5)
        .attr('r', d => d.radius)
        .attr('fill', d => d.clusterColor)
        .attr('stroke-width', 1);

    links
        .transition()
        .duration(600)
        .attr('stroke-opacity', 0.15)
        .attr('stroke-width', 1)
        .attr('stroke', '#95a5a6');

    labels
        .transition()
        .duration(600)
        .attr('class', 'cluster-label')
        .attr('opacity', 1);

    boxes
        .transition()
        .duration(600)
        .attr('opacity', 0);
}

/**
 * Highlight a single cluster (simple prompt)
 */
function highlightSingleCluster(clusterId) {
    if (!window.graphSelections) return;

    const { nodes, links, labels, boxes } = window.graphSelections;

    // Dim all nodes first
    nodes
        .transition()
        .duration(800)
        .attr('opacity', d => d.cluster === clusterId ? 1 : 0.1)
        .attr('r', d => d.cluster === clusterId ? d.radius * 2 : d.radius)
        .attr('fill', d => d.cluster === clusterId ? '#e74c3c' : d.clusterColor)
        .attr('stroke-width', d => d.cluster === clusterId ? 2 : 1);

    // Dim all links
    links
        .transition()
        .duration(800)
        .attr('stroke-opacity', 0.05);

    // Highlight cluster label (keep others visible)
    labels
        .transition()
        .duration(800)
        .attr('class', d => d.id === clusterId ? 'cluster-label active' : 'cluster-label')
        .attr('opacity', d => d.id === clusterId ? 1 : 0.7);

    // Show highlight box around the cluster
    boxes
        .filter(d => d.id === clusterId)
        .transition()
        .duration(800)
        .attr('opacity', 0.6)
        .attr('stroke', '#e74c3c')
        .attr('stroke-width', 4);
}

/**
 * Highlight multiple clusters sequentially (structured prompt)
 */
function highlightMultipleClustersSequential(clusterIds) {
    if (!window.graphSelections) return;

    const { nodes, links, labels, boxes } = window.graphSelections;

    // First, reset everything to dim
    nodes
        .attr('opacity', 0.1)
        .attr('r', d => d.radius)
        .attr('fill', d => d.clusterColor)
        .attr('stroke-width', 1);

    links
        .attr('stroke-opacity', 0.05)
        .attr('stroke-width', 1);

    labels
        .attr('opacity', 0.7) // Keep labels always visible
        .attr('class', 'cluster-label');

    boxes
        .attr('opacity', 0);

    // Sequentially highlight each cluster
    clusterIds.forEach((clusterId, index) => {
        const delay = index * 400; // 400ms between each cluster

        // Highlight nodes
        nodes
            .filter(d => d.cluster === clusterId)
            .transition()
            .delay(delay)
            .duration(600)
            .attr('opacity', 1)
            .attr('r', d => d.radius * 1.8)
            .attr('fill', '#3498db')
            .attr('stroke-width', 2);

        // Highlight label
        labels
            .filter(d => d.id === clusterId)
            .transition()
            .delay(delay)
            .duration(600)
            .attr('class', 'cluster-label active')
            .attr('opacity', 1);

        // Show highlight box
        boxes
            .filter(d => d.id === clusterId)
            .transition()
            .delay(delay)
            .duration(600)
            .attr('opacity', 0.4)
            .attr('stroke', '#3498db')
            .attr('stroke-width', 3);
    });

    // After all clusters are highlighted, show inter-cluster links
    const totalDelay = clusterIds.length * 400;

    setTimeout(() => {
        links
            .transition()
            .duration(800)
            .attr('stroke-opacity', d => {
                const sourceCluster = graphData.nodes.find(n => n.id === d.source.id)?.cluster;
                const targetCluster = graphData.nodes.find(n => n.id === d.target.id)?.cluster;
                const bothActive = clusterIds.includes(sourceCluster) && clusterIds.includes(targetCluster);
                const isInterCluster = sourceCluster !== targetCluster;
                return (bothActive && isInterCluster) ? 0.6 : 0.05;
            })
            .attr('stroke-width', d => {
                const sourceCluster = graphData.nodes.find(n => n.id === d.source.id)?.cluster;
                const targetCluster = graphData.nodes.find(n => n.id === d.target.id)?.cluster;
                const bothActive = clusterIds.includes(sourceCluster) && clusterIds.includes(targetCluster);
                const isInterCluster = sourceCluster !== targetCluster;
                return (bothActive && isInterCluster) ? 2.5 : 1;
            })
            .attr('stroke', d => {
                const sourceCluster = graphData.nodes.find(n => n.id === d.source.id)?.cluster;
                const targetCluster = graphData.nodes.find(n => n.id === d.target.id)?.cluster;
                const bothActive = clusterIds.includes(sourceCluster) && clusterIds.includes(targetCluster);
                const isInterCluster = sourceCluster !== targetCluster;
                return (bothActive && isInterCluster) ? '#3498db' : '#95a5a6';
            });
    }, totalDelay);
}

/**
 * Highlight subgroups sequentially to show framework interactions
 * This creates a narrative instead of lighting everything up at once
 */
function highlightSubgraphsWithInteractions() {
    if (!window.graphSelections) return;

    const { nodes, links, labels, boxes } = window.graphSelections;

    // Reset everything to dim but keep labels visible
    nodes
        .attr('opacity', 0.1)
        .attr('r', d => d.radius)
        .attr('fill', d => d.clusterColor)
        .attr('stroke-width', 1);

    links
        .attr('stroke-opacity', 0.05)
        .attr('stroke-width', 1);

    labels
        .attr('opacity', 0.7) // Keep labels visible
        .attr('class', 'cluster-label');

    boxes
        .attr('opacity', 0);

    // Define meaningful subgraphs that show framework interactions
    const subgraphs = [
        {
            clusters: ['estimation-techniques', 'market-analysis'],
            color: '#9b59b6',
            delay: 0,
            label: 'Core Framework'
        },
        {
            clusters: ['health-economics', 'demographics'],
            color: '#e67e22',
            delay: 1000,
            label: 'Domain Knowledge'
        },
        {
            clusters: ['consumer-behavior', 'subscription-models'],
            color: '#3498db',
            delay: 2000,
            label: 'Business Logic'
        },
        {
            clusters: ['data-analysis', 'digital-media'],
            color: '#27ae60',
            delay: 3000,
            label: 'Measurement & Analytics'
        },
        {
            clusters: ['business-strategy'],
            color: '#e74c3c',
            delay: 4000,
            label: 'Strategic Integration'
        }
    ];

    let allActiveClusters = [];

    // Highlight each subgraph sequentially
    subgraphs.forEach((subgraph, subgraphIndex) => {
        const { clusters, color, delay } = subgraph;

        // Add to active clusters list
        allActiveClusters = [...allActiveClusters, ...clusters];

        // Highlight nodes in this subgraph
        clusters.forEach(clusterId => {
            nodes
                .filter(d => d.cluster === clusterId)
                .transition()
                .delay(delay)
                .duration(600)
                .attr('opacity', 1)
                .attr('r', d => d.radius * 1.8)
                .attr('fill', color)
                .attr('stroke-width', 2);

            // Highlight label
            labels
                .filter(d => d.id === clusterId)
                .transition()
                .delay(delay)
                .duration(600)
                .attr('class', 'cluster-label active')
                .attr('opacity', 1);

            // Show highlight box
            boxes
                .filter(d => d.id === clusterId)
                .transition()
                .delay(delay)
                .duration(600)
                .attr('opacity', 0.3)
                .attr('stroke', color)
                .attr('stroke-width', 3);
        });

        // After subgraph lights up, show connections within the subgraph and to previously lit clusters
        setTimeout(() => {
            links
                .filter(d => {
                    const sourceCluster = graphData.nodes.find(n => n.id === d.source.id)?.cluster;
                    const targetCluster = graphData.nodes.find(n => n.id === d.target.id)?.cluster;
                    const sourceActive = allActiveClusters.includes(sourceCluster);
                    const targetActive = allActiveClusters.includes(targetCluster);
                    return sourceActive && targetActive;
                })
                .transition()
                .duration(600)
                .attr('stroke', color)
                .attr('stroke-opacity', 0.5)
                .attr('stroke-width', 2);
        }, delay + 600);
    });

    // After all subgraphs are shown, highlight key inter-cluster connections
    setTimeout(() => {
        links
            .filter(d => {
                const sourceCluster = graphData.nodes.find(n => n.id === d.source.id)?.cluster;
                const targetCluster = graphData.nodes.find(n => n.id === d.target.id)?.cluster;
                const bothActive = allActiveClusters.includes(sourceCluster) && allActiveClusters.includes(targetCluster);
                const isInterCluster = sourceCluster !== targetCluster;
                return bothActive && isInterCluster;
            })
            .transition()
            .duration(800)
            .attr('stroke-opacity', 0.4)
            .attr('stroke-width', 2);
    }, 5000);
}

/**
 * Fade out graph for transition to next section
 */
function fadeOutGraph() {
    if (!window.graphSelections) return;

    const { nodes, links, labels, boxes } = window.graphSelections;

    nodes.transition().duration(1000).attr('opacity', 0);
    links.transition().duration(1000).attr('stroke-opacity', 0);
    labels.transition().duration(1000).attr('opacity', 0);
    boxes.transition().duration(1000).attr('opacity', 0);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initForceGraph);
