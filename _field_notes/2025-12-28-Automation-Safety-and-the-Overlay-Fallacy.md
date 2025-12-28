---
layout: field-note
title: "Automation Safety and the Overlay Fallacy"
date: 2025-12-28
math: true
tags: [web-a11y, automation, engineering-ethics, dev-tools, human-computer-interaction]
---

### The Allure of the "Magic Fix"

In the rush to make the web accessible, a dangerous category of tools has emerged: **Accessibility Overlays**. These tools promise "instant WCAG compliance" through a single line of JavaScript that "fixes" the site for the user in real-time. 

While well-intentioned, these are a bad example of automation. They attempt to solve human context problems with mechanical scripts, often making the experience worse for the very people they claim to help. 
* **The Reality:** [Should I Use an Accessibility Overlay?](https://shouldiuseanaccessibilityoverlay.com/) (Spoiler: No.)

### The Mechanical vs. The Human

Accessibility is a spectrum between **purely mechanical structures** and **deeply human context**. Automation fails when it ignores this tension.

| Mechanical (Safe to Model) | Human (Requires Judgment) |
| :--- | :--- |
| Linking `<label>` to `<input>` via IDs. | Determining if the label text is helpful. |
| Checking for `alt` attribute presence. | Writing meaningful `alt` text for an image. |
| Ensuring `aria-required` matches `required`. | Deciding if a form field should be required at all. |

The gap between "I want to build an accessible site" and "I deeply understand WCAG/ARIA" is huge. We shouldn't bridge that gap with "magic"; we should bridge it with **Automated Safety Frameworks**.

---

### A Three-Bucket Framework for Safe Automation

To build responsible automation, we must categorize tasks into three distinct buckets based on their risk profile.

#### 1. Safe to Automate (The Spell Checker)
These are fixes with 100% confidence and zero risk of making things worse. The requirements are purely mechanical.
* **Example:** Linking a `<label for="x">` to an `<input id="x">` when they are clearly paired in the DOM.
* **Logic:** There is no ambiguity. We are simply completing a broken mechanical link.

#### 2. Can Suggest, Cannot Fix (The Grammar Suggester)
Things a tool can detect and guess at, but must ultimately let the human decide.
* **Example:** An input named `email` likely needs `autocomplete="email"`, but it might be a "Confirm Email" field or a field for a third party.
* **Logic:** Automation here involves making assumptions about meaning. If we guess wrong, we create "junk" metadata that confuses assistive technology.

#### 3. Must Not Automate (The Creative Editor)
Tasks that require an understanding of context, purpose, and audience.
* **Example:** Writing error messages or generating `alt` text from file names.
* **Logic:** Language, tone, and clarity depend entirely on the application's context. Automated "fixes" in this bucket often result in "Compliance without Usability."



---

### Principles for the "Comfort Mode" Tooling

In my current work—including the **Care Framework for Developer-Centered Tooling** ([DOI: 10.13140/RG.2.2.19130.25285](https://doi.org/10.13140/RG.2.2.19130.25285))—I follow these strict principles:

1.  **Transparency over Promises:** Document what the tool *cannot* do as prominently as what it can.
2.  **Safety over Completeness:** It is better to catch 20% of errors with 100% safety than to attempt 80% and cause harm.
3.  **Teaching over Automation:** If a developer learns *why* a label was missing, that is a permanent fix. If a script hides the error, the developer learns nothing.
4.  **No "Hidden" Fixes:** Accessibility should be fixed in the source code, not patched in the browser (unlike harmful overlays).

### The Goal: Mechanical Assistance for Human Meaning

Think of this like a spell checker: it catches "teh," but it can’t tell you if your poem is beautiful. By automating the "mechanical noise" (the IDs, the ARIA references, the basic connections), we free up the developer's mental energy to focus on the **meaningful content**.

We are building bridges, not teleporters. Bridges are slower, but they are grounded in reality.

---

**Status:** `Research Framework`  
**Current Implementation:** Testing v0.0.1 of "Safe-Form" automation.  
**Related Work:** [Making Accessibility Accessible (Part I)](https://doi.org/10.13140/RG.2.2.19130.25285)

---
*My deepest gratitude to Mr. Krishna, whose constancy forms the foundation upon which all my work, including this, quietly rests. Salutations to the Goddess who dwells in all beings in the form of intelligence. I bow to her again and again.*