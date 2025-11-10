/**
 * Section 2, Example 3: A/B Test Design with Causal Inference
 * Visualizes bar charts and causal DAG
 */

document.addEventListener('DOMContentLoaded', () => {
    initExample3();
});

function initExample3() {
    console.log('Example 3: A/B Testing initialized');

    const example3Scroller = scrollama();

    example3Scroller
        .setup({
            step: '#example3 .step',
            offset: 0.5,
            debug: false,
        })
        .onStepEnter(handleExample3StepEnter);

    window.addEventListener('resize', () => {
        example3Scroller.resize();
    });

    addExample3Steps();
}

function addExample3Steps() {
    const container = document.querySelector('#example3 .scroll-text');
    if (!container) return;

    const steps = [
        {
            id: 'generic-calculator',
            content: `
                <div class="prompt-box simple">
                    <h3>Simple query:</h3>
                    <p>"How long should I run my A/B test for a diagnosis tool?"</p>
                </div>
                <div class="generic-response">
                    <h4>A/B Test Duration Calculator</h4>
                    <p>To determine test duration:</p>
                    <ol>
                        <li><strong>Sample size calculation:</strong>
                            <ul>
                                <li>Baseline conversion rate: [input]</li>
                                <li>Minimum detectable effect: [input]</li>
                                <li>Statistical power: 80%</li>
                                <li>Significance level: α = 0.05</li>
                            </ul>
                        </li>
                        <li><strong>Formula:</strong> n = 16σ²/δ²</li>
                        <li><strong>Typical duration:</strong> 2-4 weeks</li>
                    </ol>
                    <p><strong>Best practices:</strong> Run test for full business cycle, ensure sufficient sample size, check for statistical significance, avoid peeking at results early</p>
                </div>
                <p class="explanation">Assumes you know what to test. Doesn't identify confounders or alternative explanations.</p>
            `
        },
        {
            id: 'data-pattern',
            content: `
                <h3>The Observed Data</h3>
                <p class="explanation">Two observations. Most people would conclude: "Use short flows everywhere." But wait...</p>
            `
        },
        {
            id: 'causal-model',
            content: `
                <h3>Causal Model Reveals Confounding</h3>
                <p class="explanation">The skill reveals: long flows aren't assigned randomly. Diabetes users get long flows AND have different intent. The correlation may be spurious.</p>
            `
        },
        {
            id: 'experimental-design',
            content: `
                <h3>Proper Experimental Design</h3>
                <div style="background: white; padding: 2rem; border-radius: 12px; margin: 2rem 0;">
                    <h4>Experiment 2: Randomize Flow Within Condition</h4>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                        <tr style="background: #f7f7f7;">
                            <th style="padding: 0.5rem; border: 1px solid #ddd;">Condition</th>
                            <th style="padding: 0.5rem; border: 1px solid #ddd;">Assignment</th>
                        </tr>
                        <tr>
                            <td style="padding: 0.5rem; border: 1px solid #ddd;">Diabetes users</td>
                            <td style="padding: 0.5rem; border: 1px solid #ddd;">50% Short | 50% Long</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.5rem; border: 1px solid #ddd;">Acne users</td>
                            <td style="padding: 0.5rem; border: 1px solid #ddd;">50% Short | 50% Long</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.5rem; border: 1px solid #ddd;">Other conditions</td>
                            <td style="padding: 0.5rem; border: 1px solid #ddd;">50% Short | 50% Long</td>
                        </tr>
                    </table>
                    <div style="margin-top: 1.5rem;">
                        <p>✓ Controls for condition-specific user intent</p>
                        <p>✓ Isolates causal effect of flow length</p>
                        <p>✓ Eliminates confounding</p>
                    </div>
                </div>
                <p class="explanation">Now we can answer: does flow length CAUSE lower completion? Without this, we'd make the wrong decision.</p>
            `
        },
        {
            id: 'experiment-roadmap',
            content: `
                <h3>Comprehensive Experimental Strategy</h3>
                <div style="background: white; padding: 2rem; border-radius: 12px; margin: 2rem 0;">
                    <div style="margin-bottom: 1.5rem;">
                        <h4 style="color: var(--accent-blue);">Phase 1: CTA vs Content (Diabetes pages)</h4>
                        <p style="font-size: 0.9rem;">→ 4 variants, 4K users, 2-3 weeks</p>
                        <p style="font-size: 0.9rem;">→ Goal: Lift completion 25%→40%</p>
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <h4 style="color: var(--accent-green);">Phase 2: Flow Length RCT</h4>
                        <p style="font-size: 0.9rem;">→ 5 conditions, 5K users, 3-4 weeks</p>
                        <p style="font-size: 0.9rem;">→ Goal: Establish causality</p>
                    </div>
                    <div>
                        <h4 style="color: var(--accent-yellow);">Phase 3: Optimize (if needed)</h4>
                        <p style="font-size: 0.9rem;">→ Progress indicators + Skip logic</p>
                        <p style="font-size: 0.9rem;">→ Goal: Close completion gap</p>
                    </div>
                </div>
                <p class="explanation">Not one test—a systematic experimental strategy that eliminates alternative explanations.</p>
                <p style="margin-top: 2rem;">
                    <a href="example3-ab-test-causal-inference.md" target="_blank">📄 Read full conversation →</a>
                </p>
            `
        }
    ];

    steps.forEach(step => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'step';
        stepDiv.setAttribute('data-step', step.id);
        stepDiv.innerHTML = `<div class="narrative-overlay">${step.content}</div>`;
        container.appendChild(stepDiv);
    });
}

