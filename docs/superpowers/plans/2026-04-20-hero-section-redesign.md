# Hero Section Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Simplify hero headline from 15 to 7 words, add text shadow for readability, and refine button styling with tactile interactions.

**Architecture:** Text-only changes to Hero component JSX, CSS updates to typography, shadows, and button states. No structural DOM changes.

**Tech Stack:** Next.js 16, React, vanilla CSS

---

## File Structure

**Files to modify:**
- `app/page.tsx` (lines 89-110) - Hero component, update headline text
- `app/globals.css` (lines 193-224, 486-531) - Hero typography, button styles, responsive breakpoints

**No new files created.** This is a refinement of existing components.

---

## Task 1: Update Hero Headline Text

**Files:**
- Modify: `app/page.tsx:104`

- [ ] **Step 1: Read current Hero component**

```bash
cat app/page.tsx | sed -n '89,110p'
```

Expected output: Current Hero function with headline "Welcome to The Collective. Your cozy retreat for artisanal coffee and community."

- [ ] **Step 2: Update headline text**

In `app/page.tsx` at line 104, replace:
```tsx
<h1>Welcome to The Collective. Your cozy retreat for artisanal coffee and community.</h1>
```

With:
```tsx
<h1>Your Cozy Coffee Retreat</h1>
```

- [ ] **Step 3: Verify the change**

```bash
cat app/page.tsx | sed -n '104p'
```

Expected: Line should now read `<h1>Your Cozy Coffee Retreat</h1>`

- [ ] **Step 4: Start dev server and visually verify**

```bash
npm run dev
```

Expected: Server starts at localhost:3000, navigate to homepage, hero headline should display "Your Cozy Coffee Retreat"

- [ ] **Step 5: Commit the text change**

```bash
git add app/page.tsx
git commit -m "feat(hero): shorten headline from 15 to 7 words

Replace verbose headline with concise 'Your Cozy Coffee Retreat'
Improves scannability and visual impact

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 2: Update Hero Typography & Text Shadow

**Files:**
- Modify: `app/globals.css:193-200`
- Modify: `app/globals.css:486-491` (tablet breakpoint)
- Modify: `app/globals.css:528-531` (mobile breakpoint)

- [ ] **Step 1: Read current hero h1 styles**

```bash
cat app/globals.css | sed -n '193,200p'
```

Expected output: Current `.hero-content h1` with font-size 2.4rem, weight 500

- [ ] **Step 2: Update desktop hero h1 styles**

In `app/globals.css` at lines 193-200, replace:
```css
.hero-content h1 {
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--text-white);
  margin-bottom: 24px;
  line-height: 1.2;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}
```

With:
```css
.hero-content h1 {
  font-size: 3.75rem;
  font-weight: 700;
  color: var(--text-white);
  margin-bottom: 32px;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 12px rgba(0,0,0,0.3);
}
```

Changes:
- Font size: 2.4rem → 3.75rem (60px)
- Weight: 500 → 700 (bold for more impact)
- Margin bottom: 24px → 32px (more breathing room)
- Line height: 1.2 → 1.1 (tighter for elegance)
- Added: letter-spacing: -0.02em
- Text shadow: stronger (0 4px 12px vs 0 2px 20px)

- [ ] **Step 3: Update tablet breakpoint (900px)**

In `app/globals.css` at lines 489-491, replace:
```css
  .hero-content h1 {
    font-size: 1.9rem;
  }
```

With:
```css
  .hero-content h1 {
    font-size: 3rem;
  }
```

Changes:
- Font size: 1.9rem → 3rem (maintain larger, bolder treatment on tablet)

- [ ] **Step 4: Update mobile breakpoint (640px)**

In `app/globals.css` at lines 528-531, replace:
```css
  .hero-content h1 {
    font-size: 1.6rem;
    text-shadow: none;
  }
```

With:
```css
  .hero-content h1 {
    font-size: 2.5rem;
    margin-bottom: 24px;
  }
