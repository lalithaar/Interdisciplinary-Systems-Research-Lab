---
layout: experiment
title: "Making Accessibility Accessible, Part II—The Self-Reinforcing Cycle of Failure"
date: 2025-12-28
math: true
tags: [systems-thinking, human-computer-interaction, web-a11y, dev-experience]
---

### The Self-Reinforcing Cycle of Inaccessibility

In my analysis of modern web infrastructure, I have identified a systemic failure that I term the **Self-Reinforcing Cycle of Inaccessible Code**. This cycle explains why, despite 25 years of WCAG guidelines, the web remains fundamentally broken for many.

The cycle operates through three distinct feedback loops:

1.  **The Educational Gap:** A11y is rarely taught as a core engineering discipline. Developers enter the workforce viewing it as an "extra" or a specialized niche.
2.  **The Tooling Friction:** Current linters and compilers prioritize "Functional Correctness" (Does the code run?) over "Relational Correctness" (Can a human use it?). Accessibility errors are often treated as low-priority warnings that can be silenced or ignored.
3.  **The Normalization of Deviance:** When 97% of top websites have detectable accessibility errors, "broken" code becomes the industry standard. New developers copy existing "broken" patterns, reinforcing the status quo.

{% include sidenote.html id="1" content="Normalization of Deviance is a term from sociology (often used in NASA disaster post-mortems) describing the process in which people become so accustomed to a deviant behavior that they don't consider it deviant anymore." %}

---

### Strategy 1: Breaking the Cycle via Framework Intervention

If the problem is systemic, the solution must be structural. We must move accessibility from the **separate milestone after deployment** (the "afterthought" phase) to a natural step of the development process.

Framework developers hold immense power: because they provide the primitives of the web, a small change at the framework level can impact the accessibility of the entire web by default.

#### 1. The Default-On Paradigm
Current frameworks (React, Angular, Vue) allow you to ship a component with missing contextual information. We must design framework-level primitives where the "easiest" way to write code is the accessible way. 

* **The Intervention:** An `img` component that refuses to compile unless it receives an `alt` prop.

#### 2. Incremental Hardening & Migration Paths
We cannot break the web overnight. I propose an **Incremental Reveal** strategy to push the standard forward:

* **Phase 1 (Awareness):** High-visibility warnings for 6–12 months to allow legacy projects to identify gaps.
* **Phase 2 (Hardening):** Moving to "Soft Fails" where builds pass but deployment is blocked in staging without a specific "ignore" flag.
* **Phase 3 (Enforcement):** Accessibility becomes a "Hard Fail" requirement for the build to complete.

---

### Strategy 2: The Surgical A11y CLI

Relying on developers to memorize 78 pages of WCAG is an **Ego Depletion** trap. 

{% include sidenote.html id="2" content="Ego Depletion refers to the idea that self-control and decision-making draw upon a limited pool of mental resources. Asking a developer at 2am to check ARIA specs is a recipe for failure." %}

Instead of tutorials, we need **Surgical Automation**. I am developing a CLI tool that leverages a "Reverse-Mitosis" approach to solve cross-framework compatibility.

#### The Technical Logic:

1.  **Normalization:** The CLI parses framework-specific code (e.g., `.jsx` or `.svelte`) into a **Universal Abstract Syntax Tree (AST)**.
2.  **Interaction:** It identifies mechanical gaps and initiates a **Human-in-the-Loop** prompt: *"I found an input with name 'q' in Header.jsx. Is this a 'question' or a 'search query'?"*
3.  **Surgical Injection:** Once the human provides context, the CLI surgically updates the original source file, maintaining the developer's formatting and style.

> **Why this works: Habit Formation**
> By using the CLI over time, accessibility moves from an external requirement to an internal habit. Developers learn by *doing* within their existing workflow.

---

### The Path of Least Resistance

The core of this research is a shift in **Incentive Structures**. We must make it easier to write accessible code than inaccessible code.

By automating the **Mechanical** (syntax, IDs, ARIA links) and facilitating the **Meaningful** (labels, context), we bridge the implementation gap. We aren't just fixing code; we are building an infrastructure that cares for the developer's time and the user's dignity.

---

### Research Status

* **Status:** `Active Research / Implementation Stage`
* **Core Framework:** Systemic Intervention vs. Manual Compliance
* Check [Automation Safety and the Overlay Fallacy](https://lalithaar.github.io/Interdisciplinary-Systems-Research-Lab/notes/Automation-Safety-and-the-Overlay-Fallacy) for more of my thoughts on automation safety in web-a11y

---

*My deepest gratitude to Mr. Krishna, whose constancy forms the foundation upon which all my work, including this, quietly rests. Salutations to the Goddess who dwells in all beings in the form of intelligence. I bow to her again and again.*