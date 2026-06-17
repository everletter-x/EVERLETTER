# EverLetter

EverLetter is a template-based business for creating emotional digital gifts. Turn feelings into memories with beautifully crafted, personalized digital experiences.

## Product Vision
As outlined in the [BLUEPRINT.md](./docs/BLUEPRINT.md), EverLetter sells emotional digital gifts, not websites. Our core use case is creating personalized messages for partners with customized photos and personal messages.

## Key Features
- Template-based engine for rapid deployment
- Data-driven configuration (no hardcoded content)
- Responsive design for mobile-first experience
- Romantic and premium aesthetic
- Fast delivery times (15-60 minutes)

## Template Catalog

### Premium Products
1. **Countdown Reveal** - Loading → countdown 3-2-1 → main page
2. **Gift Box Open** - Animated gift box → click to open → page reveal
3. **Love Letter Scroll** - Page opens → gradual scroll → sections appear one by one
4. **Photo Story Card** - Card/slider story → each photo has caption → final wish

### Ultra Premium Products
1. **Cinematic Letter** - Cinematic intro → chapter-based scrolling → motion → ending scene
2. **Signature Memory** - Fully custom layout → customer request based → most flexible

## Technical Stack
- Next.js 13
- TypeScript
- TailwindCSS
- Framer Motion
- Vercel for deployment

## Getting Started
See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## Configuration
Each installation is driven by a config.json file following the structure:
```json
{
  "recipient": "Nabila",
  "sender": "Rizky",
  "title": "Selamat Ulang Tahun",
  "message": "Personal message here...",
  "photos": ["photo1.jpg", "photo2.jpg"],
  "theme": "pink",
  "template": "premium-03"
}
```

## License
MIT