# Hero Section Redesign

**Date:** April 20, 2026
**Status:** Approved
**Designer:** User + Claude Code

## Context

The Collective Cafe homepage hero section currently displays a beautiful cafe interior image with overlaid text and a CTA button. User feedback identified two key issues:
1. The headline is too wordy and feels cramped (current: "Welcome to The Collective. Your cozy retreat for artisanal coffee and community.")
2. Readability issues with white text against the photo background

## Design Goals

- **Minimal messaging**: Let the brand name and image do the talking
- **Improved readability**: Ensure white text is crisp and clear against the green wall photo
- **Visual impact**: Create a confident, welcoming first impression
- **Maintain brand**: Keep the warm, artisanal cafe personality

## Design Solution

### Typography

**Headline**
- Font: Playfair Display (serif, already loaded)
- Text: "Your Cozy Coffee Retreat"
- Desktop size: 3.75rem (60px)
- Mobile size: 2.5rem (40px)
- Weight: 700 (Bold)
- Line height: 1.1
- Letter spacing: -0.02em
- Color: #FFFFFF (pure white)

**Button Text**
- Font: Inter (sans-serif)
- Text: "Discover Our Blends"
- Size: 1rem (16px)
- Weight: 600 (Semi-bold)

### Layout & Spacing

**Desktop (>640px)**
- Hero maintains full-width image layout
- Text positioned absolutely over the cafe interior photo
- Text aligned right, 60-80px from right edge
- Vertically centered on the image
- Headline bottom margin: 32px (spacing between headline and button)

**Mobile (≤640px)**
- Text drops into separate green box below image (current behavior preserved)
- Text centered in green box
- Box padding: 40px vertical, 24px horizontal
- Headline bottom margin: 24px (reduced for tighter mobile spacing)

### Visual Effects

**Text Shadow (Headline)**
```css
text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
```
- Creates soft dark halo for readability
- Strong enough for contrast without being harsh
- Provides depth against the green wall

**No overlay or scrim** - Text shadow provides sufficient contrast while keeping the image pristine.

### Button Styling

**Default State**
- Background: #C55C48 (terracotta, from brand guidelines)
- Text color: #FFFFFF
- Border: none
- Padding: 18px horizontal, 14px vertical
- Border radius: 8px
- Box shadow: `0 4px 16px rgba(197, 92, 72, 0.35)`
- Cursor: pointer

**Hover State**
- Background: #B54A38 (darker terracotta)
- Transform: `scale(1.02)`
- Box shadow: `0 6px 20px rgba(197, 92, 72, 0.45)`
- Transition: `all 0.2s ease`

**Active/Click State**
- Transform: `scale(0.98)`
- Box shadow: `0 2px 8px rgba(197, 92, 72, 0.3)`

## Implementation Notes

**Files to modify:**
- `app/page.tsx` - Update Hero component JSX and text content
- `app/globals.css` - Update `.hero h1` and `.btn-cta` styles

**Responsive breakpoint:**
- Use existing 640px breakpoint for mobile behavior

**Typography:**
- Playfair Display and Inter are already loaded via `app/layout.tsx`
- No additional font imports needed

**Existing elements to preserve:**
- Hero image (`/assets/cafe_pictures/cafe_inside.png`)
- Current image positioning and sizing
- Mobile green box behavior (just apply new text treatment)

## Acceptance Criteria

- [ ] Headline reads "Your Cozy Coffee Retreat" (7 words vs. previous 15)
- [ ] Text shadow provides clear readability against cafe photo
- [ ] Button uses terracotta color (#C55C48) with proper hover states
- [ ] Desktop layout: text floats on right side of image
- [ ] Mobile layout: text in green box below image, centered
- [ ] Typography sizes match spec (3.75rem desktop, 2.5rem mobile)
- [ ] Button has tactile hover/active states with smooth transitions
- [ ] All spacing values match specification
- [ ] No visual regressions on other hero elements
- [ ] Build passes cleanly (`npm run dev` and `npm run build`)

## Design Rationale

**Why "Your Cozy Coffee Retreat"?**
- Emphasizes the experience (cozy retreat) over just the product
- 7 words vs. 15 - significantly more scannable
- Maintains warmth and personality
- Positions The Collective as a destination, not just a cafe

**Why text shadow over overlay/scrim?**
- Keeps the beautiful cafe image fully visible
- Maintains the organic, warm feel
- Simpler implementation
- Better performance (no additional DOM elements)

**Why single-line layout?**
- Clean, professional, conventional
- Works beautifully on both desktop and mobile
- Respects the minimal design direction
- Doesn't overwhelm the intimate cafe vibe

## Related Files

- Brand guidelines: `/brand_guidelines.md`
- Current implementation: `/app/page.tsx` (lines 89-110)
- Styles: `/app/globals.css`
- Hero image: `/public/assets/cafe_pictures/cafe_inside.png`
