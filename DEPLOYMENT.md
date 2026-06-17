# EverLetter Deployment Flow

## Overview
EverLetter follows a template-based business model where each buyer receives a personalized digital gift based on a selected template. The deployment process is designed to be fast and efficient, targeting delivery within 15-30 minutes for Premium templates and 30-60 minutes for Ultra Premium templates.

## Step-by-Step Process

### 1. Buyer Order via WhatsApp
- Customer places order via WhatsApp
- Provides necessary details: recipient name, sender name, occasion, personal message, photo selections, template preference

### 2. Developer Receives Data
- Developer receives order details through WhatsApp
- Verifies all required information is complete
- Confirms template selection with customer if needed

### 3. Choose Template
Based on the [Product Ladder](#product-ladder) in the blueprint:
- **Premium Templates** (15-30 min delivery):
  1. Countdown Reveal (premium-01)
  2. Gift Box Open (premium-02)
  3. Love Letter Scroll (premium-03) ← *Currently implemented*
  4. Photo Story Card (premium-04)
- **Ultra Premium Templates** (30-60 min delivery):
  1. Cinematic Letter (ultra-01)
  2. Signature Memory (ultra-02)

### 4. Edit Config File
- Create or update `/public/config.json` with buyer-specific data:
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
- Ensure config follows the data-driven structure principle: **Do not hardcode names inside components**

### 5. Replace Photos
- Place buyer's photos in the `/public/` directory
- Reference them in the config.json photos array
- Supported formats: JPG, PNG (optimized for web)

### 6. Deploy to Vercel
- Push changes to the connected Git repository
- Vercel automatically builds and deploys the update
- Deployment URL follows pattern: `[buyer-name]-everletter.vercel.app`

### 7. Generate QR Code
- Use the deployment URL to generate a QR code
- QR code encodes the full HTTPS URL for easy access

### 8. Send Link + QR to Buyer
- Send both the direct link and QR code to the buyer via WhatsApp
- Confirm receipt and ask for feedback

## Technical Implementation Notes

### Data-Driven Structure
All content is controlled by config.json, not hardcoded in components:
```jsx
// Correct approach
<h1>{config.title}</h1>
<p>{config.message}</p>

// Incorrect approach (avoid)
<h1>Selamat Ulang Tahun Nabila</h1>
```

### Template Selection
The template to display is determined by the `template` field in config.json.
Future implementation will dynamically load the appropriate template component based on this value.

### Environment Variables
For production deployment, consider adding:
- `VERCEL_URL`: Automatically provided by Vercel
- Custom domains can be configured in Vercel dashboard

## Target Delivery Times
- **Premium Templates**: 15-30 minutes from order confirmation to delivery
- **Ultra Premium Templates**: 30-60 minutes from order confirmation to delivery

## Troubleshooting
- If deployment fails, check Vercel logs for build errors
- Ensure config.json is valid JSON
- Verify photo file paths are correct and accessible
- Test locally with `npm run dev` before deploying