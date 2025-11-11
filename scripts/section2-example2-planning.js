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
                    <p>"How do I migrate from Redis to PostgreSQL?"</p>
                </div>
                <div class="generic-response">
                    <h4>PostgreSQL Migration Steps:</h4>
                    <ol>
                        <li>Assess current architecture and data model</li>
                        <li>Design new PostgreSQL schema</li>
                        <li>Set up PostgreSQL instance</li>
                        <li>Create data migration scripts</li>
                        <li>Test migration in staging environment</li>
                        <li>Plan cutover window</li>
                        <li>Execute migration</li>
                        <li>Validate data integrity</li>
                        <li>Monitor performance</li>
                        <li>Decommission old system</li>
                    </ol>
                    <p><strong>Best practices:</strong> Backup data, test thoroughly, plan for rollback, monitor closely</p>
                </div>
                <p class="explanation">Generic checklist. No risk analysis. No metrics. Could come from any blog post.</p>
            `
        },
        {
            id: 'structured-query',
            content: `
                <div class="prompt-box structured">
                    <h3>Structured query:</h3>
                    <p>"I want to migrate an existing API from using Redis cache as primary data store to PostgreSQL. Plan this migration with risk analysis and success metrics."</p>
                </div>
                <p class="explanation">Not just "how to migrate" but "plan with risk analysis and metrics" - asking for comprehensive thinking.</p>
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
    const html = `
        <div style="background: white; padding: 3rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.3); max-width: 700px;">
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
                <div style="background: #3498db; color: white; padding: 1.5rem; border-radius: 8px; text-align: center; font-size: 1.2rem; font-weight: bold;">500K providers</div>
                <div style="background: #3498db; color: white; padding: 1.5rem; border-radius: 8px; text-align: center; font-size: 1.2rem; font-weight: bold;">1.2M locations</div>
                <div style="background: #3498db; color: white; padding: 1.5rem; border-radius: 8px; text-align: center; font-size: 1.2rem; font-weight: bold;">30GB Redis cache</div>
                <div style="background: #3498db; color: white; padding: 1.5rem; border-radius: 8px; text-align: center; font-size: 1.2rem; font-weight: bold;">15 API endpoints</div>
                <div style="background: #3498db; color: white; padding: 1.5rem; border-radius: 8px; text-align: center; font-size: 1.2rem; font-weight: bold;">50K req/day</div>
                <div style="background: #3498db; color: white; padding: 1.5rem; border-radius: 8px; text-align: center; font-size: 1.2rem; font-weight: bold;">6-month timeline</div>
            </div>
        </div>
    `;
    container.html(html);
}

function renderTimeline(container) {
    container.html('');
    const html = `
        <div style="padding: 2rem; background: white; border-radius: 12px; max-width: 700px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
            <div style="margin-bottom: 1.5rem;">
                <h4 style="color: var(--accent-blue);">Month 1-2: Foundation</h4>
                <ul style="font-size: 0.9rem; margin-left: 1.5rem;">
                    <li>Schema design</li>
                    <li>Infrastructure setup</li>
                    <li>Initial migration</li>
                </ul>
            </div>
            <div style="margin-bottom: 1.5rem;">
                <h4 style="color: var(--accent-blue);">Month 3: Dual-Write</h4>
                <ul style="font-size: 0.9rem; margin-left: 1.5rem;">
                    <li>Pipeline refactor</li>
                    <li>Reconciliation</li>
                </ul>
            </div>
            <div style="margin-bottom: 1.5rem;">
                <h4 style="color: var(--accent-blue);">Month 4-5: API Migration</h4>
                <ul style="font-size: 0.9rem; margin-left: 1.5rem;">
                    <li>New endpoints</li>
                    <li>Load testing</li>
                    <li>Shadow traffic</li>
                </ul>
            </div>
            <div>
                <h4 style="color: var(--accent-green);">Month 6: Cutover</h4>
                <ul style="font-size: 0.9rem; margin-left: 1.5rem;">
                    <li>Gradual rollout (5% → 100%)</li>
                </ul>
            </div>
        </div>
    `;
    container.html(html);
}

function renderRiskHeatmap(container) {
    container.html('');
    const html = `
        <div style="padding: 2rem; background: white; border-radius: 12px; max-width: 800px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
            <h4 style="text-align: center; margin-bottom: 1.5rem;">Top Risks & Mitigations</h4>
            <div style="display: grid; gap: 1rem;">
                <div style="background: #fee; padding: 1rem; border-radius: 8px; border-left: 4px solid var(--accent-red);">
                    <h5>R1: Data Loss (High Impact, Medium Likelihood)</h5>
                    <p style="font-size: 0.9rem;"><strong>Mitigation:</strong> Dry-run migration + automated validation + keep Redis backup</p>
                </div>
                <div style="background: #ffe; padding: 1rem; border-radius: 8px; border-left: 4px solid var(--accent-yellow);">
                    <h5>R2: Performance Issues (High Impact, Medium Likelihood)</h5>
                    <p style="font-size: 0.9rem;"><strong>Mitigation:</strong> EXPLAIN ANALYZE all queries + load testing + caching layer</p>
                </div>
                <div style="background: #fee; padding: 1rem; border-radius: 8px; border-left: 4px solid var(--accent-red);">
                    <h5>R5: Production Outage (High Impact, Low Likelihood)</h5>
                    <p style="font-size: 0.9rem;"><strong>Mitigation:</strong> Gradual rollout (5%→25%→50%→100%) + auto-rollback</p>
                </div>
            </div>
        </div>
    `;
    container.html(html);
}

function renderMetrics(container) {
    container.html('');
    const html = `
        <div style="padding: 2rem; background: white; border-radius: 12px; max-width: 800px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--accent-blue);">Leading Indicators</h4>
                <p style="font-size: 0.9rem;">Schema design complete: 0% → 100% by Week 4</p>
                <p style="font-size: 0.9rem;">Data validation pass: → 99.99% match required</p>
                <p style="font-size: 0.9rem;">Dual-write drift: → <0.01% divergence</p>
            </div>
            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--accent-green);">Lagging Indicators</h4>
                <p style="font-size: 0.9rem;">API p95 latency: 10+ sec → <500ms</p>
                <p style="font-size: 0.9rem;">API p99 latency: 15 sec → <1 sec</p>
                <p style="font-size: 0.9rem;">Database query time: N/A → <100ms avg</p>
            </div>
            <div>
                <h4 style="color: var(--accent-red);">Counter-Metrics</h4>
                <p style="font-size: 0.9rem;">❌ Data integrity: Zero tolerance for loss</p>
                <p style="font-size: 0.9rem;">❌ API availability: Maintain 99.5%+ uptime</p>
                <p style="font-size: 0.9rem;">❌ Feature parity: 100% of queries must work</p>
            </div>
        </div>
    `;
    container.html(html);
}
