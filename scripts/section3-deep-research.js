/**
 * Section 3: Deep Research Workflow
 * Shows how to chain skills for comprehensive research
 */

// Update Section 3 based on scroll step
window.updateSection3 = function(step, direction) {
    console.log('Section 3 step:', step);

    const viz = d3.select('#section3-viz');

    switch (step) {
        case 'workflow-intro':
            renderWorkflowCycle(viz);
            break;

        case 'meta-example':
            renderMetaExample(viz);
            break;

        case 'custom-prompt':
            renderCustomPrompt(viz);
            break;

        case 'output-preview':
            renderOutputPreview(viz);
            break;

        case 'closing':
            viz.html(''); // Content in HTML
            break;
    }
};

/**
 * Render the workflow cycle diagram
 */
function renderWorkflowCycle(container) {
    container.html('');

    const width = 600;
    const height = 600;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 160;

    // Create SVG
    const svg = container.append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', `0 0 ${width} ${height}`)
        .style('display', 'block')
        .style('margin', 'auto');

    // Define soft, eye-friendly colors
    const nodes = [
        {
            id: 'skills',
            label: 'Use Skills',
            icon: '🎯',
            detail: 'Structured Thinking',
            angle: -90, // Top
            color: '#9b87c4', // Soft purple
            gradient: ['#b8a5d6', '#8b75b8']
        },
        {
            id: 'synthesize',
            label: 'Synthesize',
            icon: '💡',
            detail: 'Custom Prompt',
            angle: 150, // Bottom left
            color: '#e9a87e', // Soft orange/peach
            gradient: ['#f4b88f', '#de9870']
        },
        {
            id: 'research',
            label: 'Deep Research',
            icon: '📚',
            detail: 'Generate Output',
            angle: 30, // Bottom right
            color: '#6eb5a8', // Soft teal/green
            gradient: ['#82c4b7', '#5ca699']
        }
    ];

    // Calculate positions
    nodes.forEach(node => {
        const angleRad = (node.angle * Math.PI) / 180;
        node.x = centerX + radius * Math.cos(angleRad);
        node.y = centerY + radius * Math.sin(angleRad);
    });

    // Create arrow definitions
    const defs = svg.append('defs');

    // Arrow marker
    defs.append('marker')
        .attr('id', 'arrowhead')
        .attr('viewBox', '0 0 10 10')
        .attr('refX', 8)
        .attr('refY', 5)
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M 0 0 L 10 5 L 0 10 z')
        .attr('fill', '#999');

    // Draw curved arrows between nodes
    const arrows = [
        { from: nodes[0], to: nodes[1] }, // Skills → Synthesize
        { from: nodes[1], to: nodes[2] }, // Synthesize → Research
        { from: nodes[2], to: nodes[0] }  // Research → Skills (cycle)
    ];

    const arrowPaths = arrows.map((arrow, i) => {
        const dx = arrow.to.x - arrow.from.x;
        const dy = arrow.to.y - arrow.from.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Control point for curved path (offset perpendicular to line)
        const midX = (arrow.from.x + arrow.to.x) / 2;
        const midY = (arrow.from.y + arrow.to.y) / 2;
        const offsetX = -dy / dist * 40; // Perpendicular offset
        const offsetY = dx / dist * 40;
        const controlX = midX + offsetX;
        const controlY = midY + offsetY;

        // Shorten the path to not overlap with circles
        const nodeRadius = 60;
        const fromAngle = Math.atan2(dy, dx);
        const toAngle = Math.atan2(dy, dx);

        const fromX = arrow.from.x + Math.cos(fromAngle) * nodeRadius;
        const fromY = arrow.from.y + Math.sin(fromAngle) * nodeRadius;
        const toX = arrow.to.x - Math.cos(toAngle) * nodeRadius;
        const toY = arrow.to.y - Math.sin(toAngle) * nodeRadius;

        const path = `M ${fromX} ${fromY} Q ${controlX} ${controlY} ${toX} ${toY}`;

        const pathElement = svg.append('path')
            .attr('d', path)
            .attr('stroke', '#bbb')
            .attr('stroke-width', 3)
            .attr('fill', 'none')
            .attr('marker-end', 'url(#arrowhead)')
            .attr('opacity', 0);

        const pathLength = pathElement.node().getTotalLength();
        pathElement
            .attr('stroke-dasharray', pathLength)
            .attr('stroke-dashoffset', pathLength);

        return { element: pathElement, length: pathLength, delay: i * 600 + 800 };
    });

    // Draw nodes
    const nodeGroups = nodes.map((node, i) => {
        const g = svg.append('g')
            .attr('transform', `translate(${node.x}, ${node.y})`)
            .style('opacity', 0);

        // Circle with gradient
        const gradientId = `gradient-${node.id}`;
        defs.append('linearGradient')
            .attr('id', gradientId)
            .attr('x1', '0%')
            .attr('y1', '0%')
            .attr('x2', '100%')
            .attr('y2', '100%')
            .selectAll('stop')
            .data([
                { offset: '0%', color: node.gradient[0] },
                { offset: '100%', color: node.gradient[1] }
            ])
            .join('stop')
            .attr('offset', d => d.offset)
            .attr('stop-color', d => d.color);

        g.append('circle')
            .attr('r', 55)
            .attr('fill', `url(#${gradientId})`)
            .attr('stroke', 'white')
            .attr('stroke-width', 3)
            .style('filter', 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))');

        // Icon
        g.append('text')
            .attr('text-anchor', 'middle')
            .attr('dy', '-0.5em')
            .attr('font-size', '28px')
            .text(node.icon);

        // Label
        g.append('text')
            .attr('text-anchor', 'middle')
            .attr('dy', '1.5em')
            .attr('font-size', '13px')
            .attr('font-weight', '600')
            .attr('fill', '#2c3e50')
            .text(node.label);

        // Detail
        g.append('text')
            .attr('text-anchor', 'middle')
            .attr('dy', '2.7em')
            .attr('font-size', '10px')
            .attr('fill', '#34495e')
            .text(node.detail);

        return { group: g, delay: i * 300 };
    });

    // Animate nodes appearing
    nodeGroups.forEach(({ group, delay }) => {
        setTimeout(() => {
            group.transition()
                .duration(600)
                .ease(d3.easeBackOut)
                .style('opacity', 1)
                .attr('transform', function() {
                    const currentTransform = d3.select(this).attr('transform');
                    return currentTransform;
                });
        }, delay);
    });

    // Animate arrows drawing
    arrowPaths.forEach(({ element, delay }) => {
        setTimeout(() => {
            element.transition()
                .duration(800)
                .ease(d3.easeCubicInOut)
                .attr('stroke-dashoffset', 0)
                .attr('opacity', 1);
        }, delay);
    });

    // Add traveling pulse effect
    const pulse = svg.append('circle')
        .attr('r', 8)
        .attr('fill', '#3498db')
        .attr('opacity', 0)
        .style('filter', 'drop-shadow(0 0 4px rgba(52, 152, 219, 0.8))');

    // Animate pulse traveling around the cycle
    setTimeout(() => {
        animatePulseAroundCycle(pulse, arrowPaths, 0);
    }, 2800);
}