function handleExample3StepEnter(response) {
    const { element } = response;
    const step = element.getAttribute('data-step');
    const viz = d3.select('#example3-viz');

    switch (step) {
        case 'data-pattern':
            renderBarChart(viz);
            break;
        case 'causal-model':
            renderCausalDAG(viz);
            break;
        case 'experimental-design':
        case 'experiment-roadmap':
            viz.html(''); // Content in step
            break;
        default:
            viz.html('');
    }
}

function renderBarChart(container) {
    container.html('');

    const width = 600;
    const height = 400;

    const svg = container.append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background', '#fff');

    const data = [
        { label: 'Diabetes pages', value: 25, color: '#e74c3c' },
        { label: 'Acne pages', value: 67, color: '#27ae60' },
        { label: 'Short flow', value: 60, color: '#3498db' },
        { label: 'Long flow', value: 35, color: '#f39c12' }
    ];

    const barHeight = 40;
    const barSpacing = 80;
    const maxWidth = 400;

    data.forEach((d, i) => {
        const y = 50 + i * barSpacing;
        const barWidth = (d.value / 100) * maxWidth;

        // Label
        svg.append('text')
            .attr('x', 20)
            .attr('y', y + barHeight / 2 + 5)
            .attr('font-size', '14px')
            .attr('font-weight', 'bold')
            .text(d.label);

        // Bar
        svg.append('rect')
            .attr('x', 180)
            .attr('y', y)
            .attr('width', 0)
            .attr('height', barHeight)
            .attr('fill', d.color)
            .attr('opacity', 0.7)
            .transition()
            .duration(1000)
            .delay(i * 200)
            .attr('width', barWidth);

        // Percentage
        svg.append('text')
            .attr('x', 180 + barWidth + 10)
            .attr('y', y + barHeight / 2 + 5)
            .attr('font-size', '14px')
            .attr('font-weight', 'bold')
            .attr('opacity', 0)
            .text(`${d.value}%`)
            .transition()
            .duration(500)
            .delay(i * 200 + 1000)
            .attr('opacity', 1);
    });
}

