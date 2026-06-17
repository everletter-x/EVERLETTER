# Design Specification: Premium 2 - Gift Box Open

## Overview
This document details the design specifications for the Premium 2 - Gift Box Open template, which features an interactive gift box that users can click to open and reveal the personalized content inside.

## Visual Design

### Layout & Structure
1. **Closed Gift Box State**
   - Centered 3D gift box illustration
   - Ribbon and bow details
   - Subtle shadow for depth perception
   - Instruction text: "Buka hadiahnya ya."
   - Interactive hover states to indicate clickability

2. **Opening Animation**
   - Lid lifts upward with realistic physics
   - Box sides may open slightly
   - Inner lining revealed gradually
   - Light particle effects upon opening (optional)

3. **Revealed Content**
   - Gift box transforms into content container
   - Main message appears where gift was
   - Photo section displayed below or to sides
   - Smooth transition from box to layout

### Color Scheme (Premium Tier)
- Gift box: Warm white or soft pink base
- Ribbon/bow: Rose or complementary accent color
- Shadow: Soft, dark rgba for depth
- Interior: Lighter shade of box color or patterned
- Text: Dark gray on light backgrounds, vice versa

### Typography
- Instruction text: Friendly, inviting sans-serif
- Main headline: Elegant serif or clean sans-serif
- Body text: Comfortable reading size and weight
- Gift tag (if any): Handwritten-style font option

### Motion & Animation
- Box idle: Subtle floating or gentle rotation
- Hover state: Slight lift + shadow enhancement
- Opening sequence: Physics-based lid movement
- Content reveal: Crossfade or wipe transition from box
- Internal animations: Staggered appearance of content sections
- Performance: Hardware-accelerated transforms where possible

### Responsive Breakpoints
- Mobile: Box scales to fit screen with touch-friendly margins
- Tablet: Optimal box size for interaction
- Desktop: Larger box with possibility of side content

## Content Structure (Indonesian)
As specified in blueprint:
1. Gift box opening (interactive element)
2. Hero message (main greeting post-open)
3. Photo spotlight
4. Alasan kenapa spesial (reasons why special)
5. Pesan utama (main personal message)
6. Penutup lembut (soft closing)

## Component Breakdown
- GiftBoxContainer.tsx: Main container managing states
- GiftBoxVisual.tsx: 3D rendered box with opening animation
- InteractionLayer.tsx: Handles click/hover events
- ContentRevealWrapper.tsx: Transitions box to content layout
- Standard sections: Reuse shared components for message, photos, etc.

## Technical Implementation Notes
- Uses Framer Motion for spring physics and animations
- Optional: Three.js or CSS 3D transforms for realistic box
- Accessibility: ARIA labels, keyboard accessible (Enter/Space to open)
- Fallback: Simple 2D animation for reduced motion preference
- Performance: Optimized re-renders during animation states

## Customization Points
- Box color/theme (from config.theme)
- Ribbon color (complementary to theme)
- Opening speed/configurable physics
- Interior texture/pattern (subtle)
- Instruction text (configurable)
- Post-open layout variation