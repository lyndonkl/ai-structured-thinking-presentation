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
                    <div style="font-size: 0.95rem; line-height: 1.7;">
                        <p style="margin-bottom: 0.75rem;"><strong># Role:</strong> Market Sizing Analyst using Fermi Estimation</p>

                        <p style="margin-bottom: 0.75rem;"><strong>## Context:</strong><br>
                        I'm evaluating a personalized health newsletter subscription service. The product will provide AI-curated health content, wellness tips, and chronic disease management advice tailored to individual user profiles.</p>

                        <p style="margin-bottom: 0.75rem;"><strong>## Task:</strong><br>
                        Use Fermi estimation to calculate the market size for this product. Break down the calculation into estimable components and show your decomposition clearly.</p>

                        <p style="margin-bottom: 0.75rem;"><strong>## Method Requirements:</strong></p>
                        <ul style="margin-left: 1.5rem; margin-bottom: 0.75rem; line-height: 1.6;">
                            <li>Decompose into estimable parts</li>
                            <li>State assumptions explicitly</li>
                            <li>Provide optimistic and pessimistic bounds</li>
                            <li>Triangulate with alternate approach</li>
                            <li>Identify key drivers and sensitivity</li>
                        </ul>

                        <p style="margin-bottom: 0;"><strong>## Output Format:</strong><br>
                        Show decomposition steps, calculation, bounds, sanity checks, and final estimate with confidence range.</p>
                    </div>
                </div>
                <p class="explanation">A structured prompt specifies the role, provides context, names the methodology (Fermi estimation), and defines output requirements—but leaves room for the skill to ask clarifying questions.</p>
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
            viz.html(`
                <div style="color: white; font-size: 1.5rem; text-align: center; padding: 2rem; max-width: 400px;">
                    <p style="margin-bottom: 1rem;">👉</p>
                    <p>Read the simple query and generic response</p>
                </div>
            `);
            break;

        case 'structured-query':
            viz.html(`
                <div style="color: white; font-size: 1.5rem; text-align: center; padding: 2rem; max-width: 400px;">
                    <p style="margin-bottom: 1rem;">📋</p>
                    <p>Notice the difference in how the question is structured</p>
                </div>
            `);
            break;

        case 'clarifying-questions':
            viz.html(`
                <div style="color: white; font-size: 1.5rem; text-align: center; padding: 2rem; max-width: 400px;">
                    <p style="margin-bottom: 1rem;">❓</p>
                    <p>The skill asks clarifying questions before analyzing</p>
                </div>
            `);
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
        .style('background', '#ffffff')
        .style('border-radius', '12px')
        .style('box-shadow', '0 4px 20px rgba(0,0,0,0.3)');

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

    const width = 900; // Wider to accommodate labels
    const height = 400;

    const svg = container.append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background', '#ffffff')
        .style('border-radius', '12px')
        .style('box-shadow', '0 4px 20px rgba(0,0,0,0.3)');

    // Range visualization
    const scale = d3.scaleLinear()
        .domain([0, 60])
        .range([100, width - 150]); // More padding on both sides

    // Draw range line with growing animation
    const rangeLine = svg.append('line')
        .attr('x1', scale(4))
        .attr('y1', 100)
        .attr('x2', scale(4)) // Start at same position as x1
        .attr('y2', 100)
        .attr('stroke', '#999')
        .attr('stroke-width', 4);

    // Use setTimeout to ensure DOM is ready before animating
    setTimeout(() => {
        // Animate line growing from left to right
        rangeLine.transition()
            .duration(600)
            .ease(d3.easeCubicOut)
            .attr('x2', scale(60));
    }, 10);

    // Add markers with sequential animation
    const markers = [
        { value: 4, label: 'Pessimistic: $4M' },
        { value: 19, label: 'Central: $19M' },
        { value: 60, label: 'Optimistic: $60M' }
    ];

    markers.forEach((marker, i) => {
        // Add circle (start invisible and small)
        const circle = svg.append('circle')
            .attr('cx', scale(marker.value))
            .attr('cy', 100)
            .attr('r', 0) // Start at radius 0
            .attr('fill', marker.value === 19 ? '#3498db' : '#f39c12')
            .attr('opacity', 0); // Start invisible

        // Add label (start invisible)
        const label = svg.append('text')
            .attr('x', scale(marker.value))
            .attr('y', 130)
            .attr('text-anchor', 'middle')
            .attr('font-size', '14px')
            .attr('font-weight', 'bold')
            .attr('opacity', 0) // Start invisible
            .text(marker.label);

        // Animate after DOM is ready
        setTimeout(() => {
            // Animate circle appearing and growing
            circle.transition()
                .delay(700 + i * 300) // Stagger: 700ms, 1000ms, 1300ms
                .duration(400)
                .ease(d3.easeBackOut) // Slight bounce for emphasis
                .attr('r', 8)
                .attr('opacity', 1);

            // Animate label fading in
            label.transition()
                .delay(700 + i * 300 + 200) // Slightly after circle
                .duration(300)
                .attr('opacity', 1);
        }, 10);
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

        // Add label (start invisible)
        const label = svg.append('text')
            .attr('x', 50)
            .attr('y', y + barHeight / 2 + 5)
            .attr('font-size', '14px')
            .attr('opacity', 0)
            .text(item.factor);

        // Add bar (start with zero width)
        const bar = svg.append('rect')
            .attr('x', 250)
            .attr('y', y)
            .attr('width', 0) // Start at width 0
            .attr('height', barHeight)
            .attr('fill', '#3498db')
            .attr('opacity', 0.7);

        // Animate after DOM is ready
        setTimeout(() => {
            // Fade in label
            label.transition()
                .delay(1800 + i * 200) // Start after markers, stagger each bar
                .duration(300)
                .attr('opacity', 1);

            // Animate bar growing from left to right
            bar.transition()
                .delay(1800 + i * 200)
                .duration(500)
                .ease(d3.easeCubicOut) // Fast start, slow end
                .attr('width', item.impact * 50);
        }, 10);
    });
}
