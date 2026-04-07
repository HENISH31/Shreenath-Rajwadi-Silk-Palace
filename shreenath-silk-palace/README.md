# Shreenath Rajwadi Silk Palace — Website

Premium ethnic clothing brand website built with **React + Vite + Tailwind CSS**.

---

## ⚡ Quick Start

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

> **No build tools?** Just open `preview.html` directly in any browser — it is the complete site as a single self-contained file using CDN Tailwind. No installation needed.

---

## 📁 Project Structure

```
/
├── index.html                  # Vite HTML entry
├── preview.html                # ← Open this directly in browser (no install)
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Root — assembles all sections
    ├── index.css               # Global styles + Tailwind directives
    └── components/
        ├── Navbar.jsx          # Sticky nav + ticker + hamburger menu
        ├── Hero.jsx            # Full-screen hero with auto-slider
        ├── FeaturesBanner.jsx  # Marquee selling-points strip
        ├── Categories.jsx      # 6-card product category grid
        ├── TrustBar.jsx        # 5 trust-signal badges
        ├── FeaturedProducts.jsx# Horizontal-scroll new-arrivals strip
        ├── Gallery.jsx         # Filterable image gallery + lightbox
        ├── About.jsx           # Brand story + values grid
        ├── Testimonials.jsx    # Auto-rotating customer reviews
        ├── Contact.jsx         # Address + Google Maps + enquiry form
        ├── Footer.jsx          # Full footer with newsletter
        ├── WhatsAppBtn.jsx     # Floating WhatsApp button
        ├── ScrollToTop.jsx     # Scroll-to-top button
        └── SectionHeading.jsx  # Reusable decorated heading
```

---

## 🖼️ Replacing Placeholder Images

Every image has a comment above it noting exactly where to swap it. Search for:

```
<!-- Replace with your actual ... -->
```

or for JSX files:

```
{/* Replace ... */}
```

| File | What to replace |
|---|---|
| `Hero.jsx` | `HERO_SLIDES[].image` — hero banner (1920×1080px) |
| `Categories.jsx` | `CATEGORIES[].image` — category card images (400×500px) |
| `Gallery.jsx` | `GALLERY_ITEMS[].src` — gallery photos (600×600px) |
| `About.jsx` | `ABOUT_IMAGE` constant — store/brand photo (800×500px) |
| `FeaturedProducts.jsx` | `PRODUCTS[].image` — product card images (400×500px) |

---

## 📍 Replacing the Google Maps Embed

In `Contact.jsx`, find the `<iframe>` and replace the `src`:

1. Go to [maps.google.com](https://maps.google.com)
2. Search your store address
3. Click **Share → Embed a map → Copy HTML**
4. Paste only the `src="..."` URL value

---

## 📞 Replacing Contact Details

In `Contact.jsx`, update `CONTACT_INFO` with real address, phones, email.

For the **WhatsApp button**, open `WhatsAppBtn.jsx` and change:
```js
const WA_NUMBER = '919999999999'  // ← your WhatsApp business number (with country code, no +)
```

The same number appears in `FeaturedProducts.jsx` product card links.

---

## 🎨 Customising Colours

All brand colours live in `tailwind.config.js` under `theme.extend.colors`:

| Token | Default | Usage |
|---|---|---|
| `maroon-700` | `#ac1830` | Primary brand colour |
| `maroon-900` | `#7a172b` | Dark headings |
| `gold-400` | `#e8b91a` | Accent gold |
| `gold-500` | `#c9960e` | Darker gold |
| `cream` | `#fdf6ec` | Light section background |
| `darkbg` | `#1a0a0a` | Dark section background |

---

## 🔤 Fonts Used

| Font | Usage |
|---|---|
| [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) | Headings, brand name |
| [Poppins](https://fonts.google.com/specimen/Poppins) | Body text, buttons |
| [Tiro Devanagari Hindi](https://fonts.google.com/specimen/Tiro+Devanagari+Hindi) | Hindi category labels |

Loaded via Google Fonts in `index.html`.

---

## ✅ Features Checklist

- [x] Sticky navbar with scroll-colour change
- [x] Ticker / announcement bar
- [x] Responsive hamburger menu (mobile)
- [x] Hero with auto-sliding images + stats
- [x] Marquee features strip
- [x] 6-category product grid with hover animations
- [x] Trust-signals bar
- [x] Horizontal-scroll new-arrivals with WhatsApp per-product
- [x] Filterable gallery with lightbox
- [x] About section with floating badge
- [x] Testimonials carousel (auto + manual)
- [x] Contact with address cards + Google Maps embed
- [x] Enquiry form
- [x] Full footer with newsletter strip
- [x] Floating WhatsApp button (pulsing ring)
- [x] Scroll-to-top button
- [x] Scroll-reveal animations (IntersectionObserver)
- [x] Fully responsive (mobile, tablet, desktop)

---

## 📦 Tech Stack

| Layer | Library |
|---|---|
| Framework | React 18 |
| Bundler | Vite 5 |
| Styling | Tailwind CSS 3 |
| Fonts | Google Fonts |
| No other runtime dependencies | — |

---

*Built with ♥ in Vadodara, Gujarat*
