/**
 * Main orchestration script for the presentation
 * Handles Scrollama initialization and coordination between sections
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Presentation loaded');

    // Initialize all sections
    initScrollama();
});

/**
 * Initialize Scrollama for all sections
 */
function initScrollama() {
    // Section 1: Force-directed graph
    const section1Scroller = scrollama();

    section1Scroller
        .setup({
            step: '#section1 .step',
            offset: 0.5,
            debug: false,
        })
        .onStepEnter(handleSection1StepEnter)
        .onStepExit(handleSection1StepExit);

    // Section 2: Examples (will be initialized per example)
    // Handled in individual example files

    // Section 3: Deep Research
    const section3Scroller = scrollama();

    section3Scroller
        .setup({
            step: '#section3 .step',
            offset: 0.5,
            debug: false,
        })
        .onStepEnter(handleSection3StepEnter)
        .onStepExit(handleSection3StepExit);

    // Handle window resize
    window.addEventListener('resize', () => {
        section1Scroller.resize();
        section3Scroller.resize();
    });
}

/**
 * Handle Section 1 step enter
 */
function handleSection1StepEnter(response) {
    const { element, index, direction } = response;
    const step = element.getAttribute('data-step');

    console.log('Section 1 step enter:', step);

    // Delegate to section1-force-graph.js
    if (typeof window.updateForceGraph === 'function') {
        window.updateForceGraph(step, direction);
    }
}

/**
 * Handle Section 1 step exit
 */
function handleSection1StepExit(response) {
    // Optional: Handle step exit if needed
}

/**
 * Handle Section 3 step enter
 */
function handleSection3StepEnter(response) {
    const { element, index, direction } = response;
    const step = element.getAttribute('data-step');

    console.log('Section 3 step enter:', step);

    // Delegate to section3-deep-research.js
    if (typeof window.updateSection3 === 'function') {
        window.updateSection3(step, direction);
    }
}

/**
 * Handle Section 3 step exit
 */
function handleSection3StepExit(response) {
    // Optional: Handle step exit if needed
}

/**
 * Utility: Smooth scroll to element
 */
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
}

// Export utility functions
window.smoothScrollTo = smoothScrollTo;
