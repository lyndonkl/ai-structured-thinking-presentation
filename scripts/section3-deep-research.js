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

    const html = `
        <div style="background: white; padding: 2rem; border-radius: 12px; max-width: 700px; margin: 2rem auto;">
            <h4 style="text-align: center; margin-bottom: 1.5rem;">Techniques Used in Example 1</h4>
            <div style="display: grid; gap: 1rem;">
                <div style="background: #e8f5e9; padding: 1rem; border-radius: 8px; border-left: 4px solid var(--accent-green);">
                    <strong>✓ Decomposition</strong>
                    <p style="font-size: 0.9rem; margin-top: 0.5rem;">260M → 182M → 82M → 29M → 6.4M</p>
                </div>
                <div style="background: #e8f5e9; padding: 1rem; border-radius: 8px; border-left: 4px solid var(--accent-green);">
                    <strong>✓ Assumption bounding</strong>
                    <p style="font-size: 0.9rem; margin-top: 0.5rem;">Pessimistic: $4M | Optimistic: $60M</p>
                </div>
                <div style="background: #e8f5e9; padding: 1rem; border-radius: 8px; border-left: 4px solid var(--accent-green);">
                    <strong>✓ Triangulation</strong>
                    <p style="font-size: 0.9rem; margin-top: 0.5rem;">Top-down vs bottom-up approaches</p>
                </div>
                <div style="background: #e8f5e9; padding: 1rem; border-radius: 8px; border-left: 4px solid var(--accent-green);">
                    <strong>✓ Sensitivity analysis</strong>
                    <p style="font-size: 0.9rem; margin-top: 0.5rem;">Which assumptions matter most</p>
                </div>
            </div>
        </div>
    `;

    container.html(html);
}

/**
 * Render the custom prompt for deep research
 */
function renderCustomPrompt(container) {
    container.html('');

    const html = `
        <div style="background: white; padding: 2rem; border-radius: 12px; max-width: 800px; margin: 2rem auto;">
            <h4 style="text-align: center; margin-bottom: 1.5rem;">Deep Research Prompt Structure</h4>
            <div class="prompt-box deep-research" style="font-size: 0.95rem; line-height: 1.8;">
                <p><span style="background: #fff3cd; padding: 0 4px;">Based on the Fermi estimation approach we just used</span>,
                research and create a comprehensive guide on estimation techniques for business decisions.</p>

                <p style="margin-top: 1rem;"><strong>Include:</strong></p>
                <ol style="margin-left: 1.5rem;">
                    <li>Taxonomy of estimation methods</li>
                    <li>When to use each technique (decision tree)</li>
                    <li>Comparison table (accuracy, speed, data requirements)</li>
                    <li>Real examples from business contexts</li>
                    <li>Common pitfalls and how to avoid them</li>
                    <li>Integration strategies (combining multiple techniques)</li>
                </ol>

                <p style="margin-top: 1rem;"><span style="background: #d4edda; padding: 0 4px;">Format as:</span>
                Executive summary + detailed sections + decision framework</p>

                <p style="margin-top: 1rem;"><span style="background: #cfe2ff; padding: 0 4px;">Context:</span>
                Technical leadership audience making strategic decisions under uncertainty</p>
            </div>
            <p style="text-align: center; margin-top: 1.5rem; color: #666; font-style: italic;">
                Notice: We're using what we learned (Fermi) to explore the broader space (all estimation techniques)
            </p>
        </div>
    `;

    container.html(html);
}

/**
 * Render the output preview (table of contents)
 */
function renderOutputPreview(container) {
    container.html('');

    const html = `
        <div style="background: white; padding: 2rem; border-radius: 12px; max-width: 800px; margin: 2rem auto;">
            <h4 style="text-align: center; margin-bottom: 1.5rem; color: var(--accent-blue);">
                Generated Output: "Strategic Estimation Techniques Guide"
            </h4>

            <div style="font-family: var(--font-mono); font-size: 0.9rem; line-height: 1.8;">
                <p><strong>Executive Summary</strong> (2 pages)</p>

                <p style="margin-top: 1rem;"><strong>1. Taxonomy of Estimation Methods</strong></p>
                <div style="margin-left: 1.5rem;">
                    <p>1.1 Decomposition-Based (Fermi, Work Breakdown)</p>
                    <p>1.2 Comparison-Based (Analogous, Relative)</p>
                    <p>1.3 Statistical (Three-Point, PERT, Monte Carlo)</p>
                    <p>1.4 Expert-Based (Delphi, Consensus)</p>
                </div>

                <p style="margin-top: 1rem;"><strong>2. Decision Framework: Which Technique When?</strong></p>
                <div style="margin-left: 1.5rem; color: #666;">
                    <p>→ Time available? Fast: Analogous | Slow: Monte Carlo</p>
                    <p>→ Data availability? Low: Fermi | High: Statistical</p>
                    <p>→ Precision needed? Order of magnitude vs ±10%</p>
                </div>

                <p style="margin-top: 1rem;"><strong>3. Comparative Analysis</strong></p>
                <p style="margin-left: 1.5rem; color: #666;">[Table: Technique | Accuracy | Speed | Data Req | Best For]</p>

                <p style="margin-top: 1rem;"><strong>4. Real Business Examples</strong></p>
                <div style="margin-left: 1.5rem; color: #666;">
                    <p>→ Market Sizing: Fermi decomposition</p>
                    <p>→ Project Estimation: Three-Point</p>
                    <p>→ Resource Planning: Monte Carlo</p>
                </div>

                <p style="margin-top: 1rem;"><strong>5. Common Pitfalls & Mitigations</strong></p>
                <p style="margin-top: 1rem;"><strong>6. Integration Strategies</strong></p>
            </div>

            <div style="background: #e8f5e9; padding: 1.5rem; border-radius: 8px; margin-top: 2rem; border-left: 4px solid var(--accent-green);">
                <p style="font-weight: 600; margin-bottom: 0.5rem;">This isn't generic content—</p>
                <p style="font-size: 0.95rem;">
                    It's research grounded in YOUR specific context (the Fermi work we just did),
                    tailored to YOUR audience (technical leadership), and structured for YOUR use case
                    (strategic decisions).
                </p>
            </div>

            <p style="text-align: center; margin-top: 2rem;">
                <a href="deep-research-example.md" target="_blank" style="font-size: 1.1rem;">
                    📄 Explore full deep research prompt →
                </a>
            </p>
        </div>
    `;

    container.html(html);
}
