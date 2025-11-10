# Presentation Master Plan: Beyond Search - Using AI as Your Structured Thinking Partner

## Executive Summary

**Title:** Beyond Search: Using AI as Your Structured Thinking Partner

**Duration:** 30-45 minutes (30 min presentation + 10 min Q&A)

**Format:** Scrollytelling presentation using Scrollama + D3.js + GSAP

**Audience:** Technical org leadership (intermediate to advanced)

**Core Message:** Most people use AI like Google search—ask a question, get an answer. But AI's real power is as a structured thinking partner that brings frameworks from other domains to help you make better decisions.

**Three Sections:**
1. **What is a Prompt?** (5 min) - Show how structured prompts activate multiple knowledge frameworks
2. **Structured Thinking Partner** (25 min) - Three examples demonstrating skills in action
3. **Deep Research Workflow** (6 min) - Chain skills together for comprehensive research

---

## SECTION 1: What is a Prompt? (5 minutes)

### Narrative Structure

**Opening Hook (30 seconds)**

"When you ask ChatGPT 'What's the serviceable addressable market for a personalized health newsletter subscription?', you get a number from a market research report. When you use a structured prompt with Fermi estimation, you get a transparent model with assumptions you can interrogate and adjust for your specific context. The difference isn't the AI—it's the prompt structure."

---

### Visual: D3.js Interactive Concept Graph

**Design Specs:**
- Simplified metaphor (not technically accurate embedding space)
- ~1000 nodes organized in 9 labeled clusters
- Force-directed layout with cluster gravity
- Clusters clearly labeled, always visible (16-18px font)

**Cluster Names:**
- Market Analysis (top left)
- Estimation Techniques (top center)
- Health Economics (top right)
- Consumer Behavior (middle left)
- Digital Media (middle center)
- Subscription Models (middle right)
- Demographics (bottom left)
- Business Strategy (bottom center)
- Data Analysis (bottom right)

---

### Scrollytelling Sequence

**Scroll Point 1: Simple Prompt Appears**

**Display:**
```
Simple query:
"What's the serviceable addressable market for a personalized
health newsletter subscription service in the US?"
```

**Animation:**
- ONE cluster lights up (Market Analysis - warm yellow)
- 5-8 nodes within cluster pulse
- 1-2 weak connections to adjacent clusters

**Narrative overlay:**
"A simple question activates one domain of knowledge. You'll get a generic market size citation—maybe a report that says 'the digital health content market is $X billion.'"

---

**Scroll Point 2: Structured Prompt Replaces Simple**

**Display:**
```
Structured query:
"Use Fermi estimation to calculate the SAM for a personalized health
newsletter subscription in the US. Break down: (1) US adult population,
(2) % actively managing chronic conditions or preventive health,
(3) % who consume digital health content regularly, (4) % willing to pay
for premium health information, (5) realistic price point ($10-30/month).
Provide optimistic and pessimistic bounds for each assumption, triangulate
with bottom-up approach, and identify key drivers of market size."
```

**Animation:**
- MULTIPLE clusters light up simultaneously (bright blue):
  - Estimation Techniques
  - Demographics
  - Health Economics
  - Consumer Behavior
  - Digital Media
  - Subscription Models
  - Data Analysis
  - Market Analysis
- Inter-cluster connections animate (show knowledge integration)
- Nodes pulse in coordinated patterns

**Animation timing:**
- Prompt cross-fade: 300ms
- Multi-cluster activation: 800ms staggered by cluster
- Inter-cluster line drawing: 600ms

**Narrative overlay:**
"A structured prompt activates multiple frameworks simultaneously. Now you're getting Fermi estimation techniques, combined with health economics data, integrated with consumer behavior patterns, subscription pricing models, and demographic analysis. The AI isn't just searching—it's building a systematic model you can interrogate."

---

**Scroll Point 3: Key Concepts Visible (Brief pause)**

**Narrative (spoken during presentation):**
"Notice how concepts across clusters light up together: 'Decomposition' in estimation techniques connects to 'Chronic condition prevalence' in health economics, which connects to 'Willingness to pay' in consumer behavior, which connects to 'Subscription pricing' in business models. These frameworks are being applied together to your specific question."

---

### Key Insight (1 minute)

**Narrative (spoken):**
"LLMs are trained across billions of examples—market analysis, estimation frameworks, health economics, consumer psychology. Simple prompts pull from one area. Structured prompts activate multiple thinking frameworks and chain them together.

The same AI that gives you a market report citation can decompose your market systematically, show you which assumptions matter most, and give you ranges you can adjust based on your specific strategy—if you structure the prompt correctly."

---

### Transition (30 seconds)

**Narrative (spoken):**
"That's a 30-second comparison. Now let me show you what happens when you apply this structured thinking to real business problems that take hours of analysis.

Starting with: What if we actually built that health product? Is the market big enough, and would the economics work?"

**Visual:** Quick fade to Section 2

---

### Technical Implementation Notes

