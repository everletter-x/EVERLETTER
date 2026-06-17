# Design Specification: Premium 1 - Countdown Reveal

## Overview
This document details the design specifications for the Premium 1 - Countdown Reveal template, which creates anticipation through a loading sequence followed by a countdown before revealing the main content.

## Visual Design

### Layout & Structure
1. **Intro Loading Screen**
   - Full-screen loading animation
   - Brand-colored background with subtle animation
   - Minimal text: "Sedang menyiapkan hadiah spesial untukmu..."

2. **Countdown Sequence**
   - Large, centered numbers: 3 → 2 → 1
   - Smooth fade transition between numbers
   - Each number displayed for approximately 1 second
   - Accompanying subtle sound effect (optional)

3. **Main Page Reveal**
   - Smooth transition from countdown to main content
   - Content appears with staggered animation
   - Follows standard content block structure

### Color Scheme (Premium Tier)
- Background: Warm white or pink soft gradient
- Accent colors: Rose for interactive elements
- Text: Dark gray for primary content, rose for highlights
- Loading indicator: Soft rose or lavender animation

### Typography
- Headings: Clean, modern sans-serif (Inter or similar)
- Body text: Highly legible sans-serif
- Countdown numbers: Bold, large font size (clamp(4rem, 10vw, 8rem))
- Loading text: Medium size, warm gray

### Motion & Animation
- Loading screen: Soft pulsing or subtle particle animation
- Countdown: Scale-up/fade-in for each number, fade-out transition
- Page reveal: Staggered fade-in-up for content sections
- Micro-interactions: Subtle hover effects on interactive elements
- Performance: All animations optimized for 60fps

### Responsive Breakpoints
- Mobile (< 375px): Full-screen countdown, adjusted spacing
- Tablet (375px - 768px): Centered countdown with side padding
- Desktop (> 768px): Maximum width constraint for readability

## Content Structure (Indonesian)
As specified in blueprint:
1. Intro singkat (loading screen text)
2. Countdown (3... 2... 1...)
3. Hero ucapan (main greeting)
4. Photo section
5. Pesan personal
6. Closing wish

## Component Breakdown
- LoadingScreen.tsx: Handles initial loading state
- CountdownSequence.tsx: Manages the 3-2-1 countdown animation
- PageTransition.tsx: Smooth transition from countdown to content
- MainContentLayout.tsx: Standard layout for revealed content
- All sections reuse shared components where applicable

## Technical Implementation Notes
- Uses Framer Motion for all animations
- Config-driven timing for countdown duration
- Accessibility considerations: Reduced motion preference support
- SEO: Main content loaded in DOM for search engines
- Performance: Lazy-loaded assets, optimized image handling

## Customization Points
- Background color/theme (from config.theme)
- Countdown duration (configurable via theme)
- Loading text (from config)
- Animation intensity (motion settings in theme)