function renderCausalDAG(container) {
    container.html('');

    const width = 800;
    const height = 600;

    const svg = container.append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background', '#fff');

    // Node positions
    const nodes = [
        { id: 'condition', label: 'CONDITION\n(Diabetes vs Acne)', x: 400, y: 100 },
        { id: 'content', label: 'Content', x: 200, y: 300 },
        { id: 'intent', label: 'User Intent', x: 400, y: 300 },
        { id: 'flow', label: 'Flow Length', x: 600, y: 300 },
        { id: 'completion', label: 'COMPLETION', x: 400, y: 500 }
    ];

    // Edges (causal relationships)
    const edges = [
        { from: 'condition', to: 'content' },
        { from: 'condition', to: 'intent' },
        { from: 'condition', to: 'flow' },
        { from: 'content', to: 'completion' },
        { from: 'intent', to: 'completion' },
        { from: 'flow', to: 'completion' }
    ];

    // Draw edges first (so nodes appear on top)
    const edgeGroup = svg.append('g');

    edges.forEach((edge, i) => {
        const fromNode = nodes.find(n => n.id === edge.from);
        const toNode = nodes.find(n => n.id === edge.to);

        edgeGroup.append('line')
            .attr('x1', fromNode.x)
            .attr('y1', fromNode.y)
            .attr('x2', toNode.x)
            .attr('y2', toNode.y)
            .attr('stroke', '#3498db')
            .attr('stroke-width', 3)
            .attr('opacity', 0)
            .attr('marker-end', 'url(#arrowhead)')
            .transition()
            .delay(800 + i * 200)
            .duration(600)
            .attr('opacity', 0.7);
    });

    // Define arrowhead marker
    svg.append('defs').append('marker')
        .attr('id', 'arrowhead')
        .attr('markerWidth', 10)
        .attr('markerHeight', 10)
        .attr('refX', 25)
        .attr('refY', 3)
        .attr('orient', 'auto')
        .append('polygon')
        .attr('points', '0 0, 6 3, 0 6')
        .attr('fill', '#3498db');

    // Draw nodes
    const nodeGroup = svg.append('g');

    nodes.forEach((node, i) => {
        const g = nodeGroup.append('g')
            .attr('transform', `translate(${node.x},${node.y})`)
            .attr('opacity', 0);

        g.append('rect')
            .attr('x', -80)
            .attr('y', -30)
            .attr('width', 160)
            .attr('height', 60)
            .attr('fill', node.id === 'condition' ? '#f39c12' : '#ecf0f1')
            .attr('stroke', node.id === 'condition' ? '#e67e22' : '#bdc3c7')
            .attr('stroke-width', 2)
            .attr('rx', 8);

        g.append('text')
            .attr('text-anchor', 'middle')
            .attr('y', 5)
            .attr('font-size', '14px')
            .attr('font-weight', 'bold')
            .selectAll('tspan')
            .data(node.label.split('\n'))
            .join('tspan')
            .attr('x', 0)
            .attr('dy', (d, i) => i === 0 ? 0 : '1.2em')
            .text(d => d);

        g.transition()
            .delay(i * 200)
            .duration(600)
            .attr('opacity', 1);
    });

    // Add insight text
    svg.append('text')
        .attr('x', 400)
        .attr('y', 50)
        .attr('text-anchor', 'middle')
        .attr('font-size', '18px')
        .attr('font-weight', 'bold')
        .attr('fill', '#e74c3c')
        .attr('opacity', 0)
        .text('CONDITION is a CONFOUNDER')
        .transition()
        .delay(2000)
        .duration(800)
        .attr('opacity', 1);

    svg.append('text')
        .attr('x', 400)
        .attr('y', 575)
        .attr('text-anchor', 'middle')
        .attr('font-size', '16px')
        .attr('font-style', 'italic')
        .attr('fill', '#666')
        .attr('opacity', 0)
        .text('Correlation ≠ Causation')
        .transition()
        .delay(2500)
        .duration(800)
        .attr('opacity', 1);
}