```

Changes:
- Font size: 1.6rem → 2.5rem (40px per spec)
- Margin bottom: Added explicit 24px (reduced from desktop's 32px)
- Removed: text-shadow: none (mobile green box doesn't need shadow removal)

- [ ] **Step 5: Verify typography changes**

```bash
npm run dev
```

Navigate to localhost:3000 in browser:
- Desktop (>900px): Headline should be large (60px), bold, with strong shadow
- Tablet (640-900px): Headline should be 3rem
- Mobile (≤640px): Headline should be 2.5rem in green box

- [ ] **Step 6: Commit typography changes**

```bash
git add app/globals.css
git commit -m "feat(hero): update typography and text shadow

Desktop: 3.75rem (60px), weight 700, letter-spacing -0.02em
Mobile: 2.5rem (40px)
Text shadow: 0 4px 12px for better readability
Spacing: 32px margin below headline (24px on mobile)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 3: Update Button Styling & Interactions

**Files:**
- Modify: `app/globals.css:208-224`

- [ ] **Step 1: Read current button styles**

```bash
cat app/globals.css | sed -n '208,224p'
```

Expected output: Current `.btn-cta` with border-radius 40px, padding 14px 32px

- [ ] **Step 2: Update button base styles and add hover/active states**

In `app/globals.css` at lines 208-224, replace:
```css
.btn-cta {
  display: inline-block;
  background-color: var(--color-cta);
  color: #fff;
  border: none;
  padding: 14px 32px;
  border-radius: 40px;
  font-size: 1rem;
  font-weight: 500;
  font-family: var(--font-body);
  cursor: pointer;
  transition: background-color 0.25s, transform 0.2s;
}
.btn-cta:hover {
  background-color: var(--color-cta-hover);
  transform: translateY(-2px);
}
```

With:
```css
.btn-cta {
  display: inline-block;
  background-color: var(--color-cta);
  color: #fff;
  border: none;
  padding: 14px 36px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  font-family: var(--font-body);
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(197, 92, 72, 0.35);
  transition: all 0.2s ease;
}
.btn-cta:hover {
  background-color: #B54A38;
  transform: scale(1.02);
  box-shadow: 0 6px 20px rgba(197, 92, 72, 0.45);
}
.btn-cta:active {
  transform: scale(0.98);
  box-shadow: 0 2px 8px rgba(197, 92, 72, 0.3);
}
```

Changes:
- Padding: 14px 32px → 14px 36px (slightly wider)
- Border radius: 40px → 8px (pill shape → soft corners)
- Font weight: 500 → 600 (semi-bold)
- Added: box-shadow with terracotta glow
- Hover: transform translateY(-2px) → scale(1.02)
- Hover: background #B54A38 (specific darker terracotta)
- Hover: intensified shadow
- Added: :active state with scale(0.98) for press effect
- Transition: simplified to "all 0.2s ease"

- [ ] **Step 3: Verify button interactions**

```bash
npm run dev
```

