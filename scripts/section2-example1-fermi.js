/**
 * Section 2, Example 1: Market Sizing with Fermi Estimation
 * Visualizes the Fermi decomposition tree and unit economics
 */

// Initialize Example 1 when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initExample1();
});

function initExample1() {
    console.log('Example 1: Market Sizing initialized');

    // Add steps dynamically FIRST
    addExample1Steps();

    // THEN set up Scrollama for Example 1 (after steps exist in DOM)
    setTimeout(() => {
        const example1Scroller = scrollama();

        example1Scroller
            .setup({
                step: '#example1 .step',
                offset: 0.5,
                debug: false,
            })
            .onStepEnter(handleExample1StepEnter);

        // Handle window resize
        window.addEventListener('resize', () => {
            example1Scroller.resize();
        });

        console.log('Example 1 scrollama initialized with steps:', document.querySelectorAll('#example1 .step').length);
    }, 100); // Small delay to ensure DOM is updated
}

/**
 * Add scroll steps for Example 1
 */
function addExample1Steps() {
    const container = document.querySelector('#example1 .scroll-text');
    if (!container) return;

    const steps = [
        {
            id: 'search-style',
            title: 'The Search-Style Approach',
            content: `
                <div class="prompt-box simple">
                    <h3>Simple query:</h3>
                    <p>"What's the market size for a weight loss AI chatbot in the US?"</p>
                </div>
                <div class="generic-response">
                    <p>The US weight loss market is valued at approximately $72 billion as of 2023.
                    The digital health and wellness app market is growing at 15% annually.
                    AI chatbot adoption in health tech represents a subset of this market,
                    estimated at $1-2 billion for behavioral health applications.</p>
                    <p><strong>Key factors:</strong></p>
                    <ul>
                        <li>Growing obesity rates</li>
                        <li>Increasing digital health adoption</li>
                        <li>Rising interest in personalized solutions</li>
                        <li>Competitive landscape includes Noom, MyFitnessPal</li>
                    </ul>
                </div>
                <p class="explanation">Generic numbers. No path to validate. No way to adjust for your specific product.</p>
            `
        },
        {
            id: 'structured-query',
            title: 'The Structured Query',
            content: `
                <div class="prompt-box structured">
                    <h3>Structured query:</h3>
                    <p>"I want to build an AI chatbot for weight loss. Estimate the SAM using Fermi decomposition."</p>
                </div>
                <p class="explanation">Instead of asking for a generic number, we're asking for a specific methodology: Fermi estimation.</p>
            `
        },
        {
            id: 'clarifying-questions',
            title: 'Clarifying Context',
            content: `
                <h3>The Skill Starts by Asking</h3>
                <div class="qa-list" style="margin-top: 1.5rem;">
                    <p><strong>Geographic scope?</strong> → US Market</p>
                    <p><strong>TAM/SAM/SOM?</strong> → SAM</p>
                    <p><strong>Business model?</strong> → Free + Ads</p>
                    <p><strong>Timeline?</strong> → 6-month MVP</p>
                    <p><strong>Team size?</strong> → 3 engineers</p>
                </div>
                <p class="explanation" style="margin-top: 1.5rem;">The skill starts by clarifying context—not assuming, but asking.</p>
            `
        },
        {
            id: 'decomposition',
            title: 'Fermi Decomposition',
            content: `
                <h3>Systematic Breakdown</h3>
                <p>Watch as the market size is decomposed step by step...</p>
                <p class="explanation">Transparent decomposition. Every assumption visible. Every step challengeable.</p>
            `
        },
        {
            id: 'bounds',
            title: 'Bounds & Sensitivity',
            content: `
                <h3>Not Just a Point Estimate</h3>
                <p class="explanation">A range with sensitivity analysis showing which assumptions matter most.</p>
            `
        },
        {
            id: 'unit-economics',
            title: 'Critical Insight',
            content: `
                <h3>Unit Economics Breakdown</h3>
                <div style="font-family: var(--font-mono); font-size: 1.2rem; margin: 2rem 0;">
                    <p>Revenue:  $3.00/user/year</p>
                    <p>LLM cost: $4.73/user/year</p>
                    <p style="color: var(--accent-red); font-weight: bold;">Margin:   -$1.73/user/year ❌</p>
                </div>
                <div style="background: #fee; padding: 2rem; border-radius: 8px; border: 2px solid var(--accent-red); margin: 2rem 0;">
                    <h4 style="color: var(--accent-red);">BUSINESS MODEL DOESN'T WORK</h4>
                </div>
                <div style="background: #efe; padding: 2rem; border-radius: 8px; border: 2px solid var(--accent-green); margin-top: 2rem;">
                    <h4>Solution: Freemium Model</h4>
                    <ul style="font-family: var(--font-mono);">
                        <li>Free tier: 5 msgs/day → $3 ads</li>
                        <li>Premium: $7/month → $84/year</li>
                        <li>15% conversion</li>
                        <li>Blended ARPU: $15.15/user</li>
                        <li style="color: var(--accent-green); font-weight: bold;">Margin: $12.25/user ✓</li>
                    </ul>
                </div>
                <p class="explanation" style="margin-top: 2rem;">
                    The structured approach caught a fatal flaw before building. Search-style estimation would have missed this entirely.
                </p>
                <p style="margin-top: 2rem;">
                    <a href="example1-market-sizing-fermi.md" target="_blank">📄 Read full conversation →</a>
                </p>
            `
        }
    ];

    steps.forEach((step, index) => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'step';
        stepDiv.setAttribute('data-step', step.id);
        stepDiv.innerHTML = `
            <div class="narrative-overlay">
                ${step.content}
            </div>
        `;
        container.appendChild(stepDiv);
    });
}

