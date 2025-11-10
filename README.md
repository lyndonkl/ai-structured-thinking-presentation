# Beyond Search: Using AI as Your Structured Thinking Partner

A scrollytelling presentation demonstrating how to use AI as a structured thinking partner rather than just a search tool.

## 🎯 Overview

This presentation shows technical org leadership how to transform AI usage from simple question-answer interactions to systematic, framework-driven analysis using Claude Code skills.

**Duration:** 30-45 minutes (30 min presentation + 10 min Q&A)

**Format:** Interactive scrollytelling with D3.js visualizations

## 📊 Presentation Structure

### Section 1: What is a Prompt? (5 minutes)
Interactive D3.js force-directed graph (~1000 nodes, 9 knowledge clusters) showing how structured prompts activate multiple frameworks simultaneously.

### Section 2: Structured Thinking Partner (25 minutes)
Three real examples demonstrating skills in action:

1. **Market Sizing with Fermi Estimation** (8 min)
   - Fermi decomposition tree visualization
   - Unit economics analysis
   - Fatal flaw detection (LLM costs > ad revenue)
   - [Full conversation transcript](example1-market-sizing-fermi.md)

2. **Project Planning with Risk Management** (8 min)
   - Phased migration timeline
   - Premortem risk heatmap
   - Success metrics dashboard
   - [Full conversation transcript](example2-project-planning-risk.md)

3. **A/B Test Design with Causal Inference** (9 min)
   - Data pattern visualization
   - Causal DAG showing confounding
   - Experimental design matrix
   - [Full conversation transcript](example3-ab-test-causal-inference.md)

### Section 3: Deep Research Workflow (6 minutes)
Shows how to chain skills together for comprehensive research output.
- [Deep research example guide](deep-research-example.md)

## 🚀 Quick Start

### View Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/lyndonkl/ai-structured-thinking-presentation.git
   cd ai-structured-thinking-presentation
   ```

2. Start a local web server:
   ```bash
   python3 -m http.server 8000
   ```

3. Open in your browser:
   ```
   http://localhost:8000
   ```

### Deploy to GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under "Build and deployment":
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes for deployment
6. Your site will be live at: `https://lyndonkl.github.io/ai-structured-thinking-presentation/`

## 🛠 Technical Stack

- **Scrollama.js** - Scrollytelling framework
- **D3.js v7** - Data visualizations
  - Force-directed graphs with cluster gravity
  - Tree layouts for decomposition
  - DAG (Directed Acyclic Graph) for causal models
  - Bar charts and heatmaps
- **GSAP** - Animation library
- **d3-dag** - DAG visualization library

## 📁 Project Structure

```
.
├── index.html                              # Main presentation
├── styles.css                              # Styling and animations
├── scripts/
│   ├── main.js                            # Scrollama orchestration
│   ├── section1-force-graph.js            # Knowledge cluster visualization
│   ├── section2-example1-fermi.js         # Market sizing visualizations
│   ├── section2-example2-planning.js      # Project planning visualizations
│   ├── section2-example3-causal.js        # Causal inference visualizations
│   └── section3-deep-research.js          # Deep research workflow
├── data/
│   └── force-graph-nodes.json             # Cluster and node data
├── example1-market-sizing-fermi.md        # Full conversation transcript
├── example2-project-planning-risk.md      # Full conversation transcript
├── example3-ab-test-causal-inference.md   # Full conversation transcript
├── deep-research-example.md               # Deep research guide
├── presentation-master-plan.md            # Complete implementation guide
└── README.md                               # This file
```

## 🎨 Key Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Smooth Animations**: GSAP-powered transitions between sections
- **Interactive Visualizations**: Hover states, tooltips, and animated reveals
- **Full Transcripts**: Link to complete conversation examples
- **Comprehensive Guide**: Detailed master plan for modifications

## 📝 Customization

To modify the presentation:

1. **Content**: Edit narrative overlays in `index.html`
2. **Styling**: Adjust colors and typography in `styles.css`
3. **Visualizations**: Modify D3.js code in `scripts/` directory
4. **Data**: Update cluster configuration in `data/force-graph-nodes.json`

See [presentation-master-plan.md](presentation-master-plan.md) for detailed specifications and implementation checklist.

## 🔗 Resources

- [Claude Code Documentation](https://docs.claude.com/en/docs/claude-code)
- [Scrollama Documentation](https://github.com/russellgoldenberg/scrollama)
- [D3.js Documentation](https://d3js.org/)
- [GSAP Documentation](https://greensock.com/docs/)

## 📄 License

This presentation was created for internal use and demonstration purposes.

---

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
