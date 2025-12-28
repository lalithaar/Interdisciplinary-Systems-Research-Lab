---
layout: field-note
title: "Dataset Class Imbalance Discovery"
date: 2024-01-16T14:15:00
tags: [data-quality, machine-learning]
---

While analyzing training metrics, discovered significant class imbalance in the validation set:

- Class 0: 1,247 samples
- Class 1: 892 samples  
- Class 2: 1,453 samples
- Class 3: 408 samples ⚠️

Class 3 is severely underrepresented! This explains the poor per-class accuracy we've been seeing.

## Next Steps

Need to implement stratified sampling or weighted loss function. Will test both approaches and document results in a full experiment.
