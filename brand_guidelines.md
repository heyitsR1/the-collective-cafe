# The Collective Cafe - Brand Guidelines

This document serves as the single source of truth for design tokens, typography, colors, and layout strategies for the project. Future AI agents must strictly adhere to these values to ensure a 1:1 match with the reference mockups (`desktop-1.png` and `mobile-2.png`).

## 1. Color Palette

* **Primary Background (Kraft Paper):** `#EADDC6` 
  * Usage: Global page background. Must be combined with an SVG noise texture overlay (`opacity: 0.05`, `mix-blend-mode: multiply`) to simulate physical paper texture.
* **Secondary Background (Sage Muted Green):** `#9AAB93`
  * Usage: Large block sections separating content (e.g., Philosophy section), wavy blob footers.
* **Text Primary (Espresso Brown):** `#2D1E11`
  * Usage: Headings, body text, nav links.
* **Hero Overlay Text (Pure White):** `#FFFFFF`
  * Usage: Text overlaid directly onto the dark green wall inside the hero photograph.
* **CTA Button (Terracotta/Clay):** `#C55C48`
  * Usage: Primary "Discover Our Blends" buttons.
* **Polaroid Shadow (Dark Brown):** `#775742`
  * Usage: Offset `div` acting as a shadow/backing block underneath polaroid photos.
* **Masking Tape (Beige):** `#E2D9CD`
  * Usage: Small rotated rectangles overlaying polaroid photos acting as tape.

## 2. Typography

1. **Headings & Logo (`Playfair Display`, Serif)**
   * Used for `h1`, `h2`, `h3`, and the "collective" logotype. Managed via Next.js `next/font/google`.
2. **Body Text (`Inter`, Sans-Serif)**
   * Used for paragraphs, buttons, navigation links.
3. **Handwritten Captions (`Caveat`)**
   * Used strictly for the small custom captions underneath polaroid photos in the "A Curated Menu" section.

## 3. Asset Dictionary
Exactly reference these paths in Next.js `<Image>` `src` properties. Do not hallucinate external image links.

**Brand Assets**
- Logo: `/assets/brand/cafe_logo.png`
- Illustrations: `/assets/brand/coffee_leaf_illustration.png`

**Photography**
- Hero Background Image: `/assets/cafe_pictures/cafe_inside.png`
- Philosophy Section Image: `/assets/cafe_pictures/cafe_outside_refined.png`

**Menu Items**
- Iced Matcha: `/assets/food_pictures/iced_matcha.png`
- Hibiscus Refresher: `/assets/food_pictures/hibiscus_refresher.png`
- Chocolate Buttercups: `/assets/food_pictures/chocolate_buttercups.png`
- Bananna Bread/Cake: `/assets/food_pictures/cake_drink.png`
- Awake Tea: `/assets/menu_picture/1.png`
- Chocolate Pistachios: `/assets/menu_picture/2.png`

## 4. Layout Rules
- **No Separate Boxes for Hero Text**: The hero text MUST float via `position: absolute` directly over the dark green painted wall existing natively inside `cafe_inside.png`. 
- **Scrapbook Layers**: Use raw CSS rotations (`transform: rotate(-2deg)`, `rotate(3deg)`) heavily on `.polaroid` elements to make photos and tapes look naturally thrown together.
- **Mix Blend Mode**: All floating illustrations and the logo must use `mix-blend-mode: multiply` against the `#EADDC6` background.