/**
 * Animate a pulse traveling around the cycle continuously
 */
function animatePulseAroundCycle(pulse, arrowPaths, currentPath) {
    if (currentPath >= arrowPaths.length) {
        currentPath = 0;
    }

    const pathElement = arrowPaths[currentPath].element;
    const pathNode = pathElement.node();
    const pathLength = pathNode.getTotalLength();

    pulse.attr('opacity', 1);

    pulse.transition()
        .duration(1200)
        .ease(d3.easeLinear)
        .attrTween('transform', () => {
            return (t) => {
                const point = pathNode.getPointAtLength(t * pathLength);
                return `translate(${point.x}, ${point.y})`;
            };
        })
        .on('end', () => {
            // Continue to next path
            animatePulseAroundCycle(pulse, arrowPaths, currentPath + 1);
        });
}

/**
 * Render the meta-example showing Fermi techniques
 */
function renderMetaExample(container) {
    container.html('');

    const techniques = [
        { title: '✓ Decomposition', detail: '260M → 182M → 82M → 29M → 6.4M' },
        { title: '✓ Assumption bounding', detail: 'Pessimistic: $4M | Optimistic: $60M' },
        { title: '✓ Triangulation', detail: 'Top-down vs bottom-up approaches' },
        { title: '✓ Sensitivity analysis', detail: 'Which assumptions matter most' }
    ];

    // Create wrapper
    const wrapper = container.append('div')
        .style('background', 'white')
        .style('padding', '2rem')
        .style('border-radius', '12px')
        .style('max-width', '700px')
        .style('margin', '2rem auto')
        .style('box-shadow', '0 4px 20px rgba(0,0,0,0.3)');

    // Add title
    wrapper.append('h4')
        .style('text-align', 'center')
        .style('margin-bottom', '1.5rem')
        .text('Techniques Used in Example 1');

    // Create grid container
    const grid = wrapper.append('div')
        .style('display', 'grid')
        .style('gap', '1rem');

    // Add technique cards with animation
    techniques.forEach((technique, i) => {
        const card = grid.append('div')
            .style('background', '#e8f5e9')
            .style('padding', '1rem')
            .style('border-radius', '8px')
            .style('border-left', '4px solid var(--accent-green)')
            .style('opacity', 0)
            .style('transform', 'translateY(20px)');

        card.append('strong').text(technique.title);
        card.append('p')
            .style('font-size', '0.9rem')
            .style('margin-top', '0.5rem')
            .text(technique.detail);

        // Animate card appearing
        setTimeout(() => {
            card.transition()
                .delay(i * 250)
                .duration(600)
                .ease(d3.easeBackOut)
                .style('opacity', 1)
                .style('transform', 'translateY(0)');
        }, 10);
    });
}

