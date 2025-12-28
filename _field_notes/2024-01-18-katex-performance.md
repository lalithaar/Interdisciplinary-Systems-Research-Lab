---
layout: field-note
title: "KaTeX Rendering Performance Note"
date: 2024-01-18T16:45:00
tags: [documentation, performance]
math: true
---

Testing math rendering performance with complex equations:

Inline math works well: $E = mc^2$

Display math also renders correctly:

$$
\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_0}
$$

More complex example:

$$
\frac{\partial u}{\partial t} = h^2 \left( \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2} \right)
$$

**Performance**: Page load time increased by ~150ms with KaTeX. Acceptable for documentation purposes.

**Recommendation**: Only enable math rendering on pages that need it using `math: true` frontmatter.
