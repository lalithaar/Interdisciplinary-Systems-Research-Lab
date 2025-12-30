---
layout: experiment
title: "The Dataset Relay—Crowdsourcing Food Informatics Data"
date: 2025-12-30
tags: [food-informatics, datathon, india, open-science]
---

### The Data Void

The [Decaying Cycle](https://lalithaar.github.io/Interdisciplinary-Systems-Research-Lab/notes/The-Decaying-Cycle-Adaptive-Scoring-in-Food-Informatics/) needs a high-quality dataset of Indian packaged foods to even begin training. No such thing exists. Open Food Facts India has 10k+ entries, but coverage is spotty, ingredients unnormalized, nutrition tables incomplete. {% include sidenote.html id="1" content="Open Food Facts. (2024). *Open Food Facts India database reaches  [10K product milestone](https://blog.openfoodfacts.org/en/news/open-food-facts-india-database-reaches-10k-product-milestone*)." %}

Static scrapes hallucinate or miss the messy reality of labels. Manufacturers list "edible vegetable oil" without specifics. Sodium might be "0" or absent. No provenance tracking what data came from where.

---

### The Relay Hypothesis

What if we treat dataset-building as a **relay race**, not a solo sprint?

Single-track datathon on Kaggle. Teams submit two things:
1. **Clean dataset** following minimal required schema: `product_id`, `brand`, `product_name`, `ingredients_raw` + `ingredients_canonical`, core FSSAI nutrients per 100g (energy, protein, fat, carbs, sugars, sodium), `source_url`, `collection_date`, `ai_assisted_flags`.{% include sidenote.html id="3" content="Schema is hybrid: fixed core fields ensure everything merges cleanly, teams can add their own extra columns however they want. Open Food Facts. (2022). *[Taxonomies introduction](https://wiki.openfoodfacts.org/Global_taxonomies)*. " %}

2. **Research log notebook** documenting day-by-day: sources tried, standardization approaches, dead ends encountered, quality checks implemented.

Judging evaluates final submissions holistically—strategy transparency and data rigor carry highest weight. Top pipelines merge into one canonical dataset. All teams get co-authorship on the research paper documenting the merged dataset and collection methods.


---

### Why This Might Work

Teams learn real-world data wrangling: scraping messy labels, standardizing ingredient names, designing quality checks. Plus CV signals: named co-author on research paper + published dataset. No endorsers, prize committees, or complex logistics—just run and publish the merged output.

Learns from citizen science: simple capture tools + explicit validation loops scale better than pure automation. {% include sidenote.html id="4" content="[Engelhard, C. L., et al. (2023)](https://onlinelibrary.wiley.com/doi/10.1111/obr.13618). *Citizen science approaches to crowdsourcing food environment data: A scoping review of the literature*. Obesity Reviews." %} Forces provenance tracking per row, breaking opaque \"trust me\" datasets plaguing nutrition Kaggle sets. {% include sidenote.html id="5" content="[Batthula, V. (2025)](https://www.kaggle.com/datasets/batthulavinay/indian-food-nutrition). *Indian Food Nutritional Values Dataset*. " %}

One team might discover a stupid-simple trick (barcode lookup first? photo-OCR with custom heuristics?) that unlocks what solo research misses.

---

**Status:** `Datathon Design`  
**Next Steps:** Draft Kaggle competition page.

---
*My deepest gratitude to Mr. Krishna, whose constancy forms the foundation upon which all my work, including this, quietly rests. Salutations to the Goddess who dwells in all beings in the form of intelligence. I bow to her again and again.*
