# Lab Journal

A Jekyll theme for scientific research logging with accessibility, Tufte-style sidenotes, and a refined lab notebook aesthetic.

## Features

- **Tufte-Style Sidenotes**: Margin notes on desktop, inline on mobile
- **Math Rendering**: KaTeX integration for equations and formulas
- **Accessibility First**: WCAG 2.1 AA compliant with keyboard navigation
- **Research Collections**: Separate collections for experiments and field notes
- **Responsive Design**: Mobile-first approach with elegant typography
- **Tag System**: Organize and filter research by topic
- **Dark Mode**: Automatic dark mode support based on system preferences

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "lab-journal"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: lab-journal
```

And then execute:

```bash
bundle install
```

Or install it yourself as:

```bash
gem install lab-journal
```

## Configuration

### Basic Setup

In your `_config.yml`, configure the theme:

```yaml
title: Your Research Lab
description: Public research and experimentation journal
author: Your Name

# Theme settings
sidenotes: true
math_rendering: true
font_headings: "Crimson Pro"
font_body: "Lora"

# Accessibility
skip_to_content: true
```

### Collections

The theme uses Jekyll collections for content organization:

```yaml
collections:
  experiments:
    output: true
    permalink: /experiments/:title/
  field_notes:
    output: true
    permalink: /notes/:title/
```

## Usage

### Creating Experiments

Create files in `_experiments/` directory:

```markdown
---
layout: experiment
title: "Your Experiment Title"
date: 2024-01-15
tags: [machine-learning, optimization]
status: ongoing
math: true
---

## Hypothesis

Your hypothesis here...

## Methodology

Your methods...

## Results

Your findings...
```

#### Experiment Frontmatter Options

- `layout`: Must be `experiment`
- `title`: Experiment title
- `date`: Publication date
- `tags`: Array of tags for organization
- `status`: `ongoing`, `completed`, `planned`, or `failed`
- `math`: Set to `true` to enable KaTeX rendering
- `full_width`: Set to `true` to disable sidenotes and use full width

### Creating Field Notes

Create files in `_field_notes/` directory:

```markdown
---
layout: field-note
title: "Quick Observation"
date: 2024-01-15T14:30:00
tags: [debugging, neural-networks]
related_experiment: experiment-slug
---

Your quick observation or note here...
```

#### Field Note Frontmatter Options

- `layout`: Must be `field-note`
- `title`: Note title
- `date`: Timestamp (can include time)
- `tags`: Array of tags
- `related_experiment`: Slug of related experiment (optional)

### Adding Sidenotes

Use the sidenote include within your content:

```liquid
This is the main text.{% include sidenote.html id="1" content="This appears in the margin." %}
```

**Important**: 
- Each sidenote needs a unique `id` per page
- Sidenotes are automatically numbered
- On desktop (>768px): appear in right margin
- On mobile (≤768px): appear inline when tapped

### Math Rendering

Enable math on individual pages with `math: true` frontmatter, then use:

**Inline math**: `$E = mc^2$`

**Display math**:
```
$$
\int_0^1 x^2 dx = \frac{1}{3}
$$
```

### Full-Width Layout

For pages without sidenotes, use:

```yaml
---
layout: default
full_width: true
---
```

This expands content to 90% width instead of the sidenote-constrained 55%.

### Tags

Tags automatically appear on experiment and field note pages. View all tags at `/tags/`.

## Customization

### Typography

The theme uses:
- **Headings**: Crimson Pro (serif, display font)
- **Body**: Lora (serif, readable)
- **Code**: JetBrains Mono (monospace)

To change fonts, modify `_config.yml`:

```yaml
font_headings: "Your Heading Font"
font_body: "Your Body Font"
```

Then update the Google Fonts import in `_includes/head.html`.

### Colors

Modify CSS variables in `_sass/_base.scss`:

```scss
:root {
  --color-bg: #F5F5F0;        /* Background */
  --color-text: #2C2C2C;      /* Text */
  --color-accent: #2C6E8F;    /* Accent color */
  --color-border: #D4D4D4;    /* Borders */
  --color-code-bg: #F0F0EB;   /* Code background */
}
```

### Type Scale

The theme uses a modular scale (1.25 ratio). Adjust in `_sass/_typography.scss`:

```scss
$base-font-size: 18px;
$scale-ratio: 1.25; // Major third
```

## Accessibility Features

The theme is designed for WCAG 2.1 AA compliance:

- **Keyboard Navigation**: All interactive elements accessible via Tab
- **Focus Indicators**: Clear 2px outlines on focused elements
- **Skip Links**: "Skip to main content" for screen readers
- **ARIA Attributes**: Proper roles and labels throughout
- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Semantic HTML**: Proper heading hierarchy and landmark regions
- **Responsive Touch Targets**: Minimum 44x44px on mobile

### Testing Color Contrast

Verify theme colors meet WCAG standards:

```bash
pip install color-contrast-linter
cc-lint init
# Edit .color_pairs.yml with your colors
cc-lint lint
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- iOS Safari (latest)
- Chrome Mobile (latest)

## Development

To test the theme locally:

```bash
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000` to preview.

## Directory Structure

```
lab-journal/
├── _layouts/
│   ├── default.html       # Base layout
│   ├── home.html          # Homepage
│   ├── experiment.html    # Experiment layout
│   └── field-note.html    # Field note layout
├── _includes/
│   ├── head.html          # HTML head
│   ├── header.html        # Site header
│   ├── footer.html        # Site footer
│   ├── sidenote.html      # Sidenote component
│   └── math.html          # KaTeX integration
├── _sass/
│   ├── _base.scss         # Base styles
│   ├── _typography.scss   # Typography
│   ├── _layout.scss       # Layout system
│   ├── _sidenotes.scss    # Sidenote styles
│   └── _accessibility.scss # Accessibility
├── assets/
│   ├── css/
│   │   └── main.scss      # Entry point
│   └── js/
│       └── sidenotes.js   # Sidenote enhancement
└── _config.yml            # Configuration
```

## Design Philosophy

Lab Journal prioritizes researchers who think in experiments and observations. Every design decision supports scientific workflows:

- **Hypothesis documentation** with structured sections
- **Iterative refinement** through field notes
- **Cross-referencing** with related experiments
- **Mathematical notation** for formulas and equations
- **Margin notes** for citations and asides

The aesthetic feels like a well-maintained lab notebook—professional, organized, and inviting for long-form reading.

## Example Sites

See the theme in action:
- Browse `index.html` for the homepage
- Check `_experiments/` for experiment examples
- Review `_field_notes/` for field note samples
- Visit `/tags/` for tag organization

## Contributing

Bug reports and pull requests are welcome on GitHub. This project is intended to be a safe, welcoming space for collaboration.

## License

The theme is available as open source under the terms of the [MIT License](LICENSE.txt).

## Credits

- Typography inspired by [Edward Tufte's books](https://www.edwardtufte.com/)
- Sidenote implementation based on [Tufte CSS](https://edwardtufte.github.io/tufte-css/)
- Math rendering powered by [KaTeX](https://katex.org/)
- Built with [Jekyll](https://jekyllrb.com/)
