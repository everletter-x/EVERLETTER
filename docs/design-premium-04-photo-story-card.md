# Design Specification: Premium 4 - Photo Story Card

## Overview
This document details the design specifications for the Premium 4 - Photo Story Card template, which presents a series of photos with individual captions that tell a story, culminating in a final personal message.

## Visual Design

### Layout & Structure
1. **Hero Introduction**
   - Brief opening statement setting the narrative context
   - Minimal height to quickly transition to photo content

2. **Photo Story Carousel/Grid**
   - Primary presentation method for photos with captions
   - Each photo-card contains: image, caption, optional subtle styling
   - Navigation indicators (dots or arrows) for carousel variant
   - Grid variant shows multiple photos with consistent sizing

3. **Final Wish Section**
   - Prominent display of closing personal message
   - Visually distinct from photo cards
   - Clear conclusion to the narrative journey

### Color Scheme (Premium Tier)
- Background: Warm white or theme-appropriate neutral
- Photo frames: Subtle border or shadow for separation
- Caption backgrounds: Semi-transparent overlays or solid bars
- Text: Dark gray for captions, theme accent for final wish highlight
- Navigation: Semi-transparent dots/bars that become opaque on hover/active

### Typography
- Hero text: Inviting, medium-bold
- Photo captions: Comfortable reading size, italic or regular for variety
- Final wish: Larger, more expressive typography
- Caption length: Optimized for quick reading (1-2 short sentences)
- Indonesian considerations: Proper line breaking for readability

### Motion & Animation
- Photo entrance: Staggered fade-in or slide-in as they become visible
- Caption appearance: Slight delay after photo reveal
- Transition between photos: Crossfade or slide (carousel mode)
- Final wish reveal: Emphasized entrance after all photos shown
- Interactive elements: Subtle scale/hover effects on navigational controls
- Performance: Optimized for smooth transitions even with multiple images

### Responsive Breakpoints
- Mobile: Single column photo stack or swipeable carousel
- Tablet: 2-column grid or still carousel with larger touch targets
- Desktop: 3-4 column grid or carousel with side navigation

## Content Structure (Indonesian)
As specified in blueprint:
1. Hero singkat (brief introduction)
2. Photo card/slideshow (tiap foto punya caption)
3. Pesan personal (personal message interspersed or as overlay)
4. Final wish (kesimpulan atau penutup khusus)

## Component Breakdown
- HeroSection.tsx: Opening context setter
- PhotoCarousel.tsx: Swipeable container with navigation controls
  - PhotoCard.tsx: Individual image with caption overlay
  - NavigationDots.tsx: Page indicators
  - ArrowNavigation.tsx: Left/right controls (optional)
- PhotoGrid.tsx: Alternative grid layout presentation
  - PhotoTile.tsx: Grid item with hover effects
- FinalWishSection.tsx: Prominent closing message display
- Shared components: Reuse BaseLayout, Section, and typography elements

## Technical Implementation Notes
- Uses Framer Motion for carousel transitions and entrance animations
- Touch-friendly swipe detection for mobile
- Optional: Grid layout as alternative to carousel based on config
- Image optimization: Srcset, lazy loading, blurred placeholders
- Caption positioning: Bottom overlay with readable contrast
- Accessibility: ARIA labels for navigation, keyboard controls, pause animation option
- SEO: All images have descriptive alt text from captions when possible
- Performance: Virtualized rendering for large photo sets (if implemented)

## Customization Points
- Layout choice: Carousel vs Grid (configurable)
- Caption position: Bottom overlay, side bar, or below image
- Photo aspect ratio: Consistent cropping or original ratios maintained
- Navigation style: Dots, arrows, thumbnails, or none
- Transition type: Fade, slide, zoom, or custom
- Caption animation: Delay, fade-in, slide-up variations
- Final wish prominence: Size, spacing, and separation from photos