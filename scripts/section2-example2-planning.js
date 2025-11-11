/**
 * Section 2, Example 2: Project Planning with Risk Management
 * Visualizes phased timeline and risk heatmap
 */

document.addEventListener('DOMContentLoaded', () => {
    initExample2();
});

function initExample2() {
    console.log('Example 2: Project Planning initialized');

    // Add steps FIRST
    addExample2Steps();

    // THEN set up Scrollama (after steps exist in DOM)
    setTimeout(() => {
        const example2Scroller = scrollama();

        example2Scroller
            .setup({
                step: '#example2 .step',
                offset: 0.5,
                debug: false,
            })
            .onStepEnter(handleExample2StepEnter);

        window.addEventListener('resize', () => {
            example2Scroller.resize();
        });

        console.log('Example 2 scrollama initialized with steps:', document.querySelectorAll('#example2 .step').length);
    }, 100);
}

function addExample2Steps() {
    const container = document.querySelector('#example2 .scroll-text');
    if (!container) return;

    const steps = [
        {
            id: 'generic-checklist',
            content: `
                <div class="prompt-box simple">
                    <h3>Simple query:</h3>
                    <p>"I need to migrate our production API from Redis to PostgreSQL. Can you create a migration plan with steps and timeline?"</p>
                </div>
                <div class="generic-response">
                    <h4>PostgreSQL Migration Plan:</h4>
                    <p><strong>Timeline: 6-8 weeks</strong></p>
                    <ol>
                        <li>Week 1-2: Assess current architecture and design new PostgreSQL schema</li>
                        <li>Week 2-3: Set up PostgreSQL instance and configure replication</li>
                        <li>Week 3-4: Create data migration scripts and test data transformation</li>
                        <li>Week 4-5: Test migration in staging environment, validate data integrity</li>
                        <li>Week 5-6: Performance testing and optimization</li>
                        <li>Week 6-7: Plan cutover window and rollback procedures</li>
                        <li>Week 7: Execute production migration during low-traffic window</li>
                        <li>Week 8: Post-migration monitoring and decommission Redis</li>
                    </ol>
                    <p><strong>Best practices:</strong> Backup data before migration, test thoroughly in staging, plan for rollback, monitor performance closely after cutover</p>
                </div>
                <p class="explanation">Generic timeline and steps. No risk analysis. No context about your system scale, criticality, or team. Missing success metrics and what could go wrong.</p>
            `
        },
        {
            id: 'structured-query',
            content: `
                <div class="prompt-box structured">
                    <h3>Structured query:</h3>
                    <div style="font-size: 0.95rem; line-height: 1.7;">
                        <p style="margin-bottom: 0.75rem;"><strong># Role:</strong> Technical Project Planner using Spec + Risk + Metrics Framework</p>

                        <p style="margin-bottom: 0.75rem;"><strong>## Context:</strong><br>
                        We're migrating our production API from using Redis as the primary data store to PostgreSQL. This API currently handles user sessions, caching, and some transactional data. The migration needs to happen with minimal downtime and no data loss.</p>

                        <p style="margin-bottom: 0.75rem;"><strong>## Task:</strong><br>
                        Create a comprehensive migration plan that includes detailed specifications, proactive risk identification with mitigation strategies, and measurable success criteria.</p>

                        <p style="margin-bottom: 0.75rem;"><strong>## Method Requirements:</strong></p>
                        <ul style="margin-left: 1.5rem; margin-bottom: 0.75rem; line-height: 1.6;">
                            <li><strong>Specification:</strong> Define migration approach, timeline, phases, dependencies, rollback strategy</li>
                            <li><strong>Risk Analysis:</strong> Conduct premortem ("imagine this migration failed - why?"), create risk register with likelihood, impact, mitigation, owners</li>
                            <li><strong>Success Metrics:</strong> Define leading indicators, lagging indicators, counter-metrics with baseline and target values</li>
                        </ul>

                        <p style="margin-bottom: 0;"><strong>## Output Format:</strong><br>
                        Deliver integrated plan with all three components: clear spec showing what/how/when, comprehensive risks with mitigations, and measurable metrics to track success.</p>
                    </div>
                </div>
                <p class="explanation">A structured prompt invokes a specific methodology (Spec + Risk + Metrics framework) and defines what comprehensive planning looks like. The skill will ask clarifying questions before generating the plan.</p>
            `
        },
        {
            id: 'context-gathering',
            content: `
                <h3>Understanding Your Constraints</h3>
                <p class="explanation">Skill starts by understanding your specific constraints.</p>
            `
        },
        {
            id: 'phased-approach',
            content: `
                <h3>Phased Migration Strategy</h3>
                <p class="explanation">Not just steps—a phased strategy with parallel workstreams.</p>
            `
        },
        {
            id: 'risk-analysis',
            content: `
                <h3>Premortem Risk Analysis</h3>
                <p class="explanation">Premortem thinking: "Imagine this failed—why?" Then mitigate before it happens.</p>
            `
        },
        {
            id: 'metrics',
            content: `
                <h3>Success Metrics</h3>
                <p class="explanation">Not just "did we migrate?"—how do we know if it's better?</p>
                <p style="margin-top: 2rem;">
                    <a href="example2-project-planning-risk.md" target="_blank">📄 Read full conversation →</a>
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

function handleExample2StepEnter(response) {
    const { element } = response;
    const step = element.getAttribute('data-step');
    const viz = d3.select('#example2-viz');

    switch (step) {
        case 'generic-checklist':
            viz.html(`
                <div style="color: white; font-size: 1.5rem; text-align: center; padding: 2rem; max-width: 400px;">
                    <p style="margin-bottom: 1rem;">📝</p>
                    <p>Compare the generic checklist with structured planning</p>
                </div>
            `);
            break;

        case 'structured-query':
            viz.html(`
                <div style="color: white; font-size: 1.5rem; text-align: center; padding: 2rem; max-width: 400px;">
                    <p style="margin-bottom: 1rem;">🎯</p>
                    <p>Notice: asking for risk analysis and metrics, not just steps</p>
                </div>
            `);
            break;
        case 'context-gathering':
            renderContextCards(viz);
            break;
        case 'phased-approach':
            renderTimeline(viz);
            break;
        case 'risk-analysis':
            renderRiskHeatmap(viz);
            break;
        case 'metrics':
            renderMetrics(viz);
            break;
        default:
            viz.html('');
    }
}

function renderContextCards(container) {
    container.html('');

    const cardData = [
        '500K providers',
        '1.2M locations',
        '30GB Redis cache',
        '15 API endpoints',
        '50K req/day',
        '6-month timeline'
    ];

    // Create wrapper div
    const wrapper = container.append('div')
        .style('background', 'white')
        .style('padding', '3rem')
        .style('border-radius', '12px')
        .style('box-shadow', '0 4px 20px rgba(0,0,0,0.3)')
        .style('max-width', '700px');

    // Create grid container
    const grid = wrapper.append('div')
        .style('display', 'grid')
        .style('grid-template-columns', 'repeat(2, 1fr)')
        .style('gap', '1.5rem');

    // Add cards with animation
    cardData.forEach((text, i) => {
        const card = grid.append('div')
            .style('background', '#3498db')
            .style('color', 'white')
            .style('padding', '1.5rem')
            .style('border-radius', '8px')
            .style('text-align', 'center')
            .style('font-size', '1.2rem')
            .style('font-weight', 'bold')
            .style('opacity', 0)
            .style('transform', 'scale(0.8) translateY(20px)')
            .text(text);

        // Animate card appearing
        setTimeout(() => {
            card.transition()
                .delay(i * 100)
                .duration(400)
                .ease(d3.easeBackOut)
                .style('opacity', 1)
                .style('transform', 'scale(1) translateY(0)');
        }, 10);
    });
}

function renderTimeline(container) {
    container.html('');

    const phases = [
        { title: 'Month 1-2: Foundation', color: '#3498db', items: ['Schema design', 'Infrastructure setup', 'Initial migration'] },
        { title: 'Month 3: Dual-Write', color: '#3498db', items: ['Pipeline refactor', 'Reconciliation'] },
        { title: 'Month 4-5: API Migration', color: '#3498db', items: ['New endpoints', 'Load testing', 'Shadow traffic'] },
        { title: 'Month 6: Cutover', color: '#27ae60', items: ['Gradual rollout (5% → 100%)'] }
    ];

    // Create wrapper
    const wrapper = container.append('div')
        .style('padding', '2rem')
        .style('background', 'white')
        .style('border-radius', '12px')
        .style('max-width', '700px')
        .style('box-shadow', '0 4px 20px rgba(0,0,0,0.3)');

    // Add phases with animation
    phases.forEach((phase, i) => {
        const phaseDiv = wrapper.append('div')
            .style('margin-bottom', i < phases.length - 1 ? '1.5rem' : '0')
            .style('opacity', 0)
            .style('transform', 'translateX(-20px)');

        phaseDiv.append('h4')
            .style('color', phase.color)
            .style('margin-bottom', '0.5rem')
            .text(phase.title);

        const list = phaseDiv.append('ul')
            .style('font-size', '0.9rem')
            .style('margin-left', '1.5rem');

        phase.items.forEach(item => {
            list.append('li').text(item);
        });

        // Animate phase appearing
        setTimeout(() => {
            phaseDiv.transition()
                .delay(i * 200)
                .duration(400)
                .ease(d3.easeCubicOut)
                .style('opacity', 1)
                .style('transform', 'translateX(0)');
        }, 10);
    });
}

function renderRiskHeatmap(container) {
    container.html('');

    const risks = [
        { title: 'R1: Data Loss (High Impact, Medium Likelihood)', mitigation: 'Dry-run migration + automated validation + keep Redis backup', bg: '#fee', border: '#e74c3c' },
        { title: 'R2: Performance Issues (High Impact, Medium Likelihood)', mitigation: 'EXPLAIN ANALYZE all queries + load testing + caching layer', bg: '#ffe', border: '#f39c12' },
        { title: 'R5: Production Outage (High Impact, Low Likelihood)', mitigation: 'Gradual rollout (5%→25%→50%→100%) + auto-rollback', bg: '#fee', border: '#e74c3c' }
    ];

    // Create wrapper
    const wrapper = container.append('div')
        .style('padding', '2rem')
        .style('background', 'white')
        .style('border-radius', '12px')
        .style('max-width', '800px')
        .style('box-shadow', '0 4px 20px rgba(0,0,0,0.3)');

    // Add title
    wrapper.append('h4')
        .style('text-align', 'center')
        .style('margin-bottom', '1.5rem')
        .text('Top Risks & Mitigations');

    // Create risks container
    const risksContainer = wrapper.append('div')
        .style('display', 'grid')
        .style('gap', '1rem');

    // Add risk cards with animation
    risks.forEach((risk, i) => {
        const riskDiv = risksContainer.append('div')
            .style('background', risk.bg)
            .style('padding', '1rem')
            .style('border-radius', '8px')
            .style('border-left', `4px solid ${risk.border}`)
            .style('opacity', 0)
            .style('transform', 'translateY(20px)');

        riskDiv.append('h5')
            .style('margin-bottom', '0.5rem')
            .text(risk.title);

        riskDiv.append('p')
            .style('font-size', '0.9rem')
            .style('margin', '0')
            .html(`<strong>Mitigation:</strong> ${risk.mitigation}`);

        // Animate risk appearing
        setTimeout(() => {
            riskDiv.transition()
                .delay(i * 150)
                .duration(400)
                .ease(d3.easeBackOut)
                .style('opacity', 1)
                .style('transform', 'translateY(0)');
        }, 10);
    });
}

function renderMetrics(container) {
    container.html('');

    const sections = [
        {
            title: 'Leading Indicators',
            color: '#3498db',
            metrics: [
                'Schema design complete: 0% → 100% by Week 4',
                'Data validation pass: → 99.99% match required',
                'Dual-write drift: → <0.01% divergence'
            ]
        },
        {
            title: 'Lagging Indicators',
            color: '#27ae60',
            metrics: [
                'API p95 latency: 10+ sec → <500ms',
                'API p99 latency: 15 sec → <1 sec',
                'Database query time: N/A → <100ms avg'
            ]
        },
        {
            title: 'Counter-Metrics',
            color: '#e74c3c',
            metrics: [
                '❌ Data integrity: Zero tolerance for loss',
                '❌ API availability: Maintain 99.5%+ uptime',
                '❌ Feature parity: 100% of queries must work'
            ]
        }
    ];

    // Create wrapper
    const wrapper = container.append('div')
        .style('padding', '2rem')
        .style('background', 'white')
        .style('border-radius', '12px')
        .style('max-width', '800px')
        .style('box-shadow', '0 4px 20px rgba(0,0,0,0.3)');

    // Add sections with animation
    sections.forEach((section, i) => {
        const sectionDiv = wrapper.append('div')
            .style('margin-bottom', i < sections.length - 1 ? '2rem' : '0')
            .style('opacity', 0)
            .style('transform', 'translateX(-20px)');

        sectionDiv.append('h4')
            .style('color', section.color)
            .style('margin-bottom', '0.75rem')
            .text(section.title);

        section.metrics.forEach(metric => {
            sectionDiv.append('p')
                .style('font-size', '0.9rem')
                .style('margin', '0.25rem 0')
                .text(metric);
        });

        // Animate section appearing
        setTimeout(() => {
            sectionDiv.transition()
                .delay(i * 200)
                .duration(400)
                .ease(d3.easeCubicOut)
                .style('opacity', 1)
                .style('transform', 'translateX(0)');
        }, 10);
    });
}