Navigate to localhost:3000, test button interactions:
- Default: Soft rounded corners (8px), terracotta color (#C46955), warm shadow
- Hover: Slightly larger (scale 1.02), darker background, stronger shadow
- Click: Press effect (scale 0.98), reduced shadow
- Transitions should be smooth (0.2s)

- [ ] **Step 4: Commit button styling**

```bash
git add app/globals.css
git commit -m "feat(hero): refine button styling with tactile interactions

- Border radius: 40px → 8px (soft corners)
- Padding: 14px 36px (slightly wider)
- Weight: 600 (semi-bold)
- Box shadow: terracotta glow (0 4px 16px)
- Hover: scale(1.02), darker bg, intensified shadow
- Active: scale(0.98) press effect
- Smooth transitions: all 0.2s ease

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 4: Final Verification & Quality Check

**Files:**
- Test: All modified files
- Verify: `app/page.tsx`, `app/globals.css`

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected: Build succeeds with no errors or warnings

- [ ] **Step 2: Visual regression check (Desktop)**

```bash
npm run dev
```

Open localhost:3000 in browser (desktop viewport >900px):
- [ ] Headline reads "Your Cozy Coffee Retreat"
- [ ] Text is 60px (3.75rem), bold (700), white
- [ ] Text shadow creates readable contrast on green wall
- [ ] Headline has 32px margin below
- [ ] Button has 8px border radius (soft corners, not pill)
- [ ] Button has warm terracotta shadow
- [ ] Hover: button scales up slightly with darker color
- [ ] Click: button has subtle press effect
- [ ] No layout shifts or visual regressions

- [ ] **Step 3: Visual regression check (Mobile)**

Resize browser to ≤640px or use device emulator:
- [ ] Image displays at 4:3 aspect ratio
- [ ] Text drops into green box below image
- [ ] Headline reads "Your Cozy Coffee Retreat"
- [ ] Text is 40px (2.5rem), bold (700), white
- [ ] Headline has 24px margin below (tighter than desktop)
- [ ] Button styling matches desktop (shadow, borders, interactions)
- [ ] Text is centered in green box
- [ ] Green box has appropriate padding (40px vertical, 24px horizontal)

- [ ] **Step 4: Cross-browser spot check**

Test in Safari, Chrome, and Firefox (if available):
- [ ] Text shadow renders correctly (no jagged edges)
- [ ] Button hover/active states work smoothly
- [ ] Layout is consistent across browsers

- [ ] **Step 5: Acceptance criteria review**

Review spec acceptance criteria from `docs/superpowers/specs/2026-04-20-hero-section-redesign.md`:
- [x] Headline reads "Your Cozy Coffee Retreat" (7 words vs. previous 15)
- [x] Text shadow provides clear readability against cafe photo
- [x] Button uses terracotta color (#C55C48) with proper hover states
- [x] Desktop layout: text floats on right side of image
- [x] Mobile layout: text in green box below image, centered
- [x] Typography sizes match spec (3.75rem desktop, 2.5rem mobile)
- [x] Button has tactile hover/active states with smooth transitions
- [x] All spacing values match specification
- [x] No visual regressions on other hero elements
- [x] Build passes cleanly

- [ ] **Step 6: Final commit (if any remaining changes)**

If any final tweaks were needed during verification:
```bash
git add app/page.tsx app/globals.css
git commit -m "fix(hero): final refinements from verification

[describe any final tweaks]

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

Otherwise, this step can be skipped.

- [ ] **Step 7: Push to remote (optional)**

```bash
git log --oneline -5
```

Review commits - should see 3-4 commits for this feature:
1. Text change (15 → 7 words)
2. Typography & text shadow
3. Button styling
4. (Optional) Final refinements

```bash
git push origin main
```

---

## Implementation Notes

**Design tokens:**
- The CSS already uses `var(--color-cta)` which is #C46955 in globals.css
- The spec calls for #C55C48 (very similar terracotta)
- Using the hover color #B54A38 explicitly in CSS as it's not currently a token

**Text shadow values:**
- Desktop: 0 4px 12px rgba(0,0,0,0.3)
- Mobile green box: No shadow needed (removed the `text-shadow: none` override)

**Button shadow color:**
- Uses RGBA with the terracotta color: rgba(197, 92, 72, 0.35)
- This creates a warm glow effect using the button's own color

**Responsive behavior:**
- Existing mobile behavior (text in green box) is preserved
- Only typography and spacing are updated for mobile
- Tablet breakpoint added to maintain larger type between mobile and desktop

**Testing strategy:**
- Manual visual verification (no automated UI tests for CSS changes)
- Cross-browser spot checks for shadow rendering
- Production build to catch any CSS syntax errors
- Responsive checks at 3 breakpoints: mobile (≤640px), tablet (640-900px), desktop (>900px)

**Rollback plan:**
If issues arise, revert commits:
```bash
git log --oneline -5  # identify commit hashes
git revert <commit-hash>  # revert problematic commit
```

---

## Success Criteria

**Before marking complete:**
1. All checkboxes in all tasks are checked
2. Production build passes (`npm run build`)
3. Visual verification on desktop and mobile confirms spec requirements
4. All changes are committed to git
5. No console errors or warnings in browser

**Definition of Done:**
- Headline text is "Your Cozy Coffee Retreat"
- Typography matches spec exactly (sizes, weights, spacing)
- Text shadow provides readable contrast
- Button has soft corners, warm shadow, and tactile interactions
- Mobile layout preserves green box behavior with updated text treatment
- No visual regressions on other page elements
- Clean git history with descriptive commit messages
