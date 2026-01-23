# Implementation Plan - PARTHI GADGEST

## Goal
Create a modern, responsive Mobile Phones & Gadgets Review website using HTML, CSS, and JavaScript. The site will feature a premium design, dark/light mode, detailed reviews, gadget categories, and a comparison tool.

## Tech Stack
- **Frontend**: HTML5, CSS3 (Vanilla, Modern), JavaScript (ES6+)
- **Storage**: JSON (Mock data in JS for now, structure ready for Backend API replacement)
- **Styling**: CSS Variables, Flexbox, Grid, Glassmorphism effects

## File Structure
```
/
├── index.html              # Homepage
├── css/
│   ├── style.css           # Global styles and variables
│   ├── home.css            # Homepage specific styles
│   ├── review.css          # Review page styles
│   └── components.css      # Reusable components (Cards, Navbar, Footer)
├── js/
│   ├── main.js             # Global logic (Theme, Navbar)
│   ├── data.js             # Mock database (Products, Reviews)
│   ├── home.js             # Homepage logic (Trending, Latest)
│   ├── review.js           # Review page rendering
│   └── compare.js          # Comparison tool logic
├── pages/
│   ├── review.html         # Template for single product review (uses URL params)
│   ├── compare.html        # Comparison tool page
│   ├── categories.html     # Category listing
│   └── blog.html           # Blog section
└── assets/
    └── images/             # Placeholders
```

## Step-by-Step Implementation

### Phase 1: Foundation & Design System
1.  **Setup**: Create directory structure (`css`, `js`, `pages`, `assets`).
2.  **Global Styles (`style.css`)**: Define CSS variables for colors (Dark/Light mode), typography, utilities.
3.  **Layout**: Create the Navbar and Footer in `index.html`.

### Phase 2: Homepage Development
1.  **Hero Section**: Feature a top trending phone.
2.  **Trends**: Grid of "Trending Mobiles".
3.  **Latest Reviews**: List of recent gadget reviews.
4.  **Budget Sections**: Sections for "Under 10k", "Under 20k".

### Phase 3: Data & Logic
1.  **Mock Data (`data.js`)**: Create a robust JS object with phones, specs, prices, and images.
2.  **Dynamic Rendering**: Write `home.js` to populate the homepage from `data.js`.

### Phase 4: Review & Comparison Pages
1.  **Review Page**: `pages/review.html` that reads a product ID from URL query params and renders details.
2.  **Comparison**: `pages/compare.html` that allows selecting 2 products and shows a side-by-side table.

### Phase 5: Polish
1.  **Responsive Check**: Ensure mobile-first execution.
2.  **Dark Mode**: Verify toggle functionality.
3.  **Animations**: Add hover effects and smooth transitions.
