# Product Requirements Document (PRD)

## EverLetter - Emotional Digital Gifts Platform

### 1. Product Overview
EverLetter is a template-based business that turns feelings into memories by creating personalized digital gifts. Rather than building custom websites for each customer, EverLetter uses a template engine approach where each buyer receives a personalized digital gift based on a selected template, controlled entirely by a configuration file.

### 2. Core Value Proposition
- **Brand Promise**: Turn feelings into memories
- **Core Use Case**: Personalized messages for partners with customized photos and personal messages
- **Key Differentiator**: Template-based business model enabling rapid delivery (15-60 minutes) vs. custom development

### 3. Product Architecture
As defined in the blueprint, EverLetter follows a template engine business model:
- One product structure
- One codebase per template
- One config file per buyer
- One deployment flow
- Buyer-specific domain or subdomain

### 4. Product Ladder

#### Premium Products (4 templates) - Main Sellers
Designed to be fast to understand, close, and deliver (15-30 minutes):

1. **Premium 1 - Countdown Reveal**
   - Mechanic: intro loading → scroll countdown 3 2 1 → main page opens
   - Best for: birthday, surprise, anniversary, romantic gift
   - Key benefit: Creates anticipation, feels like an event, viral potential

2. **Premium 2 - Gift Box Open**
   - Mechanic: animated gift box → click to open → page reveal
   - Best for: birthday, apology, confession
   - Key benefit: Interactive, simple to understand, strong emotional reveal

3. **Premium 3 - Love Letter Scroll**
   - Mechanic: page terbuka langsung → scroll bertahap → section muncul satu per satu
   - Best for: ucapan ke pasangan, anniversary, pesan panjang, romantic appreciation
   - Key benefit: Most flexible, best for long copywriting, intimate and personal feel

4. **Premium 4 - Photo Story Card**
   - Mechanic: card/slider story → tiap foto punya caption → final wish
   - Best for: customized photo, couples with many memories, birthday, anniversary
   - Key benefit: Photo-driven, easy to sell, ideal for customers wanting photos as focal point

#### Ultra Premium Products (2 templates) - High-Value Versions
More cinematic, more custom, higher price (30-60 minutes):

1. **Ultra Premium 1 - Cinematic Letter**
   - Mechanic: intro sinematik → chapter-based scrolling → motion halus → ending scene
   - Best for: anniversary, serious confession, premium gift
   - Key benefit: Most "wow" factor, ideal for luxury experience seekers, easily differentiated from Premium

2. **Ultra Premium 2 - Signature Memory**
   - Mechanic: fully custom layout → customer request based → paling fleksibel
   - Best for: special requests, unique themes, customers wanting most personal result
   - Key benefit: Custom premium, usable for any occasion, flagship tier product

### 5. Content System Requirements
All products must use Indonesian language for copywriting to achieve:
- Closer connection
- More natural feel
- Easier conversion
- More emotional impact

#### Standard Content Blocks (in Indonesian):
1. Opening
2. Main headline
3. Photo section
4. Personal message
5. Why you matter
6. Closing wish
7. CTA order

#### Tone Rules:
- Singkat, hangat, romantis (short, warm, romantic)
- Avoid being overly poetic unless Ultra tier
- Avoid being excessive (lebay)
- Avoid being long-winded (bertele-tele)
- Avoid generic template language

### 6. Visual System Requirements

#### Brand Look:
- Glassmorphism
- Soft blur
- Premium dark mode
- Romantic accent colors
- Clean typography
- Apple-grade spacing

#### Color Directions:
**Premium Tier:**
- Pink soft
- Rose
- Lavender
- Warm white

**Ultra Tier:**
- Dark luxury
- Gold accent
- Deep black
- Elegant white
- Starlight glow

#### Motion Rules:
- Subtle, not chaotic
- Smooth reveal
- Soft fade
- Light parallax
- Restrained sparkle

#### Responsiveness:
All products must fit:
- 320px mobile
- 375px mobile
- 390px mobile
- 414px mobile
- Tablet
- Desktop
- Mobile first, always

### 7. Technical Requirements

#### Recommended Stack:
- Next.js
- TypeScript
- TailwindCSS
- Framer Motion

#### Data-Driven Structure Rule:
- Every buyer must be controlled by config, not hardcoded content
- Example config structure:
  ```json
  {
    "recipient": "Nabila",
    "sender": "Rizky",
    "title": "Selamat Ulang Tahun",
    "message": "Terima kasih sudah hadir di hidupku...",
    "photos": ["1.jpg", "2.jpg", "3.jpg"],
    "theme": "pink",
    "music": "song.mp3",
    "template": "premium-03"
  }
  ```
- **Critical Rule**: Do not hardcode names inside components
- **Correct**: `<h1>{config.title}</h1>`
- **Incorrect**: `<h1>Selamat Ulang Tahun Nabila</h1>`

### 8. File / Template Structure
```
everletter/
├── premium-01-countdown-reveal/
├── premium-02-gift-box-open/
├── premium-03-love-letter-scroll/
├── premium-04-photo-story-card/
├── ultra-01-cinematic-letter/
├── ultra-02-signature-memory/
└── shared/
```

Each template folder must include:
- Page layout
- Section components
- Config loader
- Theme tokens
- Assets
- Responsive rules

### 9. Build Flow (Order to Delivery)

1. Buyer places order via WhatsApp
2. Developer receives data
3. Developer chooses appropriate template
4. Developer edits config file with buyer-specific data
5. Developer replaces photos with buyer's photos
6. Deployment to Vercel (automatic via Git push)
7. QR code generation from deployment URL
8. Send link + QR to buyer via WhatsApp

#### Target Delivery Times:
- Premium: 15–30 minutes from order confirmation
- Ultra: 30–60 minutes from order confirmation

### 10. Brand-to-Product Rule
EverLetter should always be experienced as:
Brand → Template → Emotion → Personal photos → Indonesian message → Buyer-specific URL

This represents the complete business model.

### 11. Success Metrics
- Delivery time within target ranges (Premium: 15-30 min, Ultra: 30-60 min)
- Customer satisfaction score ≥ 4.5/5
- Template reuse rate ≥ 80% (same template used for multiple buyers)
- Zero hardcoded content violations in production
- 100% mobile responsiveness compliance