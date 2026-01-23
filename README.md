# PARTHI GADGEST

A modern, responsive, mobile-first gadget review website.

## Features
- **Homepage**: Trending mobiles, latest reviews, and budget picks.
- **Detailed Reviews**: Specs, Pros/Cons, Ratings, and Buy links.
- **Comparison Tool**: Compare devices side-by-side.
- **Categories**: Filter by Mobiles, Laptops, Audio, etc.
- **Dark/Light Mode**: Fully supported with a toggle.
- **Responsive**: Optimized for Mobile, Tablet, and Desktop.

## Project Structure
- `index.html`: Main landing page.
- `pages/`: Contains Review, Compare, Category, and Blog pages.
- `css/`: Styling (modern variables, flexbox/grid).
- `js/`: Logic and Mock Data.
  - `data.js`: Acts as the local database. Edit this file to add new products.

## How to Run
Simply open `index.html` in any modern web browser. No installation required.

## Backend Integration
The project is "Backend Ready". 
1. The data is currently stored in `js/data.js` as a JSON-like structure.
2. To connect a real backend:
   - Create an API that returns JSON matching the structure in `data.js`.
   - Update `home.js`, `review.js`, etc., to `fetch()` data from your API instead of using the global `products` variable.
