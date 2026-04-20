# Handoff: The Collective Cafe Website

## Project Location
`/Users/aarohan/college_stuff/serverless-computing-module/ai-slop-lfg`

## Tech Stack
- **Next.js 16 (App Router)** with Turbopack
- **Vanilla CSS** (no Tailwind)
- **Fonts**: `Playfair Display`, `Inter`, `Caveat` via `next/font/google`
- Build passes clean: `npx next build` ✅

---

## What Was Done (This Session)

Completely rewrote `app/page.tsx` and `app/globals.css` from scratch to fix the previous agent's broken implementation.

### ✅ What's Working Now
- **CSS text logo** — no more white-box PNG; matches the mockup's "the collective Cafe" style with an inline SVG mountain icon
- **Working anchor navigation** — nav links are proper `<a href="#section-id">` with smooth scrolling and section IDs (`#hero`, `#story`, `#menu`, `#find-us`)
- **Mobile hamburger menu** — full-screen overlay nav on mobile (≤640px), CSS-only desktop nav
- **Hero image** — `cafe_inside.png` displayed edge-to-edge with text overlaid on the dark green wall (NO separate green box on desktop)
- **Philosophy section** — sage green bg with polaroid of `cafe_outside.jpeg`, brown offset shadow, leaf illustrations in corners with `mix-blend-mode: multiply`
- **Menu polaroids** — 4 food items with tape strips, handwritten Caveat captions, alternating CSS rotations, hover scale
- **Reviews section** — 3 hardcoded Google-style testimonials in a responsive grid
- **Footer** — gentle SVG wave → sage green bg, contact info + properly embedded Google Map that finds "The Collective Cafe" in Kathmandu
- **Z-index fixed** — noise overlay no longer at 9999 blocking clicks
- **Removed** the broken `app/preview/` directory
- **Production build passes** cleanly

### ⚠️ What Still Needs Fixing / Polishing
1. **Hero text on mobile** — currently drops to a separate green block below the image (correct behavior for small screens, but could try a semi-transparent overlay instead to feel more integrated)
2. **Philosophy polaroid on mobile** — browser audit reported it renders small/broken at narrow widths; the `max-width: 260px` constraint may be too aggressive
3. **Hydration warning** — `new Date().getFullYear()` in a Server Component causes mismatch; the page is `'use client'` so it should be fine, but worth checking
4. **Only 4 menu items** — mockup shows 6-7; need 2-3 more food images generated (Salted Caramel Matcha, Kombucha Mojito from the real menu)
5. **Menu grid on mobile** — 2-column grid at 640px may be too tight; test on a real device
6. **No scroll animations** — mockup has an organic feel; consider `framer-motion` fade-ins for sections
7. **Leaf illustrations hidden on mobile** — intentionally via `display: none` to avoid overflow; could add smaller ones back

---

## Reference Files
| File | Purpose |
|------|---------|
| [desktop-1.png](file:///Users/aarohan/college_stuff/serverless-computing-module/ai-slop-lfg/public/assets/visual_mockup/desktop-1.png) | Desktop design reference |
| [mobile-2.png](file:///Users/aarohan/college_stuff/serverless-computing-module/ai-slop-lfg/public/assets/visual_mockup/mobile-2.png) | Mobile design reference |
| [brand_guidelines.md](file:///Users/aarohan/college_stuff/serverless-computing-module/ai-slop-lfg/brand_guidelines.md) | Color/font/asset tokens |
| [globals.css](file:///Users/aarohan/college_stuff/serverless-computing-module/ai-slop-lfg/app/globals.css) | All styles |
| [page.tsx](file:///Users/aarohan/college_stuff/serverless-computing-module/ai-slop-lfg/app/page.tsx) | Full single-page component |
| [layout.tsx](file:///Users/aarohan/college_stuff/serverless-computing-module/ai-slop-lfg/app/layout.tsx) | Font loading + metadata |

## Asset Inventory
```
public/assets/
├── brand/
│   ├── cafe_logo.png          # AI-generated (not used in current code, CSS text logo instead)
│   └── coffee_leaf_illustration.png  # Line art for corner decorations
├── cafe_pictures/
│   ├── cafe_inside.png        # Hero background (real photo)
│   ├── cafe_outside.jpeg      # Philosophy polaroid (real photo, user's favorite)
│   └── cafe_outside_refined.png  # AI-cleaned version (available but unused)
├── food_pictures/
│   ├── iced_matcha.png        # AI-generated
│   ├── hibiscus_refresher.png # AI-generated
│   ├── chocolate_buttercups.png # AI-generated
│   └── cake_drink.png         # AI-generated
├── menu_picture/
│   ├── 1.png                  # Photo of PHYSICAL MENU CARD (not a food image!)
│   └── 2.png                  # Chocolate pistachios photo
└── visual_mockup/
    ├── desktop-1.png          # THE design reference (desktop)
    └── mobile-2.png           # THE design reference (mobile)
```

## Color Palette (from CSS)
| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-cream` | `#EDE4D3` | Page background |
| `--bg-header` | `#F0E6D0` | Sticky header |
| `--bg-sage` | `#9AAC93` | Philosophy + footer sections |
| `--text-dark` | `#2D1E11` | Body text |
| `--color-cta` | `#C46955` | Buttons |
| `--shadow-brown` | `#6B4F3E` | Polaroid shadows |

## Instructions for Next Agent
1. **LOOK at the mockup images first** — `desktop-1.png` and `mobile-2.png` are the source of truth
2. **Run `npm run dev`** and open `localhost:3000` to see current state
3. Prioritize fixing the mobile polaroid rendering and generating 2 more food images
4. The `brand_guidelines.md` at project root has the full design system
5. Do NOT use the menu_picture/1.png as food — it's a photo of the printed menu card
