# Deep Research Example: Strategic Estimation Techniques Guide

## Executive Summary

This document demonstrates how to use Claude Code skills as a springboard for comprehensive research. After using the **Fermi Estimation** skill to analyze a market sizing problem, we can leverage that experience to create a broader guide on estimation techniques for business decisions.

## The Meta-Prompt Pattern

### Context from Previous Work
From our weight loss chatbot market sizing analysis, we used:
- ✓ **Decomposition**: Breaking 260M adults → 182M → 82M → 29M → 6.4M SAM
- ✓ **Assumption bounding**: Pessimistic ($4M) vs Optimistic ($60M)
- ✓ **Triangulation**: Top-down and bottom-up validation
- ✓ **Sensitivity analysis**: Identifying which assumptions drive outcomes

### Deep Research Prompt

```
Based on the Fermi estimation approach we just used (decomposition,
bounding, triangulation, sensitivity analysis), research and create
a comprehensive guide on estimation techniques for business decisions.

Include:

1. **Taxonomy of Estimation Methods**
   - Top-down estimation
   - Bottom-up estimation
   - Analogous estimation
   - Parametric estimation
   - Three-point estimation (PERT)
   - Monte Carlo simulation
   - Expert judgment methods (Delphi, consensus)
   - Fermi decomposition
   - Reference class forecasting

2. **Decision Framework: When to Use Each Technique**
   Create a decision tree that helps practitioners choose based on:
   - Time available for estimation
   - Data availability (historical, comparable, expert)
   - Precision requirements (order of magnitude vs ±10%)
   - Uncertainty characteristics (aleatory vs epistemic)
   - Stakeholder needs (transparency, defensibility)

3. **Comparative Analysis**
   | Technique | Accuracy | Speed | Data Requirements | Best Use Case |
   |-----------|----------|-------|-------------------|---------------|
   | Fermi | Order of magnitude | Fast | Minimal | Early-stage feasibility |
   | Analogous | ±30% | Fast | Comparable projects | New product launch |
   | Three-Point | ±15% | Medium | Expert input | Project planning |
   | Monte Carlo | ±10% | Slow | Probability distributions | Risk analysis |
   | ... | ... | ... | ... | ... |

4. **Real Business Examples**
   For each technique, provide:
   - **Market Sizing**: Netflix international expansion using Fermi
   - **Project Estimation**: Software development using Three-Point/PERT
   - **Resource Planning**: Infrastructure capacity using Monte Carlo
   - **Strategic Planning**: Market entry using reference class forecasting

5. **Common Pitfalls & How to Avoid Them**
   - **Anchoring bias** in Fermi estimation
     - Mitigation: Use multiple independent estimators, triangulate
   - **Over-precision** in statistical methods
     - Mitigation: Express uncertainty ranges, avoid false precision
   - **Groupthink** in expert methods
     - Mitigation: Anonymous input, devil's advocate roles
   - **Survivorship bias** in analogous estimation
     - Mitigation: Include failed projects in reference class
   - **Model risk** in complex simulations
     - Mitigation: Sensitivity testing, model validation

6. **Integration Strategies: Combining Multiple Techniques**
   - **Triangulation approach**: Use 2-3 methods, compare results
     - Example: Fermi + analogous + expert judgment for market sizing
   - **Sequential refinement**: Start broad, refine with more data
     - Phase 1: Fermi for order of magnitude
     - Phase 2: Three-point with expert input
     - Phase 3: Monte Carlo with collected data
   - **Parallel estimation**: Multiple teams, different techniques, reconcile
     - Red team / blue team approach for critical decisions

## Output Structure

```
STRATEGIC ESTIMATION TECHNIQUES GUIDE
FOR TECHNICAL LEADERSHIP

Executive Summary (2 pages)
- Key estimation challenges in business decisions
- Framework overview
- When to use this guide

Section 1: Taxonomy of Estimation Methods (15 pages)
1.1 Decomposition-Based Methods
    - Fermi estimation
    - Work breakdown structure
    - Function point analysis
1.2 Comparison-Based Methods
    - Analogous estimation
    - Relative sizing
    - Reference class forecasting
1.3 Statistical Methods
    - Three-point estimation (PERT)
    - Monte Carlo simulation
    - Bayesian updating
1.4 Expert-Based Methods
    - Delphi technique
    - Planning poker
    - Consensus estimation

Section 2: Decision Framework (10 pages)
- Decision tree for technique selection
- Context-driven guidance
- Trade-off analysis

Section 3: Comparative Analysis (8 pages)
- Detailed comparison table
- Accuracy benchmarks
- Speed vs precision trade-offs

Section 4: Real Business Examples (20 pages)
- Case study: Market sizing for new product
- Case study: Project timeline estimation
- Case study: Resource capacity planning
- Case study: Strategic option valuation

Section 5: Pitfalls & Mitigations (12 pages)
- Cognitive biases in estimation
- Data quality issues
- Model risk management
- Organizational dynamics

Section 6: Integration Strategies (10 pages)
- Triangulation frameworks
- Sequential refinement process
- Parallel estimation approaches

Appendices
A. Estimation checklists
B. Template library
C. Tool recommendations
D. Further reading
```

## Why This Approach Works

1. **Grounded in Experience**: The research starts from what you actually did (Fermi estimation), not generic theory

2. **Context-Aware**: Tailored to your audience (technical leadership) and use cases (strategic decisions under uncertainty)

3. **Actionable**: Includes decision frameworks, checklists, and templates—not just conceptual explanations

4. **Comprehensive**: Covers the full landscape while maintaining focus on practical application

5. **Integrated**: Shows how techniques combine and when to use multiple approaches

## How to Use This Pattern

1. **Use a Claude Code skill** for a specific problem (market sizing, risk analysis, causal inference, etc.)

2. **Identify the frameworks** the skill employed (decomposition, premortem, DAG analysis, etc.)

3. **Craft a research prompt** that:
   - References your specific experience
   - Asks for broader exploration of related techniques
   - Specifies output format and audience
   - Requests practical guidance (decision trees, examples, pitfalls)

4. **Generate comprehensive output** that serves as:
   - Reference documentation for your team
   - Training material for onboarding
   - Decision support for future work

## Next Steps

To generate this full guide:
1. Copy the deep research prompt above
2. Paste into Claude Code or Claude.ai
3. Review and refine the output
4. Share with your team

This transforms one-off skill usage into institutional knowledge.
