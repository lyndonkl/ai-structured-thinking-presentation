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
            viz.html(''); // Content in HTML
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