/**
 * Handle step enter for Example 1
 */
function handleExample1StepEnter(response) {
    const { element, index, direction } = response;
    const step = element.getAttribute('data-step');

    console.log('Example 1 step:', step);

    const viz = d3.select('#example1-viz');

    switch (step) {
        case 'search-style':
        case 'structured-query':
        case 'clarifying-questions':
            viz.html(''); // Clear - no visualization for these steps
            break;

        case 'decomposition':
            renderFermiTree(viz);
            break;

        case 'bounds':
            renderBoundsVisualization(viz);
            break;

        case 'unit-economics':
            // Content is in the step itself
            viz.html('');
            break;
    }
}

/**
 * Render Fermi decomposition tree
 */
function renderFermiTree(container) {
    container.html(''); // Clear previous

    const width = 800;
    const height = 600;

    const svg = container.append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background', '#fff');

    // Tree data
    const treeData = {
        name: 'US Adults: 260M',
        children: [
            {
                name: '70% overweight/obese → 182M',
                children: [
                    {
                        name: '45% actively dieting → 82M',
                        children: [
                            {
                                name: '35% digital adopters → 29M',
                                children: [
                                    {
                                        name: '22% AI chatbot users → 6.4M (SAM)',
                                        children: [
                                            { name: '$3 ad revenue/user/year → $19M' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };

    const root = d3.hierarchy(treeData);
    const treeLayout = d3.tree().size([width - 100, height - 100]);
    treeLayout(root);

    // Draw links
    svg.selectAll('.link')
        .data(root.links())
        .join('path')
        .attr('class', 'link')
        .attr('d', d3.linkVertical()
            .x(d => d.x + 50)
            .y(d => d.y + 50))
        .attr('fill', 'none')
        .attr('stroke', '#999')
        .attr('stroke-width', 2)
        .attr('opacity', 0)
        .transition()
        .delay((d, i) => i * 200)
        .duration(600)
        .attr('opacity', 1);

    // Draw nodes
    const nodes = svg.selectAll('.node')
        .data(root.descendants())
        .join('g')
        .attr('class', 'node')
        .attr('transform', d => `translate(${d.x + 50},${d.y + 50})`)
        .attr('opacity', 0);

    nodes.append('circle')
        .attr('r', 8)
        .attr('fill', '#3498db');

    nodes.append('text')
        .attr('dy', -15)
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .attr('fill', '#333')
        .text(d => d.data.name);

    nodes.transition()
        .delay((d, i) => i * 200)
        .duration(600)
        .attr('opacity', 1);
}

/**
 * Render bounds and sensitivity visualization
 */
function renderBoundsVisualization(container) {
    container.html(''); // Clear previous

    const width = 800;
    const height = 400;

    const svg = container.append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background', '#fff');

    // Range visualization
    const scale = d3.scaleLinear()
        .domain([0, 60])
        .range([50, width - 50]);

    // Draw range line
    svg.append('line')
        .attr('x1', scale(4))
        .attr('y1', 100)
        .attr('x2', scale(60))
        .attr('y2', 100)
        .attr('stroke', '#999')
        .attr('stroke-width', 4);

    // Add markers
    const markers = [
        { value: 4, label: 'Pessimistic: $4M' },
        { value: 19, label: 'Central: $19M' },
        { value: 60, label: 'Optimistic: $60M' }
    ];

    markers.forEach(marker => {
        svg.append('circle')
            .attr('cx', scale(marker.value))
            .attr('cy', 100)
            .attr('r', 8)
            .attr('fill', marker.value === 19 ? '#3498db' : '#f39c12');

        svg.append('text')
            .attr('x', scale(marker.value))
            .attr('y', 130)
            .attr('text-anchor', 'middle')
            .attr('font-size', '14px')
            .attr('font-weight', 'bold')
            .text(marker.label);
    });

    // Sensitivity bars
    const sensitivity = [
        { factor: 'Digital adoption rate', impact: 8 },
        { factor: 'Chatbot preference', impact: 6 },
        { factor: 'Ad revenue', impact: 4 }
    ];

    const barHeight = 30;
    const barY = 200;

    sensitivity.forEach((item, i) => {
        const y = barY + i * (barHeight + 10);

        svg.append('text')
            .attr('x', 50)
            .attr('y', y + barHeight / 2 + 5)
            .attr('font-size', '14px')
            .text(item.factor);

        svg.append('rect')
            .attr('x', 250)
            .attr('y', y)
            .attr('width', item.impact * 50)
            .attr('height', barHeight)
            .attr('fill', '#3498db')
            .attr('opacity', 0.7);
    });
}
