---
title: "Perceptual Scaling vs. Linear Systems in UI"
layout: experiment
date: 2025-12-28
math: true
tags: [web-a11y, psychophysics, ux-design, human-computer-interaction]
---

### The Thesis: Breaking the Linear Grid

In modern UI design, we almost exclusively use linear scaling (e.g., an 8px grid system). While mathematically clean for developers, this approach ignores a fundamental law of human biology: **we do not perceive physical stimuli linearly.** Whether it is weight, brightness, or the distance between two elements on a screen, our brains process changes based on proportional differences rather than absolute values. In this experiment, I explore shifting from a "Mathematical Grid" to a "Perceptual Grid" by applying psychophysical laws to CSS spacing variables.

---

### The Mathematical Framework

To move beyond simple multipliers (like `value * 1.1`), I applied a combination of **Weber’s Law** and **Stevens’ Power Law** to create a context-aware scaling formula. 

#### 1. Weber’s Law & The Just Noticeable Difference (JND)
Weber’s Law states that the change in a stimulus that will be just noticeable is a constant ratio of the original stimulus:
$$\Delta I / I = k$$
Where $I$ is the initial intensity and $k$ is the Weber fraction. In UI terms, this means adding 4px to a 4px gap is a 100% increase (highly noticeable), but adding 4px to a 64px gap is only a 6% increase (likely imperceptible).

#### 2. The Scaling Formula
For this experiment, I utilized a **Sigmoid-weighted scaling function** that adjusts the growth rate based on the "Context" of the spacing (e.g., padding vs. margin). The core logic follows:

$S(v) = v + (v \cdot k \cdot W_{visual} \cdot T_{touch})$

Where:
* $v$ is the original CSS value.
* $k$ is the Weber fraction ($0.15$ for general padding).
* $W_{visual}$ is the visual weight (how much the change affects hierarchy).
* $T_{touch}$ is the touch criticality (providing a "boost" for accessibility floors).



---

### The Experiment: CM-Spacing vs. Linear Control


I ran a comparison between two automated scaling methods on a standardized layout:

1.  **Linear Scaling (Control):** A flat $1.1x$ multiplier.
2.  **Psychophysical Scaling (Experimental):** My "CM-Spacing" ([Comfort Mode](https://lalithaar.github.io/Interdisciplinary-Systems-Research-Lab/notes/Defining-Care-and-Comfort-in-HCI) Spacing {% include sidenote.html id="1" content="See my notes on how I define 'comfort' in my other notes for more info" %})  algorithm that applies the formula above while respecting **Perceptual Ceilings** (points where further increases provide diminishing returns).

#### Data Observations

| Context | Original | Psychophysical (CM) | Linear (1.1x) | Observation |
| :--- | :--- | :--- | :--- | :--- |
| **Padding-XS** | 4px | **8px** | 4.4px | CM recognizes 4px is below the accessibility floor and boosts it. |
| **Spacing-MD** | 16px | **16.8px** | 17.6px | CM is more conservative to preserve visual density. |
| **Spacing-XXL**| 48px | **50.4px** | 52.8px | CM slows down as it approaches the "Perceptual Ceiling." |



---

### Why "Perceptual Comfort" Matters

The linear approach (the control) often leads to **"Layout Bloat"**—where large sections become cavernous and small elements remain cramped. 

By using a psychophysical approach, we create a **Comfort Curve**. The algorithm acts as a "perceptual stabilizer":
* It protects the **Accessibility Floor** (ensuring small padding becomes large enough for touch targets).
* It respects the **Perceptual Ceiling** (preventing large margins from wasting screen real estate).

This ensures that the digital environment feels "natural" to the human eye, mirroring the way we perceive depth and spacing in the physical world.

---

### Research Status

**Status:** `Completed Theoretical Experiment`  
**Methodology:** Comparative modeling of CSS variable sets using Weber-Fechner and Stevens' Sigmoid functions.  
**Current Gap:** Determining the precise Weber fraction ($k$) that accounts for varying screen pixel densities (PPI).

---
*My deepest gratitude to Mr. Krishna, whose constancy forms the foundation upon which all my work, including this, quietly rests. Salutations to the Goddess who dwells in all beings in the form of intelligence. I bow to her again and again.*