**D3.js Setup:**
- Force simulation with cluster gravity
- `d3.forceCenter()` for centering
- `d3.forceCollide()` to prevent overlap
- `d3.forceManyBody()` for repulsion
- Custom force to pull nodes toward cluster centers
- Color scale for clusters (d3.schemeSet3 or similar)

**Scrollama Triggers:**
- Trigger 1: At 50% scroll → Show simple prompt + single cluster highlight
- Trigger 2: At 60% scroll → Cross-fade to structured prompt + multi-cluster activation
- Trigger 3: At 70% scroll → Enable hover interactions (optional during talk)

**Resources Referenced:**
- D3 In Depth: Force layouts (https://www.d3indepth.com/force-layout/)
- Scrollama + D3 demo: GitHub edriessen/scrollytelling-scrollama-d3-demo

---

## SECTION 2: Structured Thinking Partner (25 minutes)

### Overall Structure

**Format:** Three detailed examples showing skills in action
- Example 1: Market Sizing with Fermi Estimation (8 min)
- Example 2: Project Planning with Risk Management (8 min)
- Example 3: A/B Test Design with Causal Inference (9 min)

**Visual Style:**
- Narrative overlay on top of data visualizations (less text visible, more visual)
- Highlights/key moments from conversations (condensed)
- Mock generic AI responses for "before" state
- Visual transitions between examples using scrollytelling

**Pattern for Each Example:**
1. Show simple "search-style" query with generic response
2. Visual transition
3. Show structured skill-based approach with key scroll points
4. Reveal critical insight
5. Link to full conversation transcript

---

### Example 1: Market Sizing with Fermi Estimation (8 minutes)

**Source Material:** `example1-market-sizing-fermi.md`

---

#### Scroll Sequence 1: The Search-Style Approach

**Visual:** Full screen, simple white background

**Text appears:**
```
Simple query:
"What's the market size for a weight loss AI chatbot in the US?"
```

**Scroll trigger → Generic AI response fades in:**
```
The US weight loss market is valued at approximately $72 billion
as of 2023. The digital health and wellness app market is growing
at 15% annually. AI chatbot adoption in health tech represents
a subset of this market, estimated at $1-2 billion for behavioral
health applications.

Key factors:
• Growing obesity rates
• Increasing digital health adoption
• Rising interest in personalized solutions
• Competitive landscape includes Noom, MyFitnessPal
```

**Narrative overlay fades in (bottom):**
"Generic numbers. No path to validate. No way to adjust for your specific product."

**[Pause 3 seconds, then fade to transition]**

---

#### Visual Transition 1:
Screen dissolves into particles that reform into structured elements

**Technical Note:** Use GSAP for particle effect, or simple fade if complex

---

#### Scroll Sequence 2: The Structured Approach Begins

**Visual:** Split reveal

**Left side (prompt box):**
```
"I want to build an AI chatbot for weight loss.
Estimate the SAM using Fermi decomposition."
```

**Right side animates as you scroll:**

**Step 1 - Clarifying Questions Appear:**
```
Geographic scope?          → US Market
TAM/SAM/SOM?              → SAM
Business model?            → Free + Ads
Timeline?                  → 6-month MVP
Team size?                 → 3 engineers
```

**Narrative overlay:**
"The skill starts by clarifying context—not assuming, but asking."

---

#### Scroll Point 3: Decomposition Tree Visualizes

**Visual:** Animated tree diagram grows from top to bottom

**D3 Tree Layout:**
```
US Adults (260M)
    ↓ 70% overweight/obese
182M potential users
    ↓ 45% actively trying to lose weight
82M active dieters
    ↓ 35% willing to use digital tools
29M digital adopters
    ↓ 22% would use AI chatbot
6.4M target users (SAM)
    × $3 ad revenue/user/year
≈ $19M annual revenue
```

**Animation:**
- Each level highlights as you scroll
- Assumptions shown in tooltips on hover
- Use `d3.tree()` layout
- Animate nodes appearing sequentially (200ms delay between levels)

**Narrative overlay:**
"Transparent decomposition. Every assumption visible. Every step challengeable."

**Technical:** Observable collapsible tree examples as reference

---

#### Scroll Point 4: Bounds Appear

**Visual:** The $19M number splits into a range visualization

**Display:**
```
Pessimistic: $4M  ←————— $19M ————→  Optimistic: $60M
```

**Color-coded sensitivity bars:**
```
Digital adoption rate:  ████████ (high impact)
Chatbot preference:     ██████ (medium impact)
Ad revenue:             ████ (low impact)
```

**Implementation:** Simple SVG bars with widths proportional to sensitivity

**Narrative overlay:**
"Not just a point estimate—a range with sensitivity analysis."

---

#### Scroll Point 5: The Critical Insight

**Visual:** Unit economics breakdown appears

```
Revenue:  $3.00/user/year
LLM cost: $4.73/user/year
Margin:   -$1.73/user/year ❌
```

**Big red warning animates in:**
```
BUSINESS MODEL DOESN'T WORK
```

**Solution fades in below:**
```
Solution: Freemium model
• Free tier: 5 msgs/day → $3 ads
• Premium: $7/month → $84/year
• 15% conversion
• Blended ARPU: $15.15/user
• Margin: $12.25/user ✓
```

**Narrative overlay:**
"The structured approach caught a fatal flaw before building. Search-style estimation would have missed this entirely."

**Read More Link:**
```
📄 Read full conversation → example1-market-sizing-fermi.md
```

---

#### Visual Transition 2:
Numbers fade, screen shifts to blueprint/architectural motif

---

### Example 2: Project Planning with Risk Management (8 minutes)

**Source Material:** `example2-project-planning-risk.md`

---

#### Scroll Sequence 1: The Search-Style Approach

**Visual:** Clean background

**Text appears:**
```
Simple query:
"How do I migrate from Redis to PostgreSQL?"
```

**Scroll trigger → Generic checklist fades in:**
```
PostgreSQL Migration Steps:

1. Assess current architecture and data model
2. Design new PostgreSQL schema
3. Set up PostgreSQL instance
4. Create data migration scripts
5. Test migration in staging environment
6. Plan cutover window
7. Execute migration
8. Validate data integrity
9. Monitor performance
10. Decommission old system

Best practices:
• Backup data before migration
• Test thoroughly
• Plan for rollback
• Monitor closely post-migration
```

**Narrative overlay:**
"Generic checklist. No risk analysis. No metrics. Could come from any blog post."

**[Pause, then fade to transition]**

---

#### Visual Transition 3:
Checklist items scatter and reorganize into structured phases

---

#### Scroll Sequence 2: Comprehensive Planning Unfolds

**Scroll Point 1: Context Gathering**

**Visual:** Info cards appear showing scope understanding

```
500K providers  |  1.2M locations  |  30GB Redis cache
15 API endpoints  |  50K req/day  |  6-month timeline
3 engineers  |  Zero-downtime required
```

**Narrative overlay:**
"Skill starts by understanding your specific constraints."

---

#### Scroll Point 2: Phased Approach Diagram

**Visual:** 4-phase timeline with parallel tracks

```
Month 1-2: Foundation
├─ Schema design
├─ Infrastructure setup
└─ Initial migration

Month 3: Dual-Write
├─ Pipeline refactor
└─ Reconciliation

Month 4-5: API Migration
├─ New endpoints
├─ Load testing
└─ Shadow traffic

Month 6: Cutover
└─ Gradual rollout (5%→100%)
```

**Implementation:** Simple SVG timeline with rectangles and arrows

**Narrative overlay:**
"Not just steps—a phased strategy with parallel workstreams."

---

#### Scroll Point 3: Premortem Risk Heatmap

**Visual:** Risk matrix animates in (Likelihood × Impact grid)

```
            HIGH IMPACT
              |
  R2: Query  | R1: Data | R5: Prod
  Performance| Loss     | Outage
              |
────────────────────────────
              |
  R7: Conn   | R4: ETL  | R9: Timeline
  Pool       | Breaks   | Slip
              |
         LOW IMPACT
```

**Top 3 risks expand with mitigation:**

**R1: Data Loss**
- Mitigation: Dry-run migration + automated validation + keep Redis backup

**R2: Performance Issues**
- Mitigation: EXPLAIN ANALYZE all queries + load testing + caching layer

**R5: Production Outage**
- Mitigation: Gradual rollout (5%→25%→50%→100%) + auto-rollback

**Implementation:**
- D3 grid layout for matrix
- Color scale for heat (d3.scaleSequential)
- Cards expand on scroll for top risks

**Narrative overlay:**
"Premortem thinking: 'Imagine this failed—why?' Then mitigate before it happens."

---

#### Scroll Point 4: Success Metrics Dashboard

**Visual:** Metrics appear in categories

**Leading Indicators** (predict success):
```
Schema design complete: 0% → 100% by Week 4
Data validation pass: → 99.99% match required
Dual-write drift: → <0.01% divergence
```

**Lagging Indicators** (measure outcomes):
```
API p95 latency: 10+ sec → <500ms
API p99 latency: 15 sec → <1 sec
Database query time: N/A → <100ms avg
```

**Counter-Metrics** (won't sacrifice):
```
❌ Data integrity: Zero tolerance for loss
❌ API availability: Maintain 99.5%+ uptime
❌ Feature parity: 100% of queries must work
```

**Implementation:** Simple card layout with arrows showing before→after

**Narrative overlay:**
"Not just 'did we migrate?'—how do we know if it's better?"

**Read More Link:**
```
📄 Read full conversation → example2-project-planning-risk.md
```

---

#### Visual Transition 4:
Metrics fade, screen transitions to experimental/scientific aesthetic

---

### Example 3: A/B Test Design with Causal Inference (9 minutes)

**Source Material:** `example3-ab-test-causal-inference.md`

---

#### Scroll Sequence 1: The Search-Style Approach

**Visual:** Clean background

**Text appears:**
```
Simple query:
"How long should I run my A/B test for a diagnosis tool?"
```

**Scroll trigger → Generic response:**
```
A/B Test Duration Calculator

To determine test duration:

1. Sample size calculation:
   • Baseline conversion rate: [input]
   • Minimum detectable effect: [input]
   • Statistical power: 80%
   • Significance level: α = 0.05

2. Formula: n = 16σ²/δ²

3. Typical duration: 2-4 weeks

Best practices:
• Run test for full business cycle
• Ensure sufficient sample size
• Check for statistical significance
• Avoid peeking at results early
```

**Narrative overlay:**
"Assumes you know what to test. Doesn't identify confounders or alternative explanations."

**[Pause, then fade]**

---

#### Visual Transition 5:
Formula dissolves into a complex causal diagram

---

#### Scroll Sequence 2: The Data Pattern

**Visual:** Bar chart comparison

```
Diabetes pages: ████████░░░░░░░░░░░░ 25% completion
Acne pages:     ████████████████████ 67% completion

Short flow:     ███████████████████░ 60% completion
Long flow:      ███████████░░░░░░░░░ 35% completion
```

**Implementation:** Simple D3 bar chart with percentages

**Narrative overlay:**
"Two observations. Most people would conclude: 'Use short flows everywhere.' But wait..."

---

#### Scroll Point 3: Causal Model Reveals Confounding

**Visual:** Animated causal diagram (DAG)

```
        ┌──────────────┐
        │  CONDITION   │
        │(Diabetes vs  │
        │   Acne)      │
        └──────┬───────┘
               │
       ┌───────┼────────┐
       ↓       ↓        ↓
  ┌─────────┐ ┌─────────┐ ┌──────────┐
  │ Content │ │  User   │ │   Flow   │
  │         │ │ Intent  │ │  Length  │
  └────┬────┘ └────┬────┘ └────┬─────┘
       │           │           │
       └───────────┴───────────┘
                   ↓
           ┌──────────────┐
           │  COMPLETION  │
           └──────────────┘
```

**Animation:**
- Nodes appear first
- Then arrows draw in (showing causal relationships)
- Arrows pulse showing confounding:
  - CONDITION → Flow Type (diabetes gets long flow)
  - CONDITION → User Intent (diabetes = lower intent)
  - Both paths → Completion

**Big insight animates:**
```
CONDITION is a CONFOUNDER

Correlation ≠ Causation
```

**Implementation:**
- Use `d3-dag` library or `dagre-d3`
- Animate path drawing with transitions
- Pulse effect with opacity changes

**Narrative overlay:**
"The skill reveals: long flows aren't assigned randomly. Diabetes users get long flows AND have different intent. The correlation may be spurious."

**Resources:** d3-dag library (https://github.com/erikbrinkman/d3-dag)

---

#### Scroll Point 4: Experimental Design Solution

**Visual:** Experiment design matrix

```
Experiment 2: Randomize Flow Within Condition

Diabetes users → 50% Short  |  50% Long
Acne users     → 50% Short  |  50% Long
Condition 3    → 50% Short  |  50% Long
Condition 4    → 50% Short  |  50% Long
Condition 5    → 50% Short  |  50% Long
```

**Why this works (animates):**
```
✓ Controls for condition-specific user intent
✓ Isolates causal effect of flow length
✓ Eliminates confounding
```

**Implementation:** Simple table with animated checkmarks

**Narrative overlay:**
"Now we can answer: does flow length CAUSE lower completion? Without this, we'd make the wrong decision."

---

#### Scroll Point 5: Multiple Experiments Designed

**Visual:** Experiment roadmap

```
Phase 1: CTA vs Content (Diabetes pages)
→ 4 variants, 4K users, 2-3 weeks
→ Goal: Lift completion 25%→40%

Phase 2: Flow Length RCT
→ 5 conditions, 5K users, 3-4 weeks
→ Goal: Establish causality

Phase 3: Optimize (if needed)
→ Progress indicators + Skip logic
→ Goal: Close completion gap
```

**Narrative overlay:**
"Not one test—a systematic experimental strategy that eliminates alternative explanations."

**Read More Link:**
```
📄 Read full conversation → example3-ab-test-causal-inference.md
```

---

### Section 2 Recap (1 minute)

**Visual:** Three icons representing the examples float in

**Narrative overlay:**
```
Pattern Recognition:

Simple prompts → Surface answers
Structured prompts → Framework-driven analysis

Market Sizing: Caught fatal unit economics flaw
Planning: Identified risks before they happened
Experimentation: Revealed spurious correlations
```

**Spoken transition:**
"These aren't cherry-picked examples. This is the quality of thinking you get consistently when you use structured prompting. Now, what if you want to go even deeper?"

**Visual:** Quick fade to Section 3

---

## SECTION 3: Deep Research Workflow (6 minutes)

### Scroll Sequence 1: The Pattern (1 minute)

**Visual:** Simple 3-step diagram

```
1. Use Skills          2. Synthesize         3. Deep Research
   (Structured         (Create Custom        (Generate
    Thinking)           Prompt)               Output)

    ↓                      ↓                     ↓

[Fermi Estimation]  →  [Custom Prompt]   →  [Research Report]
[Risk Analysis]         about related         [Implementation Guide]
[Causal Inference]      techniques           [Comparative Analysis]
```

**Narrative overlay:**
"Skills give you structured thinking. Deep research scales that thinking into comprehensive output."

---

### Scroll Sequence 2: Meta-Example Setup (2 minutes)

**Visual:** Show the Fermi output from Section 2 (condensed)

```
From Example 1: Fermi Estimation

We used:
✓ Decomposition (260M → 182M → 82M → 29M → 6.4M)
✓ Assumption bounding (pessimistic: $4M, optimistic: $60M)
✓ Triangulation (top-down vs bottom-up)
✓ Sensitivity analysis (which assumptions matter most)
```

**Spoken narrative:**
"We just used Fermi estimation to break down a market sizing problem. That's one framework. What other estimation techniques exist? When should you use each one? How do they compare?"

---

### Scroll Sequence 3: Custom Prompt Creation (1.5 minutes)

**Visual:** Prompt being constructed with highlighted sections

```
Prompt for Deep Research:

"Based on the Fermi estimation approach we just used (decomposition,
bounding, triangulation), research and create a comprehensive guide on
estimation techniques for business decisions.

Include:
1. Taxonomy of estimation methods (top-down, bottom-up, analogous,
   parametric, three-point, Monte Carlo, etc.)
2. When to use each technique (decision tree for selection)
3. Comparison table (accuracy, speed, data requirements, complexity)
4. Real examples from business contexts (market sizing, resource
   planning, forecasting)
5. Common pitfalls and how to avoid them
6. Integration strategies (when to combine multiple techniques)

Format as: Executive summary + detailed sections + decision framework

Context: Technical leadership audience making strategic decisions
under uncertainty."
```

**Highlight animations:**
- "Based on the Fermi estimation approach we just used" → highlights in yellow
- Sections 1-6 → appear sequentially
- "Format as" → highlights in green
- "Context" → highlights in blue

**Narrative overlay:**
"Notice: We're using what we learned (Fermi) to explore the broader space (all estimation techniques). The skill output becomes input for deeper research."

---

### Scroll Sequence 4: Deep Research Output Preview (1.5 minutes)

**Visual:** Mock table of contents appears

```
Generated Output: "Strategic Estimation Techniques Guide"

Executive Summary (2 pages)

1. Taxonomy of Estimation Methods
   1.1 Decomposition-Based (Fermi, Work Breakdown)
   1.2 Comparison-Based (Analogous, Relative)
   1.3 Statistical (Three-Point, PERT, Monte Carlo)
   1.4 Expert-Based (Delphi, Consensus)

2. Decision Framework: Which Technique When?
   [Decision tree visualization]
   - Time available? → Fast: Analogous | Slow: Monte Carlo
   - Data availability? → Low: Fermi | High: Statistical
   - Precision needed? → Order of magnitude vs ±10%

3. Comparative Analysis
   [Table: Technique | Accuracy | Speed | Data Req | Best For]

4. Real Business Examples
   - Market Sizing: Fermi decomposition (Netflix international expansion)
   - Project Estimation: Three-Point (software development)
   - Resource Planning: Monte Carlo (infrastructure capacity)

5. Common Pitfalls & Mitigations
   - Anchoring bias in Fermi
   - Over-precision in statistical methods
   - Groupthink in expert methods

6. Integration Strategies
   - Triangulation: Use 2-3 methods, compare results
   - Sequential: Start with Fermi, refine with statistical
   - Parallel: Multiple teams, different techniques, reconcile
```

**Narrative overlay:**
"This isn't generic content—it's research grounded in YOUR specific context (the Fermi work we just did), tailored to YOUR audience (technical leadership), and structured for YOUR use case (strategic decisions)."

**Interactive element:**
```
📄 Explore full deep research prompt → deep-research-example.md
(Click to see detailed prompt structure with learning areas, case studies, output format)
```

---

### Closing (30 seconds)

**Visual:** Three section headers appear

```
Section 1: What is a Prompt?
→ Structure activates frameworks

Section 2: Structured Thinking Partner
→ Skills bring domain expertise

Section 3: Deep Research
→ Scale thinking into comprehensive output
```

**Spoken narrative:**
"Stop using AI like Google search. Start using it as your structured thinking partner. The same AI that gives you generic answers can be a world-class strategy consultant, rigorous engineer, and careful scientist—if you prompt it with structure.

These examples aren't cherry-picked. This is the consistent quality you get with skills-based prompting."

---

### Final Resources Slide

**Visual:** Clean layout with organized links

```
Questions?

Conversation Transcripts:
• Market Sizing with Fermi Estimation → example1-market-sizing-fermi.md
• Project Planning with Risk Management → example2-project-planning-risk.md
• A/B Test Design with Causal Inference → example3-ab-test-causal-inference.md

Deep Research:
• Strategic Estimation Techniques Guide → deep-research-example.md

Documentation:
• Claude Code skills documentation
• Presentation source code (GitHub)
```

---

## IMPLEMENTATION WORKFLOW CHECKLIST

### Phase 1: Setup & Infrastructure (2-3 hours)

- [ ] **1.1 Project Structure**
  - Create `index.html` main file
  - Create `styles.css` for styling
  - Create `scripts/` folder for JavaScript modules
  - Create `data/` folder for any data files
  - Create `assets/` folder for images/resources
  - Reference: Project root structure

- [ ] **1.2 Library Setup**
  - Add Scrollama library (CDN or npm)
  - Add D3.js v7 (CDN or npm)
  - Add GSAP for animations (CDN or npm)
  - Test basic imports
  - Reference: Technical Implementation Notes (all sections)

- [ ] **1.3 Base HTML Structure**
  - Create scrollytelling container structure
  - Set up `<div id="scroll">` main container
  - Create step divs for each scroll point
  - Set up fixed graphic containers for visualizations
  - Reference: Scrollama documentation pattern

- [ ] **1.4 Basic Styling**
  - Set up scrollytelling CSS (sticky positioning)
  - Create typography styles
  - Set up color palette
  - Mobile responsive breakpoints
  - Reference: General presentation requirements

---

### Phase 2: Section 1 - Force-Directed Graph (4-5 hours)

- [ ] **2.1 Data Preparation**
  - Create node data structure (~1000 nodes)
  - Define 9 clusters with labels
  - Assign nodes to clusters
  - Create link data (inter-cluster connections)
  - Reference: Section 1 → Visual: D3.js Interactive Concept Graph → Design Specs

- [ ] **2.2 D3 Force Simulation Setup**
  - Initialize SVG canvas
  - Set up force simulation with cluster gravity
  - Implement collision detection
  - Add nodes and links to SVG
  - Test basic rendering
  - Reference: Section 1 → Technical Implementation Notes → D3.js Setup

- [ ] **2.3 Cluster Highlighting Logic**
  - Create function to highlight single cluster (yellow)
  - Create function to highlight multiple clusters (blue)
  - Implement smooth transitions between states
  - Add inter-cluster line animations
  - Reference: Section 1 → Scroll Point 1 & 2 animations

- [ ] **2.4 Scrollama Integration**
  - Set up Scrollama instance for Section 1
  - Define 3 scroll triggers (simple prompt, structured prompt, hover state)
  - Connect triggers to highlight functions
  - Test scroll-triggered animations
  - Reference: Section 1 → Technical Implementation Notes → Scrollama Triggers

- [ ] **2.5 Narrative Overlays**
  - Create overlay containers for narrative text
  - Add fade-in/fade-out animations
  - Position overlays correctly
  - Add prompt text displays
  - Reference: Section 1 → Scrollytelling Sequence (all scroll points)

---

### Phase 3: Section 2, Example 1 - Market Sizing (3-4 hours)

- [ ] **3.1 Before State (Search-Style)**
  - Create simple query display
  - Add generic AI response mock
  - Implement fade-in animation
  - Add narrative overlay
  - Reference: Section 2 → Example 1 → Scroll Sequence 1

- [ ] **3.2 Transition Animation**
  - Create particle dissolution effect (or simple fade)
  - Test GSAP animation
  - Time transition appropriately (2-3 seconds)
  - Reference: Section 2 → Example 1 → Visual Transition 1

- [ ] **3.3 Clarifying Questions Display**
  - Create split-screen layout (prompt left, questions right)
  - Animate questions appearing
  - Style Q&A format
  - Reference: Section 2 → Example 1 → Scroll Sequence 2

- [ ] **3.4 Fermi Tree Visualization**
  - Use D3 tree layout (`d3.tree()`)
  - Create data structure for decomposition
  - Implement sequential node animation (200ms delays)
  - Add tooltips for assumptions
  - Reference: Section 2 → Example 1 → Scroll Point 3

- [ ] **3.5 Bounds & Sensitivity Visualization**
  - Create range slider visual ($4M - $19M - $60M)
  - Add sensitivity bars with color coding
  - Animate appearance
  - Reference: Section 2 → Example 1 → Scroll Point 4

- [ ] **3.6 Unit Economics Breakdown**
  - Create revenue/cost comparison
  - Add warning animation (red)
  - Show solution with freemium model
  - Add "Read More" link to markdown
  - Reference: Section 2 → Example 1 → Scroll Point 5

- [ ] **3.7 Scrollama Setup for Example 1**
  - Define 5 scroll triggers
  - Connect to visualization functions
  - Test smooth transitions
  - Reference: Section 2 → Example 1 (all scroll points)

---

### Phase 4: Section 2, Example 2 - Project Planning (3-4 hours)

- [ ] **4.1 Before State (Generic Checklist)**
  - Display simple migration query
  - Show generic checklist
  - Add narrative overlay
  - Reference: Section 2 → Example 2 → Scroll Sequence 1

- [ ] **4.2 Transition Animation**
  - Scatter checklist items
  - Reorganize into phases
  - Reference: Section 2 → Example 2 → Visual Transition 3

- [ ] **4.3 Context Cards**
  - Create info card layout
  - Display project constraints
  - Animate appearance
  - Reference: Section 2 → Example 2 → Scroll Point 1

- [ ] **4.4 Phased Timeline Diagram**
  - Create SVG timeline with 4 phases
  - Add parallel tracks within phases
  - Animate phases appearing
  - Reference: Section 2 → Example 2 → Scroll Point 2

- [ ] **4.5 Risk Heatmap Matrix**
  - Create 3x3 grid with D3
  - Position risks in matrix
  - Add color scale for heat
  - Implement expansion cards for top 3 risks
  - Reference: Section 2 → Example 2 → Scroll Point 3

- [ ] **4.6 Metrics Dashboard**
  - Create three categories (leading, lagging, counter-metrics)
  - Style with cards showing before→after
  - Animate appearance
  - Add "Read More" link
  - Reference: Section 2 → Example 2 → Scroll Point 4

- [ ] **4.7 Scrollama Setup for Example 2**
  - Define 4 scroll triggers
  - Connect to visualization functions
  - Test transitions
  - Reference: Section 2 → Example 2 (all scroll points)

---

### Phase 5: Section 2, Example 3 - A/B Testing (3-4 hours)

- [ ] **5.1 Before State (Sample Size Calculator)**
  - Display A/B test duration query
  - Show generic calculator response
  - Add narrative overlay
  - Reference: Section 2 → Example 3 → Scroll Sequence 1

- [ ] **5.2 Transition to Causal Diagram**
  - Formula dissolves into diagram
  - Reference: Section 2 → Example 3 → Visual Transition 5

- [ ] **5.3 Bar Chart Comparison**
  - Create D3 bar chart
  - Show diabetes vs acne completion rates
  - Show short vs long flow rates
  - Reference: Section 2 → Example 3 → Scroll Sequence 2

- [ ] **5.4 Causal DAG Visualization**
  - Use d3-dag library or dagre-d3
  - Create nodes (Condition, Content, Intent, Flow, Completion)
  - Draw directed edges
  - Animate arrows showing confounding paths
  - Add pulsing effect
  - Highlight "CONDITION is a CONFOUNDER" insight
  - Reference: Section 2 → Example 3 → Scroll Point 3

- [ ] **5.5 Experimental Design Matrix**
  - Create table showing randomization
  - Add checkmarks for why it works
  - Animate appearance
  - Reference: Section 2 → Example 3 → Scroll Point 4

- [ ] **5.6 Experiment Roadmap**
  - Display 3-phase experimental strategy
  - Show goals and metrics
  - Add "Read More" link
  - Reference: Section 2 → Example 3 → Scroll Point 5

- [ ] **5.7 Scrollama Setup for Example 3**
  - Define 5 scroll triggers
  - Connect to visualization functions
  - Test causal diagram animation specifically
  - Reference: Section 2 → Example 3 (all scroll points)

---

### Phase 6: Section 2 Recap & Transition (1 hour)

- [ ] **6.1 Section 2 Recap Visual**
  - Create three floating icons
  - Show pattern recognition summary
  - Add key insights for each example
  - Reference: Section 2 → Section 2 Recap

- [ ] **6.2 Transition to Section 3**
  - Quick fade animation
  - Test smooth scroll continuity
  - Reference: Section 2 → Section 2 Recap → Spoken transition

---

### Phase 7: Section 3 - Deep Research (2-3 hours)

- [ ] **7.1 Three-Step Workflow Diagram**
  - Create simple visual diagram
  - Show: Skills → Synthesize → Deep Research
  - Add arrows and labels
  - Reference: Section 3 → Scroll Sequence 1

- [ ] **7.2 Fermi Output Summary**
  - Display condensed Fermi results from Example 1
  - Show checkmarks for techniques used
  - Reference: Section 3 → Scroll Sequence 2

- [ ] **7.3 Custom Prompt Display**
  - Show full deep research prompt
  - Add highlighting for key sections (yellow, green, blue)
  - Animate sections appearing sequentially
  - Reference: Section 3 → Scroll Sequence 3

- [ ] **7.4 Table of Contents Preview**
  - Display mock TOC for estimation guide
  - Add interactive link to full deep research prompt
  - Reference: Section 3 → Scroll Sequence 4

- [ ] **7.5 Closing Message**
  - Show three section headers
  - Display key takeaways
  - Reference: Section 3 → Closing

- [ ] **7.6 Scrollama Setup for Section 3**
  - Define 4 scroll triggers
  - Connect to content displays
  - Test smooth flow
  - Reference: Section 3 (all scroll sequences)

---

### Phase 8: Final Resources & Polish (2-3 hours)

- [ ] **8.1 Resources Slide**
  - Create organized link layout
  - Add all conversation transcripts
  - Add deep research example
  - Add documentation links
  - Ensure links are embedded throughout AND at the end
  - Reference: Section 3 → Final Resources Slide

- [ ] **8.2 Mobile Responsiveness**
  - Test on mobile devices
  - Adjust visualizations for smaller screens
  - Simplify complex diagrams if needed
  - Test scroll behavior on mobile
  - Reference: General requirements

- [ ] **8.3 Performance Optimization**
  - Optimize D3 rendering (use canvas for large node graphs if needed)
  - Lazy load visualizations
  - Test scroll performance
  - Minimize animation jank
  - Reference: Best practices

- [ ] **8.4 Cross-browser Testing**
  - Test in Chrome, Firefox, Safari, Edge
  - Fix any browser-specific issues
  - Test on different screen sizes
  - Reference: General requirements

- [ ] **8.5 Accessibility**
  - Add alt text for visualizations
  - Ensure keyboard navigation works
  - Test screen reader compatibility
  - Add ARIA labels where needed
  - Reference: Best practices

- [ ] **8.6 Final Polish**
  - Review all transitions
  - Check narrative overlay timing
  - Verify all links work
  - Test full presentation flow
  - Proofread all text
  - Reference: All sections

---

### Phase 9: GitHub Deployment (1 hour)

- [ ] **9.1 Repository Setup**
  - Create GitHub repository
  - Add README with presentation description
  - Add all markdown conversation files
  - Add deep research example
  - Reference: Deployment requirements

- [ ] **9.2 GitHub Pages Configuration**
  - Enable GitHub Pages
  - Set source to main branch
  - Test live URL
  - Reference: GitHub Pages docs

- [ ] **9.3 Documentation**
  - Add README with:
    - Presentation overview
    - Links to live presentation
    - Links to conversation transcripts
    - Technical stack used
  - Reference: Project documentation standards

- [ ] **9.4 Final Testing**
  - Test live GitHub Pages URL
  - Verify all links work
  - Test on different devices
  - Share with test audience
  - Reference: Final validation

---

## TECHNICAL RESOURCES REFERENCE

### D3.js Resources
- **D3 In Depth - Force Layouts:** https://www.d3indepth.com/force-layout/
- **D3 Tree Layouts:** https://d3js.org/d3-hierarchy/tree
- **D3 DAG Library:** https://github.com/erikbrinkman/d3-dag
- **Observable D3 Examples:** https://observablehq.com/@d3

### Scrollama Resources
- **Scrollama Documentation:** https://github.com/russellgoldenberg/scrollama
- **Scrollama + D3 Demo:** https://github.com/edriessen/scrollytelling-scrollama-d3-demo

### GSAP Resources
- **GSAP Documentation:** https://greensock.com/docs/

### Color Schemes
- **D3 Color Schemes:** d3.schemeSet3, d3.schemeTableau10
- **Accessibility:** Use ColorBrewer for colorblind-safe palettes

---

## FILE STRUCTURE

```
usingai/
├── index.html                              # Main presentation file
├── styles.css                              # Main stylesheet
├── scripts/
│   ├── main.js                            # Main orchestration
│   ├── section1-force-graph.js            # Force-directed graph
│   ├── section2-example1-fermi.js         # Market sizing visualizations
│   ├── section2-example2-planning.js      # Project planning visualizations
│   ├── section2-example3-causal.js        # A/B test causal diagrams
│   └── section3-deep-research.js          # Deep research workflow
├── data/
│   └── force-graph-nodes.json             # Node data for Section 1
├── assets/
│   └── (any images if needed)
├── example1-market-sizing-fermi.md        # Conversation transcript
├── example2-project-planning-risk.md      # Conversation transcript
├── example3-ab-test-causal-inference.md   # Conversation transcript
├── deep-research-example.md               # Deep research prompt example
├── presentation-master-plan.md            # This document
└── README.md                               # Project documentation
```

---

## TIMING BREAKDOWN

**Total Presentation Time: 36 minutes + Q&A**

- Introduction: 0:00 - 0:30 (30 seconds)
- Section 1: 0:30 - 5:30 (5 minutes)
- Section 2: 5:30 - 30:30 (25 minutes)
  - Example 1: 5:30 - 13:30 (8 minutes)
  - Example 2: 13:30 - 21:30 (8 minutes)
  - Example 3: 21:30 - 30:30 (9 minutes)
- Section 3: 30:30 - 36:30 (6 minutes)
- Q&A: 36:30 - 46:30 (10 minutes)

---

## SUCCESS CRITERIA

**Presentation is successful if:**
- [ ] All visualizations render smoothly on desktop and mobile
- [ ] Scrollytelling interactions are intuitive and responsive
- [ ] Narrative overlays are legible and well-timed
- [ ] All links to markdown transcripts work
- [ ] Deep research example is compelling and clear
- [ ] Presentation can be delivered in 30-36 minutes
- [ ] Audience leaves understanding: structured prompts > simple queries
- [ ] GitHub Pages deployment is live and accessible

---

## NEXT STEPS

1. Review this master plan document
2. Set up development environment (Phase 1)
3. Start with Section 1 force-directed graph (Phase 2) as it's the foundation
4. Build Section 2 examples sequentially (Phases 3-5)
5. Complete Section 3 and resources (Phases 6-8)
6. Deploy to GitHub Pages (Phase 9)
7. Practice presentation delivery with live site

---

**Document Version:** 1.0
**Last Updated:** Current session
**Status:** Ready for implementation