/**
 * Render the custom prompt for deep research
 */
function renderCustomPrompt(container) {
    container.html('');

    // Create wrapper
    const wrapper = container.append('div')
        .style('background', 'white')
        .style('padding', '2rem')
        .style('border-radius', '12px')
        .style('max-width', '800px')
        .style('margin', '2rem auto')
        .style('box-shadow', '0 4px 20px rgba(0,0,0,0.3)')
        .style('opacity', 0)
        .style('transform', 'scale(0.95)');

    // Add title
    wrapper.append('h4')
        .style('text-align', 'center')
        .style('margin-bottom', '1.5rem')
        .text('Deep Research Prompt Structure');

    // Create prompt box
    const promptBox = wrapper.append('div')
        .attr('class', 'prompt-box deep-research')
        .style('font-size', '0.95rem')
        .style('line-height', '1.8');

    // First paragraph with highlighted text
    const p1 = promptBox.append('p');
    p1.append('span')
        .style('background', '#fff3cd')
        .style('padding', '0 4px')
        .text('Based on the Fermi estimation approach we just used');
    p1.append('span').text(', research and create a comprehensive guide on estimation techniques for business decisions.');

    // Include section
    promptBox.append('p')
        .style('margin-top', '1rem')
        .html('<strong>Include:</strong>');

    const ol = promptBox.append('ol')
        .style('margin-left', '1.5rem');

    [
        'Taxonomy of estimation methods',
        'When to use each technique (decision tree)',
        'Comparison table (accuracy, speed, data requirements)',
        'Real examples from business contexts',
        'Common pitfalls and how to avoid them',
        'Integration strategies (combining multiple techniques)'
    ].forEach(item => ol.append('li').text(item));

    // Format paragraph
    const p2 = promptBox.append('p').style('margin-top', '1rem');
    p2.append('span')
        .style('background', '#d4edda')
        .style('padding', '0 4px')
        .text('Format as:');
    p2.append('span').text(' Executive summary + detailed sections + decision framework');

    // Context paragraph
    const p3 = promptBox.append('p').style('margin-top', '1rem');
    p3.append('span')
        .style('background', '#cfe2ff')
        .style('padding', '0 4px')
        .text('Context:');
    p3.append('span').text(' Technical leadership audience making strategic decisions under uncertainty');

    // Notice text
    wrapper.append('p')
        .style('text-align', 'center')
        .style('margin-top', '1.5rem')
        .style('color', '#666')
        .style('font-style', 'italic')
        .text('Notice: We\'re using what we learned (Fermi) to explore the broader space (all estimation techniques)');

    // Animate wrapper appearing
    setTimeout(() => {
        wrapper.transition()
            .duration(600)
            .ease(d3.easeBackOut)
            .style('opacity', 1)
            .style('transform', 'scale(1)');
    }, 10);
}

/**
 * Render the output preview (table of contents)
 */
