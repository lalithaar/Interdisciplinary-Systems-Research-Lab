---
layout: experiment
title: "Perceptually-Minimal Color Optimization for Web Accessibility"
date: 2025-12-29
math: true
tags: [color-science, web-a11y, psychophysics, dev-experience]
---

### The Conflict: Brand vs. Compliance

Most accessibility tools treat color contrast as a binary "pass/fail" check. When a color fails, they usually "brute-force" a fix by darkening it until it hits the required ratio. This often destroys the design—vibrant brand purples turn into muddy browns, leading designers to reject the fix entirely.

This experiment solves the core tension: **How do we make colors readable without changing how they "feel"?**

**Full Papers:** 
* [Perceptually-Minimal Color Optimization for Web Accessibility: A Multi-Phase Constrained Approach - DOI: 10.48550/arXiv.2512.05067 ](https://doi.org/10.48550/arXiv.2512.05067)
* [Context-Adaptive Color Optimization for Web Accessibility: Balancing Perceptual Fidelity and Functional Requirements - DOI: 10.48550/arXiv.2512.07623](https://doi.org/10.48550/arXiv.2512.07623)

### The Methodology: Engineering Empathy into Math

To keep colors looking the same to the human eye, we stopped using standard computer math (sRGB) and shifted to **Oklab**. This is a color space designed to match how humans actually perceive color. It allows us to change how bright a color is without accidentally shifting its hue (e.g., turning a blue into a purple).

#### 1. The Multi-Phase Approach
We defined the "perfect fix" as the smallest possible change needed to satisfy the contrast rules. We measure this "visual difference" using **$\Delta E_{2000}$**{% include sidenote.html id="2" content="$\Delta E_{2000}$ (Delta E 2000) is a mathematical formula used to calculate the difference between two colors. Unlike simple math that just looks at numbers, this version is 'perceptually uniform'—it is weighted to match the specific quirks of how the human eye perceives shifts in color, making it the industry standard for measuring if a change is actually noticeable to a person." %}, which is a specialized formula that accounts for the nuances of human vision better than simple distance math.

The goal is to find a new color ($C_{new}$) that satisfies:

$\min \Delta E_{2000}(C_{orig}, C_{new})$

$\text{subject to } \text{Contrast}(C_{new}, \text{Background}) \geq \text{Target}$

By focusing only on necessary changes to lightness while locking the hue, we produce shifts that are often invisible to the casual observer but perfectly readable for accessibility.



#### 2. Context-Adaptive Refinement (The Multi-Mode Strategy)
Our initial research showed that a single "strict" rule didn't work for everyone. A strict limit on how much a color could change reached only about 70% success. To fix this, we introduced a flexible strategy:

* **Mode 1 (Recursive Optimization):** Instead of one big jump, the system makes tiny, repeated adjustments. This reached **93.68% success** on all reasonable color pairs and **100% success** overall across all pairs. Even when the change was larger, the color still felt "correct" because the hue never drifted.
* **Mode 2 (Relaxed Fallback):** For impossible cases (like dark grey on black), the system prioritizes readability over brand fidelity to ensure the user can actually read the content, reaching **98.73% total success**.



---

### Key Takeaways

#### I. The Implementation (cm-colors)
This isn't just theory. The math is live and usable in the **cm-colors** Python library. It gives developers a "surgical" way to fix colors without ruining their UI.
```python
from cm_colors import ColorPair

# 1. Define the problem
pair = ColorPair("#777777", "#ffffff")

# 2. Get the solution
fixed_color, success = pair.make_readable()

print(fixed_color)
# Output: #757575 (Readable!)
```
* **Documentation:** [cm-colors.readthedocs.io](https://cm-colors.readthedocs.io/)
* **Source Code:** [github.com/comfort-mode-toolkit/cm-colors](https://github.com/comfort-mode-toolkit/cm-colors)

#### II. The "Developer Experience" Proof
The real-world validation of this research came from the download numbers. When we shifted from a rigid "strict" tool to this **Context-Adaptive** version (v0.5.0), the library saw a surge to **800+ monthly downloads**.

By introducing flexibility, we saw an almost universal success in solving violations. This confirms a core lab thesis: **Accessibility succeeds when the tools respect the developer's constraints.** When we made the tool easier to use and less "punishing" to design, developers actually started using it.

### Conclusion

Accessibility isn't a design compromise; it's an engineering problem of **Minimal Necessary Intervention**. By using better math ($\Delta E_{2000}$) and better empathy (Adaptive Modes), we can protect both brand integrity and human dignity.

---

**Status:** `Completed`  
**Full Papers:** 
* [Perceptually-Minimal Color Optimization for Web Accessibility: A Multi-Phase Constrained Approach - DOI: 10.48550/arXiv.2512.05067 ](https://doi.org/10.48550/arXiv.2512.05067)
* [Context-Adaptive Color Optimization for Web Accessibility: Balancing Perceptual Fidelity and Functional Requirements - DOI: 10.48550/arXiv.2512.07623](https://doi.org/10.48550/arXiv.2512.07623)

---
*My deepest gratitude to Mr. Krishna, whose constancy forms the foundation upon which all my work, including this, quietly rests. Salutations to the Goddess who dwells in all beings in the form of intelligence. I bow to her again and again.*