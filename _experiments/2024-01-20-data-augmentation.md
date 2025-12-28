---
layout: experiment
title: "Data Augmentation Impact on Small Datasets"
date: 2024-01-20
tags: [machine-learning, data-augmentation, transfer-learning]
status: completed
math: true
---

## Hypothesis

Aggressive data augmentation combined with transfer learning can achieve competitive performance on small datasets (< 1000 samples per class) compared to models trained on full datasets.

## Methodology

### Dataset

CIFAR-10 subset: 500 training samples per class (5,000 total), full test set (10,000 samples).

### Augmentation Strategy

- Random horizontal flip (p=0.5)
- Random rotation (±15°)
- Color jitter (brightness, contrast, saturation)
- Random erasing{% include sidenote.html id="1" content="Random erasing proved particularly effective, improving accuracy by 2.3% alone." %}

### Model

MobileNetV2 pretrained on ImageNet, fine-tuned with frozen early layers.

## Results

The augmented model achieved **82.4% test accuracy**, compared to **68.1%** without augmentation—a gain of **14.3 percentage points**.

### Key Findings

1. Augmentation diversity matters more than intensity
2. Transfer learning is essential for small datasets
3. Early stopping at epoch 25 prevents overfitting

## Conclusions

Data augmentation is a critical tool for small dataset scenarios. The combination with transfer learning enables practical deployment without extensive data collection.

**Recommendation**: For datasets < 1000 samples/class, always combine aggressive augmentation with pretrained models.
