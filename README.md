# Lumino — Premium Electronics E-Commerce Platform

![Repository Size](https://img.shields.io/badge/Language-HTML%2FCSS%2FJS-blue) ![License](https://img.shields.io/badge/License-Open%20Source-green) ![Status](https://img.shields.io/badge/Status-Active-success)

**Precision tech, designed to belong.** Lumino is a modern, feature-rich e-commerce platform showcasing premium electronics, gadgets, and accessories with an elegant user interface and advanced interactive features.

## 🎯 Project Overview

Lumino is built with **vanilla HTML, CSS, and JavaScript** — no frameworks required. It demonstrates professional e-commerce capabilities including product browsing, shopping cart management, wishlist functionality, and a seamless checkout experience. The platform features a curated product catalog spanning audio equipment, wearables, mobile devices, and accessories.

**Live Features:**
- Full e-commerce functionality with local storage persistence
- Dark/light theme toggling with smooth transitions
- Interactive 3D card effects and parallax scrolling
- Real-time search with instant product filtering
- Responsive mobile-first design
- Canvas-based animated background with particle effects
- Advanced cart and wishlist management
- Multi-step checkout flow

---

## 📁 Project Structure

```
lumino/
├── index.html              # Homepage with hero section & featured products
├── shop.html               # Product listing with filtering & sorting
├── product.html            # Detailed product page with specifications
├── collections.html        # Curated product collections
├── cart.html               # Shopping cart management
├── checkout.html           # Secure checkout flow
├── about.html              # Brand information & story
├── support.html            # FAQ & customer support
│
├── app.js                  # Core application logic (53KB)
│  ├── Product data & catalog
│  ├── Cart & wishlist state management
│  ├── Theme management (dark/light)
│  ├── Search functionality
│  ├── Interactive 3D effects
│  └── Page-specific initialization
│
├── styles.css              # Comprehensive styling (63KB)
│  ├── CSS variables (colors, spacing, typography)
│  ├── Component styles (cards, buttons, forms)
│  ├── Layout & grid system
│  ├── Animations & transitions
│  └── Responsive breakpoints
│
├── .gitignore              # Git configuration
└── README.md               # This file
```

---

## ✨ Key Features

### 🛍️ E-Commerce Core
- **12 Premium Products** across 4 categories (Audio, Wearables, Mobile, Accessories)
- **Real-time Cart Management** — Add, remove, update quantities with instant UI updates
- **Wishlist Functionality** — Save favorite items with visual indicators
- **Local Storage Persistence** — Cart and wishlist data survive page refreshes
- **Order Summary** — Automatic shipping calculation (₹0 for orders ₹5,000+, else ₹499)

### 🎨 User Interface
- **Dark/Light Theme Toggle** — System preference detection with manual override
- **Responsive Design** — Mobile, tablet, and desktop optimized
- **3D Card Tilt Effects** — Interactive hover effects on product & collection cards
- **Parallax Scrolling** — Section depth using CSS transforms
- **Toast Notifications** — Contextual feedback for user actions
- **Smooth Animations** — CSS transitions and JavaScript-driven effects

### 🔍 Search & Discovery
- **Real-time Search** — Filter products by name, category, or specifications
- **Keyboard Shortcuts** — Ctrl+K / Cmd+K to open search overlay
- **Product Filtering** — By category and price range
- **Sorting Options** — By price (asc/desc), rating, and name
- **Curated Collections** — 4 themed product bundles (Desk Setup, Audio Elite, Smart Living, Travel Tech)

### 💰 Checkout & Payments
- **Multi-step Checkout** — Organized form with validation
- **Payment Methods** — Card and digital wallet options
- **Order Confirmation** — Unique order ID generation
- **Cart Persistence** — Data retained across sessions

### 🎯 Additional Pages
- **About** — Brand story and value proposition
- **Support** — FAQ accordion and customer assistance
- **Collections** — Curated product groupings by lifestyle

---

## 📦 Product Catalog

### Audio Excellence
- **Aura Pro Over-Ear Headphones** (₹24,999) — 40mm beryllium drivers, 40h battery
- **Aura Buds Pro** (₹11,499) — True wireless, LDAC codec, spatial audio
- **Aura Studio Buds** (₹7,499) — Open-ear design, 24h total battery
- **Lumino Desk Speaker** (₹15,999) — Stereo pair, room-adaptive EQ, 30W RMS

### Wearables & Smart Devices
- **Vertex S Smartwatch** (₹18,499) — 1.4" AMOLED, titanium case, 14-day battery
- **Vertex Band 3** (₹4,999) — 1.62" AMOLED, 21-day battery, 5ATM water resistant

### Mobile & Computing
- **Lumino X1 Flagship Phone** (₹89,999) — 6.7" LTPO AMOLED, Snapdragon 8 Gen 3, 50MP triple camera
- **Blade Ultra Laptop** (₹124,999) — 15.6" 4K OLED, Core i9-14900H, 32GB RAM, 1TB SSD

### Accessories & Peripherals
- **ClearView 4K Monitor** (₹42,999) — 27" IPS, 99% DCI-P3, factory calibrated Delta E<1
- **KeyMaster Pro Keyboard** (₹12,999) — 75% layout, hot-swappable switches, gasket mount
- **ProCharge 120W GaN** (₹3,499) — 4 ports, PD 3.1, intelligent power distribution
- **NovaCam 4K Webcam** (₹8,999) — 4K 30fps, Sony STARVIS, AI tracking

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- No backend server or build process required

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ares006-007/lumino.git
   cd lumino
   ```

2. **Open in browser** (choose one method)
   ```bash
   # Using Python (local server)
   python -m http.server 8000
   # Then open http://localhost:8000

   # Using Node.js
   npx http-server
   # Then open http://localhost:8080

   # Or simply open index.html in your browser
   # (some features like search may require a local server)
   ```

3. **Explore the application**
   - Homepage: Featured products & collections
   - Shop: Full product catalog with filters
   - Product pages: Detailed specs and reviews
   - Cart: Manage items and checkout

### Using GitHub Pages
This repository is configured for GitHub Pages. Visit:
```
https://ares006-007.github.io/lumino
```

---

## 🎮 Interactive Features

### Theme Management
- **Automatic Detection** — Respects system dark mode preferences
- **Manual Toggle** — Theme button in navbar for instant switching
- **Persistent** — Selection saved in localStorage

### Cart Functionality
```javascript
// Add to cart with automatic quantity management
addToCart(productId, quantity)

// View cart in drawer or dedicated page
// Automatic shipping threshold calculation
// Cart persists across browser sessions
```

### 3D Effects
- **Card Tilt** — Hover over product cards for 3D perspective
- **Parallax** — Mouse movement creates depth effect
- **Particle System** — Interactive canvas background responds to clicks
- **Scroll Z-Depth** — Sections translate on Z-axis during scroll

### Search System
- **Keyboard Shortcut** — Press Ctrl+K (Windows) or Cmd+K (Mac)
- **Smart Filtering** — Searches product names, categories, and specs
- **Instant Results** — Real-time display as you type
- **Empty State** — Helpful message when no matches found

---

## 💾 Data Management

### LocalStorage Keys
- `lumino-cart` — Shopping cart items with quantities
- `lumino-wishlist` — Array of wishlisted product IDs
- `lumino-theme` — User's theme preference (light/dark)
- `lumino-announce-dismissed` — Announcement bar state

### Cart Structure
```javascript
{
  id: 1,
  name: "Product Name",
  category: "Audio",
  price: 24999,
  spec: "Key specification",
  qty: 1
}
```

---

## 🛠️ Technology Stack

### Frontend
- **HTML5** — Semantic markup with accessibility (ARIA) attributes
- **CSS3** — Custom properties, flexbox, grid, transforms, animations
- **Vanilla JavaScript** — No frameworks or dependencies
- **Google Fonts** — Playfair Display & Inter typefaces

### Architecture
- **Modular Functions** — Organized by feature (cart, theme, search)
- **State Management** — localStorage for persistent data
- **Event Delegation** — Efficient DOM event handling
- **Responsive Design** — Mobile-first approach with breakpoints

### Performance
- **No External Dependencies** — Minimal HTTP requests
- **CSS Animations** — Hardware-accelerated transforms
- **RequestAnimationFrame** — Smooth 60fps effects
- **LocalStorage Caching** — Instant data retrieval

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
Mobile:    < 640px    (full width layout)
Tablet:    640px+     (medium containers, 2-col grid)
Desktop:   1024px+    (full width, 3-4 col grid)
Wide:      1280px+    (max-width container)
```

---

## 🎨 Design System

### Color Palette
- **Light Mode** — Neutral grays with warm gold accents
- **Dark Mode** — Deep charcoal with gold highlights
- **Accent** — Gold (#C9A84C / #D4AF37)
- **Success** — Green for confirmations
- **Borders** — Subtle, refined separation

### Typography
- **Headlines** — Playfair Display (elegant, premium)
- **Body** — Inter (clean, highly legible)
- **Sizes** — 12px to 48px scale

### Spacing System
```
--sp-1:  4px      --sp-4:  16px    --sp-7:  32px    --sp-10: 64px
--sp-2:  8px      --sp-5:  20px    --sp-8:  40px
--sp-3:  12px     --sp-6:  24px    --sp-9:  48px
```

---

## 🔐 Security & Best Practices

- **Input Validation** — Required fields enforced in checkout
- **XSS Prevention** — Careful HTML escaping in dynamic content
- **No Sensitive Data** — All storage is client-side and non-sensitive
- **ARIA Accessibility** — Screen reader support throughout

---

## 📊 Product Features Matrix

| Feature | Status | Notes |
|---------|--------|-------|
| Product Browsing | ✅ | 12 products across 4 categories |
| Shopping Cart | ✅ | Full CRUD with persistent storage |
| Wishlist | ✅ | Toggle & visual indicators |
| Search | ✅ | Real-time with keyboard shortcuts |
| Filtering | ✅ | By category & price range |
| Sorting | ✅ | Price, rating, name, default |
| Dark Mode | ✅ | System detection + manual toggle |
| Checkout | ✅ | Multi-step form with validation |
| Responsive | ✅ | Mobile, tablet, desktop |
| 3D Effects | ✅ | Card tilt, parallax, particles |

---

## 🎓 Learning Resources

This project demonstrates:
- **E-commerce fundamentals** — Cart management, checkout flows
- **State management** — localStorage for persistence
- **Interactive effects** — 3D transforms, animations, canvas
- **Responsive design** — Mobile-first approach
- **Accessibility** — ARIA attributes, semantic HTML
- **Performance** — Vanilla JS optimization techniques
- **UX patterns** — Modals, drawers, notifications

---

## 🤝 Contributing

Contributions are welcome! Areas for enhancement:

- [ ] Backend API integration for real product data
- [ ] User authentication & accounts
- [ ] Payment gateway integration (Stripe, PayPal)
- [ ] Product reviews & ratings system
- [ ] Inventory management
- [ ] Order history & tracking
- [ ] Admin dashboard
- [ ] Email notifications

### To Contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is **open source and available to the public**. Feel free to use, modify, and distribute for personal or commercial projects.

---

## 💬 Support

### Customer Support
For questions about the platform, visit the [Support page](support.html) with:
- Comprehensive FAQ section
- Shipping & delivery information
- Return policy details
- Warranty information
- Contact resources

### Technical Support
For development questions or issues:
- Open an issue on GitHub
- Review the code documentation
- Check browser console for errors

---

## 🌟 Highlights

✨ **12 Premium Products** — Carefully curated electronics  
🎨 **Modern UI** — Clean, professional design  
⚡ **Fast & Responsive** — No frameworks, pure performance  
🌓 **Dark Mode** — Eye-friendly night experience  
🎯 **Intuitive UX** — Smooth interactions throughout  
💾 **Persistent Data** — Cart survives browser refreshes  
📱 **Mobile First** — Optimized for all devices  
🔍 **Powerful Search** — Find products instantly  

---

## 📈 Future Roadmap

- **Phase 2** — Backend integration with real inventory
- **Phase 3** — Payment processing & order management
- **Phase 4** — User accounts & order history
- **Phase 5** — AI-powered recommendations
- **Phase 6** — Analytics & insights dashboard

---

## 📧 Contact & Updates

**Created on:** June 6, 2026  
**Repository:** [github.com/Ares006-007/lumino](https://github.com/Ares006-007/lumino)

---

**Lumino — Where precision meets elegance in every product.**

Made with ❤️ for those who appreciate quality tech.