function renderOutputPreview(container) {
    container.html('');

    // Create wrapper
    const wrapper = container.append('div')
        .style('background', 'white')
        .style('padding', '2rem')
        .style('border-radius', '12px')
        .style('max-width', '800px')
        .style('margin', '2rem auto')
        .style('box-shadow', '0 4px 20px rgba(0,0,0,0.3)');

    // Add title
    wrapper.append('h4')
        .style('text-align', 'center')
        .style('margin-bottom', '1.5rem')
        .style('color', '#3498db')
        .text('Generated Output: "Strategic Estimation Techniques Guide"');

    // Create TOC container
    const toc = wrapper.append('div')
        .style('font-family', 'var(--font-mono)')
        .style('font-size', '0.9rem')
        .style('line-height', '1.8');

    // TOC sections with animation
    const sections = [
        {
            title: 'Executive Summary',
            detail: '(2 pages)',
            subsections: []
        },
        {
            title: '1. Taxonomy of Estimation Methods',
            subsections: [
                '1.1 Decomposition-Based (Fermi, Work Breakdown)',
                '1.2 Comparison-Based (Analogous, Relative)',
                '1.3 Statistical (Three-Point, PERT, Monte Carlo)',
                '1.4 Expert-Based (Delphi, Consensus)'
            ]
        },
        {
            title: '2. Decision Framework: Which Technique When?',
            subsections: [
                '→ Time available? Fast: Analogous | Slow: Monte Carlo',
                '→ Data availability? Low: Fermi | High: Statistical',
                '→ Precision needed? Order of magnitude vs ±10%'
            ]
        },
        {
            title: '3. Comparative Analysis',
            subsections: ['[Table: Technique | Accuracy | Speed | Data Req | Best For]']
        },
        {
            title: '4. Real Business Examples',
            subsections: [
                '→ Market Sizing: Fermi decomposition',
                '→ Project Estimation: Three-Point',
                '→ Resource Planning: Monte Carlo'
            ]
        },
        {
            title: '5. Common Pitfalls & Mitigations',
            subsections: []
        },
        {
            title: '6. Integration Strategies',
            subsections: []
        }
    ];

    sections.forEach((section, i) => {
        const sectionDiv = toc.append('div')
            .style('opacity', 0)
            .style('transform', 'translateX(-20px)')
            .style('margin-top', i === 0 ? '0' : '1rem');

        const titleP = sectionDiv.append('p');
        titleP.append('strong').text(section.title);
        if (section.detail) {
            titleP.append('span').text(' ' + section.detail);
        }

        if (section.subsections.length > 0) {
            const subDiv = sectionDiv.append('div')
                .style('margin-left', '1.5rem')
                .style('color', section.title.includes('Decision') || section.title.includes('Comparative') || section.title.includes('Real') ? '#666' : 'inherit');
            section.subsections.forEach(sub => {
                subDiv.append('p').text(sub);
            });
        }

        // Animate section appearing
        setTimeout(() => {
            sectionDiv.transition()
                .delay(i * 250)
                .duration(600)
                .ease(d3.easeCubicOut)
                .style('opacity', 1)
                .style('transform', 'translateX(0)');
        }, 10);
    });

    // Add callout box with animation
    const callout = wrapper.append('div')
        .style('background', '#e8f5e9')
        .style('padding', '1.5rem')
        .style('border-radius', '8px')
        .style('margin-top', '2rem')
        .style('border-left', '4px solid #27ae60')
        .style('opacity', 0)
        .style('transform', 'translateY(20px)');

    callout.append('p')
        .style('font-weight', '600')
        .style('margin-bottom', '0.5rem')
        .text('This isn\'t generic content—');

    callout.append('p')
        .style('font-size', '0.95rem')
        .text('It\'s research grounded in YOUR specific context (the Fermi work we just did), tailored to YOUR audience (technical leadership), and structured for YOUR use case (strategic decisions).');

    // Animate callout appearing
    setTimeout(() => {
        callout.transition()
            .delay(sections.length * 250 + 200)
            .duration(600)
            .ease(d3.easeBackOut)
            .style('opacity', 1)
            .style('transform', 'translateY(0)');
    }, 10);

    // Add link with animation
    const link = wrapper.append('p')
        .style('text-align', 'center')
        .style('margin-top', '2rem')
        .style('opacity', 0);

    link.append('a')
        .attr('href', 'deep-research-example.md')
        .attr('target', '_blank')
        .style('font-size', '1.1rem')
        .text('📄 Explore full deep research prompt →');

    // Animate link appearing
    setTimeout(() => {
        link.transition()
            .delay(sections.length * 250 + 600)
            .duration(400)
            .ease(d3.easeCubicOut)
            .style('opacity', 1);
    }, 10);
}
