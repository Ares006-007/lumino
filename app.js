/*
 * LUMINO App v2 — Core Logic
 * Premium Electronics E-Commerce
 */

/* ============================================================
   PRODUCT DATA
   ============================================================ */

const PRODUCTS = [
  {
    id: 1,
    name: 'Aura Pro Over-Ear Headphones',
    category: 'Audio',
    price: 24999,
    original: 32000,
    spec: 'Adaptive ANC · 40h battery · Beryllium drivers',
    rating: 4.8,
    reviews: 240,
    badge: 'sale',
    description: 'Precision-engineered over-ear headphones with adaptive noise cancellation, 40mm beryllium drivers, and up to 40 hours of continuous playback. The Aura Pro wraps every listening session in extraordinary clarity.',
    specs: { 'Driver': '40mm Beryllium', 'Battery': '40 hours', 'Connectivity': 'Bluetooth 5.3', 'Weight': '248g', 'ANC': 'Adaptive 3-mic' },
    colors: ['Midnight', 'Silver', 'Graphite'],
    deliveryDays: 3
  },
  {
    id: 2,
    name: 'Vertex S Smartwatch',
    category: 'Wearables',
    price: 18499,
    original: 22000,
    spec: '1.4" AMOLED · Titanium · 14-day battery',
    rating: 4.7,
    reviews: 185,
    badge: 'sale',
    description: 'A refined smartwatch with a surgical-grade titanium case, sapphire crystal display, and intelligent health monitoring. Tracks 100+ activities with medical-grade sensors for SpO2, ECG, and skin temperature.',
    specs: { 'Display': '1.4" AMOLED 454×454', 'Case': 'Grade 5 Titanium', 'Battery': '14 days', 'Water Resistance': '5ATM', 'Sensors': 'SpO2, ECG, Temp' },
    colors: ['Midnight', 'Graphite'],
    deliveryDays: 2
  },
  {
    id: 3,
    name: 'Lumino X1 Flagship Phone',
    category: 'Mobile',
    price: 89999,
    original: null,
    spec: '6.7" LTPO · Snapdragon 8 Gen 3 · 50MP triple camera',
    rating: 4.9,
    reviews: 520,
    badge: 'new',
    description: 'The Lumino X1 is our most advanced smartphone. A 6.7-inch LTPO AMOLED display, Snapdragon 8 Gen 3 chipset, and a triple 50MP camera system tuned for natural colour science. Ceramic body. Surgical steel frame.',
    specs: { 'Display': '6.7" LTPO AMOLED 120Hz', 'Processor': 'Snapdragon 8 Gen 3', 'Camera': '50MP Triple System', 'Battery': '5000mAh 100W', 'Storage': '256GB / 512GB' },
    colors: ['Obsidian', 'Lunar White'],
    deliveryDays: 1
  },
  {
    id: 4,
    name: 'Aura Buds Pro',
    category: 'Audio',
    price: 11499,
    original: 14000,
    spec: 'Spatial audio · LDAC · IPX5 · 30h total',
    rating: 4.6,
    reviews: 310,
    badge: 'sale',
    description: 'True wireless earbuds with 11mm dual-driver architecture, adaptive transparency, and spatial audio processing. 30 hours total battery. IPX5 water resistant — made for every environment.',
    specs: { 'Driver': '11mm Dual', 'Total Battery': '30h', 'ANC': 'Hybrid 6-mic', 'Codec': 'LDAC, aptX, AAC', 'Rating': 'IPX5' },
    colors: ['Slate', 'Ivory'],
    deliveryDays: 2
  },
  {
    id: 5,
    name: 'NovaCam 4K Webcam',
    category: 'Accessories',
    price: 8999,
    original: 11000,
    spec: '4K 30fps · Sony STARVIS · AI tracking',
    rating: 4.5,
    reviews: 128,
    badge: 'sale',
    description: 'Professional 4K webcam with a Sony STARVIS low-light sensor, AI-powered framing, and dual beamforming microphones. Magnetic universal mount. Adjustable 65–90° field of view.',
    specs: { 'Resolution': '4K 30fps / 1080p 60fps', 'Sensor': 'Sony STARVIS', 'Microphones': 'Dual Beamforming', 'FOV': '65–90° adjustable', 'Mount': 'Magnetic Universal' },
    colors: ['Graphite'],
    deliveryDays: 3
  },
  {
    id: 6,
    name: 'Blade Ultra Laptop',
    category: 'Mobile',
    price: 124999,
    original: null,
    spec: '15.6" 4K OLED · Core i9 · 32GB · 1TB',
    rating: 4.8,
    reviews: 96,
    badge: 'new',
    description: 'Ultra-thin professional laptop with a factory-calibrated 4K OLED display, Intel Core i9-14900H, 32GB LPDDR5X, and 1TB PCIe 5.0 SSD. CNC-milled aluminium unibody at 15.9mm thin.',
    specs: { 'Display': '15.6" 4K OLED 60Hz', 'Processor': 'Intel Core i9-14900H', 'Memory': '32GB LPDDR5X', 'Storage': '1TB PCIe 5.0', 'Thickness': '15.9mm' },
    colors: ['Space Grey', 'Silver'],
    deliveryDays: 5
  },
  {
    id: 7,
    name: 'Vertex Band 3',
    category: 'Wearables',
    price: 4999,
    original: 6500,
    spec: '1.62" AMOLED · 21-day · 5ATM',
    rating: 4.4,
    reviews: 445,
    badge: 'sale',
    description: 'An elegant fitness band with a 1.62-inch AMOLED touch display, continuous health tracking, and an exceptional 21-day battery life. 5ATM water resistant. Weighs just 25g.',
    specs: { 'Display': '1.62" AMOLED', 'Battery': '21 days', 'Sensors': 'HR, SpO2, Stress', 'Water Resistance': '5ATM', 'Weight': '25g' },
    colors: ['Black', 'Pink Beige'],
    deliveryDays: 2
  },
  {
    id: 8,
    name: 'Lumino Desk Speaker',
    category: 'Audio',
    price: 15999,
    original: 19000,
    spec: 'Stereo · 30W · Room-adaptive EQ · USB-C',
    rating: 4.7,
    reviews: 164,
    badge: 'sale',
    description: 'Desktop stereo speaker pair with room-adaptive EQ, dual full-range drivers, and a passive bass radiator. Anodised aluminium enclosure. Zero-vibration isolation feet. Connects via USB-C or Bluetooth 5.2.',
    specs: { 'Drivers': '2× 3" Full Range', 'Power': '30W RMS', 'Connectivity': 'USB-C, BT 5.2', 'Material': 'Anodised Aluminium', 'Dimensions': '160×100×120mm' },
    colors: ['Graphite', 'White'],
    deliveryDays: 4
  },
  {
    id: 9,
    name: 'ProCharge 120W GaN',
    category: 'Accessories',
    price: 3499,
    original: 4500,
    spec: '120W · 4 ports · GaN III · PD 3.1',
    rating: 4.6,
    reviews: 372,
    badge: 'sale',
    description: 'Compact 120W GaN III charger with 2× USB-C PD 3.1 and 2× USB-A ports. Intelligent power distribution allows simultaneous laptop and phone charging at full speed.',
    specs: { 'Total Power': '120W', 'Ports': '2× USB-C, 2× USB-A', 'Technology': 'GaN III', 'Max Single Port': '100W PD 3.1', 'Weight': '186g' },
    colors: ['White', 'Black'],
    deliveryDays: 2
  },
  {
    id: 10,
    name: 'ClearView 4K Monitor',
    category: 'Accessories',
    price: 42999,
    original: null,
    spec: '27" 4K IPS · 99% DCI-P3 · 96W USB-C',
    rating: 4.8,
    reviews: 89,
    badge: 'new',
    description: 'Professional 27-inch 4K IPS monitor factory calibrated to Delta E<1 with 99% DCI-P3 coverage. USB-C 96W power delivery. Nano-texture anti-glare panel. Height-adjustable aluminium stand.',
    specs: { 'Panel': '27" IPS 4K 60Hz', 'Color': '99% DCI-P3, 100% sRGB', 'Calibration': 'Factory Delta E<1', 'USB-C PD': '96W', 'Coating': 'Nano-texture AG' },
    colors: ['Space Grey'],
    deliveryDays: 5
  },
  {
    id: 11,
    name: 'Aura Studio Buds',
    category: 'Audio',
    price: 7499,
    original: 9000,
    spec: 'Open-ear · 14.2mm · 24h total',
    rating: 4.3,
    reviews: 198,
    badge: 'sale',
    description: 'Open-ear studio buds for extended listening without fatigue. 14.2mm drivers deliver a natural soundstage. 24 hours total battery life. 4.5g per bud — you barely know they are there.',
    specs: { 'Driver': '14.2mm Dynamic', 'Design': 'Open-ear', 'Battery': '24h total', 'Codec': 'aptX Lossless, AAC', 'Weight': '4.5g per bud' },
    colors: ['Cream', 'Charcoal'],
    deliveryDays: 3
  },
  {
    id: 12,
    name: 'KeyMaster Pro Keyboard',
    category: 'Accessories',
    price: 12999,
    original: 16000,
    spec: '75% · Hot-swap · Gasket · Aluminium',
    rating: 4.7,
    reviews: 256,
    badge: 'sale',
    description: 'Premium 75% mechanical keyboard with hot-swappable switches, configurable per-key actuation, and a CNC aluminium case on a gasket mount. Every keystroke refined — tactile, silent, and satisfying.',
    specs: { 'Layout': '75% Compact (87 keys)', 'Switches': 'Hot-swappable', 'Case': 'CNC Aluminium', 'Mount': 'Top-gasket', 'Connectivity': 'USB-C / Bluetooth 5.0' },
    colors: ['Silver', 'Space Black'],
    deliveryDays: 3
  }
];

/* ============================================================
   COLLECTIONS
   ============================================================ */

const COLLECTIONS = [
  {
    id: 'desk',
    name: 'Desk Setup Essentials',
    desc: 'Elevate your workspace with precision peripherals',
    categories: ['Accessories'],
    products: [5, 9, 10, 12, 8],
    icon: 'desk'
  },
  {
    id: 'audio',
    name: 'Audio Elite',
    desc: 'Reference-grade sound for discerning ears',
    categories: ['Audio'],
    products: [1, 4, 8, 11],
    icon: 'audio'
  },
  {
    id: 'smart',
    name: 'Smart Living',
    desc: 'Intelligent devices for the modern home',
    categories: ['Wearables'],
    products: [2, 7],
    icon: 'smart'
  },
  {
    id: 'travel',
    name: 'Travel Tech',
    desc: 'Refined gear for those always on the move',
    categories: ['Mobile', 'Accessories'],
    products: [3, 6, 9, 4],
    icon: 'travel'
  }
];

/* ============================================================
   CATEGORY ICONS (SVG paths)
   ============================================================ */

const ICONS = {
  Audio: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`,
  Wearables: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7"/><polyline points="12 9 12 12 13.5 13.5"/><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"/></svg>`,
  Mobile: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  Accessories: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  Laptop: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="1"/><path d="M1 21h22"/></svg>`,
  Speaker: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="14" r="4"/><circle cx="12" cy="14" r="1.5"/><circle cx="12" cy="6" r="1"/></svg>`,
  desk: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="4" y1="10" x2="20" y2="10"/><rect x="6" y="6" width="6" height="4" rx="1"/></svg>`,
  audio: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`,
  smart: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7"/><polyline points="12 9 12 12 13.5 13.5"/><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"/></svg>`,
  travel: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12.01" y2="12"/></svg>`
};

function getCategoryIcon(category) {
  if (category === 'Mobile' && arguments[1] === 'laptop') return ICONS.Laptop;
  return ICONS[category] || ICONS.Accessories;
}

/* ============================================================
   HELPERS
   ============================================================ */

function formatPrice(n) {
  return '\u20B9' + n.toLocaleString('en-IN');
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}

function getProductsByCategory(cat) {
  if (cat === 'All') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === cat);
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const empty = 5 - full;
  let html = '<div class="rating__stars">';
  for (let i = 0; i < full; i++) {
    html += `<svg class="rating__star" viewBox="0 0 12 12"><path d="M6 1l1.35 2.73 3.01.44-2.18 2.12.51 3-2.69-1.42L3.31 9.29l.51-3L1.64 4.17l3.01-.44z"/></svg>`;
  }
  for (let i = 0; i < empty; i++) {
    html += `<svg class="rating__star empty" viewBox="0 0 12 12"><path d="M6 1l1.35 2.73 3.01.44-2.18 2.12.51 3-2.69-1.42L3.31 9.29l.51-3L1.64 4.17l3.01-.44z"/></svg>`;
  }
  html += '</div>';
  return html;
}

/* ============================================================
   THEME MANAGEMENT
   ============================================================ */

function getTheme() {
  return localStorage.getItem('lumino-theme') || 'light';
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('lumino-theme', theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    const sunIcon = btn.querySelector('.icon-sun');
    const moonIcon = btn.querySelector('.icon-moon');
    if (sunIcon) sunIcon.style.display = theme === 'dark' ? 'block' : 'none';
    if (moonIcon) moonIcon.style.display = theme === 'dark' ? 'none' : 'block';
  }
}

function initTheme() {
  setTheme(getTheme());
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.dataset.theme || 'light';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }
}

/* ============================================================
   CART STATE
   ============================================================ */

function getCart() {
  return JSON.parse(localStorage.getItem('lumino-cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('lumino-cart', JSON.stringify(cart));
  updateCartBadge();
  updateDrawerCart();
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  return getCart().reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function addToCart(productId, qty = 1) {
  const product = getProductById(productId);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      spec: product.spec,
      qty
    });
  }
  saveCart(cart);
  showToast(`${product.name.split(' ').slice(0,3).join(' ')} added to cart`);
}

function removeFromCart(productId) {
  const cart = getCart().filter(i => i.id !== parseInt(productId));
  saveCart(cart);
}

function updateCartQty(productId, newQty) {
  if (newQty < 1) { removeFromCart(productId); return; }
  const cart = getCart();
  const item = cart.find(i => i.id === parseInt(productId));
  if (item) { item.qty = newQty; saveCart(cart); }
}

function updateCartBadge() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.dataset.count = count;
    el.textContent = count > 0 ? count : '';
  });
}

/* ============================================================
   WISHLIST STATE
   ============================================================ */

function getWishlist() {
  return JSON.parse(localStorage.getItem('lumino-wishlist') || '[]');
}

function isWishlisted(productId) {
  return getWishlist().includes(parseInt(productId));
}

function toggleWishlist(productId) {
  const id = parseInt(productId);
  let list = getWishlist();
  if (list.includes(id)) {
    list = list.filter(x => x !== id);
    showToast('Removed from wishlist');
  } else {
    list.push(id);
    showToast('Added to wishlist');
  }
  localStorage.setItem('lumino-wishlist', JSON.stringify(list));
  updateWishlistBadge();
  return list.includes(id);
}

function updateWishlistBadge() {
  const count = getWishlist().length;
  document.querySelectorAll('.wishlist-badge').forEach(el => {
    el.dataset.count = count;
    el.textContent = count > 0 ? count : '';
  });
}

/* ============================================================
   TOAST
   ============================================================ */

function showToast(msg) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'toast-in 0.25s ease reverse forwards';
    setTimeout(() => toast.remove(), 250);
  }, 2200);
}

/* ============================================================
   ANNOUNCEMENT BAR
   ============================================================ */

function initAnnounceBar() {
  const bar = document.getElementById('announce-bar');
  const closeBtn = document.getElementById('announce-close');
  if (!bar || !closeBtn) return;

  if (sessionStorage.getItem('lumino-announce-dismissed')) {
    bar.classList.add('dismissed');
  }

  closeBtn.addEventListener('click', () => {
    bar.classList.add('dismissed');
    sessionStorage.setItem('lumino-announce-dismissed', '1');
  });
}

/* ============================================================
   NAVBAR
   ============================================================ */

function initNavbar() {
  // Active link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPath || (currentPath === '' && href === 'index.html'))) {
      link.classList.add('active');
    }
  });

  // Mobile nav
  const hamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileOverlay = document.getElementById('mobile-nav-overlay');
  const mobileClose = document.getElementById('mobile-nav-close');

  function closeMobileNav() { mobileNav?.classList.remove('open'); }

  hamburger?.addEventListener('click', () => mobileNav?.classList.add('open'));
  mobileOverlay?.addEventListener('click', closeMobileNav);
  mobileClose?.addEventListener('click', closeMobileNav);
}

/* ============================================================
   SEARCH OVERLAY
   ============================================================ */

function initSearch() {
  const searchBtns = document.querySelectorAll('#search-btn, #search-btn-mobile');
  const overlay = document.getElementById('search-overlay');
  const input = document.getElementById('search-input');
  const closeBtn = document.getElementById('search-close');
  const results = document.getElementById('search-results');
  if (!overlay) return;

  function openSearch() {
    overlay.classList.add('open');
    setTimeout(() => input?.focus(), 100);
  }

  function closeSearch() {
    overlay.classList.remove('open');
    if (input) input.value = '';
    if (results) results.innerHTML = '';
  }

  searchBtns.forEach(btn => btn?.addEventListener('click', openSearch));
  closeBtn?.addEventListener('click', closeSearch);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeSearch();
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  });

  input?.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    if (!q) { results.innerHTML = ''; return; }
    const matches = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.spec.toLowerCase().includes(q)
    );
    if (matches.length === 0) {
      results.innerHTML = `<div class="search-empty"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><p>No results for "${q}"</p></div>`;
      return;
    }
    results.innerHTML = `
      <div class="search-section-label">Results (${matches.length})</div>
      ${matches.map(p => `
        <a class="search-result-item" href="product.html?id=${p.id}">
          <div class="search-result-item__img">${getCategoryIcon(p.category)}</div>
          <div class="search-result-item__info">
            <div class="search-result-item__name">${p.name}</div>
            <div class="search-result-item__cat">${p.category}</div>
          </div>
          <div class="search-result-item__price">${formatPrice(p.price)}</div>
        </a>
      `).join('')}
    `;
  });
}

/* ============================================================
   CART DRAWER
   ============================================================ */

function updateDrawerCart() {
  const body = document.getElementById('cart-drawer-body');
  const footer = document.getElementById('cart-drawer-footer');
  const countEl = document.getElementById('cart-drawer-count');
  if (!body) return;

  const cart = getCart();
  if (countEl) countEl.textContent = `(${getCartCount()})`;

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <div class="cart-empty__title">Your cart is empty</div>
        <div class="cart-empty__desc">Add some products to get started</div>
        <a href="shop.html" class="btn btn-primary btn-sm" style="margin-top:8px">Browse Products</a>
      </div>
    `;
    if (footer) footer.style.display = 'none';
    return;
  }

  if (footer) footer.style.display = 'flex';

  body.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item__img">${getCategoryIcon(item.category)}</div>
      <div class="cart-item__info">
        <div class="cart-item__name">${item.name}</div>
        <div class="cart-item__cat">${item.category}</div>
        <div class="cart-item__price">${formatPrice(item.price * item.qty)}</div>
      </div>
      <div class="cart-item__controls">
        <div class="qty-stepper">
          <button class="qty-stepper__btn drawer-qty-btn" data-id="${item.id}" data-action="minus">−</button>
          <div class="qty-stepper__val">${item.qty}</div>
          <button class="qty-stepper__btn drawer-qty-btn" data-id="${item.id}" data-action="plus">+</button>
        </div>
        <button class="cart-item__remove drawer-remove" data-id="${item.id}">Remove</button>
      </div>
    </div>
  `).join('');

  // Subtotal
  const subtotal = getCartTotal();
  const shipping = subtotal >= 5000 ? 0 : 499;
  const subtotalEl = document.getElementById('cart-drawer-subtotal');
  const shipEl = document.getElementById('cart-drawer-ship-msg');
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (shipEl) {
    if (shipping === 0) {
      shipEl.textContent = 'Free shipping applied';
      shipEl.className = 'cart-drawer__ship-msg ok';
    } else {
      shipEl.textContent = `Add ${formatPrice(5000 - subtotal)} more for free shipping`;
      shipEl.className = 'cart-drawer__ship-msg';
    }
  }

  // Listeners
  body.querySelectorAll('.drawer-qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const item = getCart().find(i => i.id === id);
      if (!item) return;
      updateCartQty(id, btn.dataset.action === 'plus' ? item.qty + 1 : item.qty - 1);
    });
  });

  body.querySelectorAll('.drawer-remove').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
  });
}

function initCartDrawer() {
  const openBtns = document.querySelectorAll('#cart-btn, #cart-btn-mobile');
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-drawer-overlay');
  const closeBtn = document.getElementById('cart-drawer-close');
  if (!drawer) return;

  function openDrawer() { drawer.classList.add('open'); }
  function closeDrawer() { drawer.classList.remove('open'); }

  openBtns.forEach(btn => btn?.addEventListener('click', e => { e.preventDefault(); openDrawer(); }));
  overlay?.addEventListener('click', closeDrawer);
  closeBtn?.addEventListener('click', closeDrawer);

  updateDrawerCart();
}

/* ============================================================
   PRODUCT CARD RENDERER
   ============================================================ */

function renderProductCard(product) {
  const originalHTML = product.original
    ? `<span class="product-card__price-original">${formatPrice(product.original)}</span>`
    : '';
  const badgeHTML = product.badge === 'sale' && product.original
    ? `<span class="badge badge-sale">Sale</span>`
    : product.badge === 'new'
    ? `<span class="badge badge-new">New</span>`
    : '';
  const wishlisted = isWishlisted(product.id);

  return `
    <div class="product-card" data-id="${product.id}" data-category="${product.category}">
      <div class="product-card__img-wrap">
        ${badgeHTML ? `<div class="product-card__badges">${badgeHTML}</div>` : ''}
        <a href="product.html?id=${product.id}">
          <div class="product-card__img">${getCategoryIcon(product.category)}</div>
        </a>
        <button class="product-card__wish ${wishlisted ? 'active' : ''}" data-id="${product.id}" aria-label="Wishlist">
          <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
        <div class="product-card__quick-add">
          <button class="btn btn-primary btn-sm card-atc-btn" data-id="${product.id}">Add to Cart</button>
        </div>
      </div>
      <div class="product-card__body">
        <div class="product-card__category">${product.category}</div>
        <div class="product-card__name">
          <a href="product.html?id=${product.id}">${product.name}</a>
        </div>
        <div class="product-card__spec">${product.spec}</div>
        <div class="rating">
          ${renderStars(product.rating)}
          <span class="rating__count">(${product.reviews})</span>
        </div>
      </div>
      <div class="product-card__footer">
        <div>
          <span class="product-card__price">${formatPrice(product.price)}</span>
          ${originalHTML}
        </div>
      </div>
    </div>
  `;
}

function attachCardListeners(container) {
  container.querySelectorAll('.card-atc-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const id = parseInt(btn.dataset.id);
      addToCart(id);
      const orig = btn.textContent;
      btn.textContent = 'Added';
      btn.disabled = true;
      setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 1500);
    });
  });

  container.querySelectorAll('.product-card__wish').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const id = parseInt(btn.dataset.id);
      const isNowWished = toggleWishlist(id);
      btn.classList.toggle('active', isNowWished);
    });
  });

  init3DTilt(container);
}

function init3DTilt(container) {
  container.querySelectorAll('.product-card, .collection-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -4; // max 4deg
      const rotateY = ((x - centerX) / centerX) * 4;  // max 4deg
      
      card.style.transform = `perspective(1000px) translateY(-5px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.transition = 'none';
      card.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease';
      card.style.zIndex = '1';
    });
  });
}

/* ============================================================
   HOMEPAGE
   ============================================================ */

function initHomepage() {
  const grid = document.getElementById('featured-grid');
  const pills = document.querySelectorAll('.filter-pill');
  if (!grid) return;

  function renderFeatured(cat) {
    let products;
    if (cat === 'All') {
      products = PRODUCTS.filter(p => [1, 3, 6, 10].includes(p.id));
    } else {
      products = PRODUCTS.filter(p => p.category === cat).slice(0, 4);
    }
    if (products.length === 0) products = PRODUCTS.slice(0, 4);
    grid.innerHTML = products.map(renderProductCard).join('');
    attachCardListeners(grid);
  }

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderFeatured(pill.dataset.cat);
    });
  });

  renderFeatured('All');

  // Newsletter
  const form = document.getElementById('newsletter-form');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input');
    if (input?.value) {
      form.innerHTML = '<p style="font-size:14px;color:var(--c-success);font-weight:500">Thank you for subscribing.</p>';
    }
  });

  init3DTilt(document.body);
}

/* ============================================================
   SHOP PAGE
   ============================================================ */

function initShop() {
  const grid = document.getElementById('shop-grid');
  const countEl = document.getElementById('shop-count');
  const catOptions = document.querySelectorAll('.sidebar-option[data-cat]');
  const priceSlider = document.getElementById('price-slider');
  const priceMaxEl = document.getElementById('price-max-label');
  const sortSelect = document.getElementById('sort-select');
  const mobileFilterBtn = document.getElementById('mobile-filter-btn');
  const sidebar = document.getElementById('shop-sidebar');

  if (!grid) return;

  let activeCategory = 'All';
  let maxPrice = 135000;

  mobileFilterBtn?.addEventListener('click', () => {
    sidebar?.classList.toggle('open');
  });

  function render() {
    let products = PRODUCTS.filter(p => {
      if (activeCategory !== 'All' && p.category !== activeCategory) return false;
      if (p.price > maxPrice) return false;
      return true;
    });

    const sort = sortSelect?.value || 'default';
    if (sort === 'price-asc') products.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') products.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') products.sort((a, b) => b.rating - a.rating);
    else if (sort === 'name') products.sort((a, b) => a.name.localeCompare(b.name));

    grid.innerHTML = products.map(renderProductCard).join('');
    if (countEl) countEl.textContent = `${products.length} product${products.length !== 1 ? 's' : ''}`;
    attachCardListeners(grid);
  }

  catOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      catOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      activeCategory = opt.dataset.cat;
      render();
    });
  });

  priceSlider?.addEventListener('input', () => {
    maxPrice = parseInt(priceSlider.value);
    if (priceMaxEl) priceMaxEl.textContent = formatPrice(maxPrice);
    render();
  });

  sortSelect?.addEventListener('change', render);
  render();
}

/* ============================================================
   PRODUCT DETAIL
   ============================================================ */

function initProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = getProductById(id);

  if (!product) {
    document.getElementById('product-detail-main')?.insertAdjacentHTML('afterbegin',
      '<div style="padding:80px;color:var(--c-text-3);">Product not found. <a href="shop.html" style="color:var(--c-accent)">Browse all products</a></div>'
    );
    return;
  }

  document.title = `${product.name} — LUMINO`;

  // Update breadcrumb
  const bcProduct = document.getElementById('bc-product');
  if (bcProduct) bcProduct.textContent = product.name;

  // Gallery
  const mainImg = document.getElementById('gallery-main-icon');
  if (mainImg) mainImg.innerHTML = getCategoryIcon(product.category);

  document.querySelectorAll('.gallery-thumb').forEach((thumb, i) => {
    thumb.innerHTML = getCategoryIcon(product.category);
    thumb.addEventListener('click', () => {
      document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  // Info
  const catEl = document.getElementById('product-cat');
  const nameEl = document.getElementById('product-name');
  const ratingEl = document.getElementById('product-rating');
  const reviewCount = document.getElementById('product-review-count');
  const priceEl = document.getElementById('product-price');
  const origEl = document.getElementById('product-orig-price');
  const savingsEl = document.getElementById('product-savings');
  const descEl = document.getElementById('product-desc');
  const deliveryEl = document.getElementById('product-delivery');

  if (catEl) catEl.textContent = product.category;
  if (nameEl) nameEl.textContent = product.name;
  if (ratingEl) ratingEl.innerHTML = renderStars(product.rating);
  if (reviewCount) reviewCount.textContent = `${product.reviews} reviews`;
  if (priceEl) priceEl.textContent = formatPrice(product.price);

  if (product.original) {
    if (origEl) { origEl.textContent = formatPrice(product.original); origEl.style.display = 'inline'; }
    const saved = product.original - product.price;
    const pct = Math.round((saved / product.original) * 100);
    if (savingsEl) { savingsEl.textContent = `Save ${pct}%`; savingsEl.style.display = 'inline'; }
  }

  if (descEl) descEl.textContent = product.description;

  if (deliveryEl && product.deliveryDays) {
    const date = new Date();
    date.setDate(date.getDate() + product.deliveryDays);
    deliveryEl.textContent = `Estimated delivery: ${date.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })}`;
  }

  // Variant colors
  const variantWrap = document.getElementById('variant-colors');
  if (variantWrap && product.colors) {
    variantWrap.innerHTML = product.colors.map((c, i) =>
      `<button class="variant-opt ${i === 0 ? 'selected' : ''}" data-color="${c}">${c}</button>`
    ).join('');
    variantWrap.querySelectorAll('.variant-opt').forEach(opt => {
      opt.addEventListener('click', () => {
        variantWrap.querySelectorAll('.variant-opt').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
      });
    });
  }

  // Specs
  const specsBody = document.getElementById('specs-body');
  if (specsBody && product.specs) {
    specsBody.innerHTML = Object.entries(product.specs)
      .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('');
  }

  // Quantity + ATC
  let qty = 1;
  const qtyVal = document.getElementById('qty-val');
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');
  const atcBtn = document.getElementById('atc-btn');
  const wishBtn = document.getElementById('wish-btn');

  qtyMinus?.addEventListener('click', () => { if (qty > 1) { qty--; if (qtyVal) qtyVal.textContent = qty; } });
  qtyPlus?.addEventListener('click', () => { qty++; if (qtyVal) qtyVal.textContent = qty; });

  atcBtn?.addEventListener('click', () => {
    addToCart(product.id, qty);
    atcBtn.textContent = 'Added to Cart';
    atcBtn.disabled = true;
    setTimeout(() => { atcBtn.textContent = 'Add to Cart'; atcBtn.disabled = false; }, 1800);
    // Open drawer
    document.getElementById('cart-drawer')?.classList.add('open');
  });

  if (wishBtn) {
    const update = () => {
      const wished = isWishlisted(product.id);
      wishBtn.textContent = wished ? 'In Wishlist' : 'Add to Wishlist';
      wishBtn.className = wished ? 'btn btn-secondary btn-full' : 'btn btn-outline btn-full';
    };
    update();
    wishBtn.addEventListener('click', () => { toggleWishlist(product.id); update(); });
  }

  // Sticky ATC
  const stickyAtc = document.getElementById('sticky-atc');
  const stickyName = document.getElementById('sticky-name');
  const stickyPrice = document.getElementById('sticky-price');
  const stickyBtn = document.getElementById('sticky-atc-btn');

  if (stickyAtc) {
    if (stickyName) stickyName.textContent = product.name;
    if (stickyPrice) stickyPrice.textContent = formatPrice(product.price);
    stickyBtn?.addEventListener('click', () => addToCart(product.id, 1));

    const observer = new IntersectionObserver(entries => {
      stickyAtc.style.display = entries[0].isIntersecting ? 'none' : 'flex';
    }, { threshold: 0 });

    if (atcBtn) observer.observe(atcBtn);
  }

  // Accordion
  document.querySelectorAll('.accordion-item').forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    trigger?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`tab-${btn.dataset.tab}`)?.classList.add('active');
    });
  });

  // Related products
  const relatedGrid = document.getElementById('related-grid');
  if (relatedGrid) {
    const related = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);
    const extras = PRODUCTS.filter(p => p.id !== product.id && p.category !== product.category).slice(0, 3 - related.length);
    const all = [...related, ...extras].slice(0, 3);
    relatedGrid.innerHTML = all.map(renderProductCard).join('');
    attachCardListeners(relatedGrid);
  }
}

/* ============================================================
   CART PAGE
   ============================================================ */

function initCartPage() {
  const itemsEl = document.getElementById('cart-page-items');
  const emptyEl = document.getElementById('cart-page-empty');
  const filledEl = document.getElementById('cart-page-filled');
  const summaryBody = document.getElementById('cart-summary-body');
  const summaryEl = document.getElementById('cart-summary-actions');

  if (!itemsEl) return;

  function render() {
    const cart = getCart();
    if (cart.length === 0) {
      emptyEl?.classList.remove('hidden');
      filledEl?.classList.add('hidden');
      return;
    }
    emptyEl?.classList.add('hidden');
    filledEl?.classList.remove('hidden');

    itemsEl.innerHTML = cart.map(item => `
      <div class="cart-page-item" data-id="${item.id}">
        <div class="cart-page-item__img">${getCategoryIcon(item.category)}</div>
        <div class="cart-page-item__info">
          <div class="cart-page-item__cat">${item.category}</div>
          <div class="cart-page-item__name">${item.name}</div>
          <div class="cart-page-item__spec">${item.spec}</div>
        </div>
        <div class="cart-page-item__actions">
          <div class="cart-page-item__price">${formatPrice(item.price * item.qty)}</div>
          <div class="qty-stepper">
            <button class="qty-stepper__btn page-qty-btn" data-id="${item.id}" data-action="minus">−</button>
            <div class="qty-stepper__val">${item.qty}</div>
            <button class="qty-stepper__btn page-qty-btn" data-id="${item.id}" data-action="plus">+</button>
          </div>
          <button class="cart-item__remove page-remove-btn" data-id="${item.id}">Remove</button>
        </div>
      </div>
    `).join('');

    const subtotal = getCartTotal();
    const shipping = subtotal >= 5000 ? 0 : 499;
    const total = subtotal + shipping;
    const shipNote = shipping === 0
      ? '<div class="order-summary-ship-note ok">Free shipping applied</div>'
      : `<div class="order-summary-ship-note warn">Add ${formatPrice(5000 - subtotal)} more for free shipping</div>`;

    if (summaryBody) {
      summaryBody.innerHTML = `
        <div class="order-summary-row"><span class="order-summary-label">Subtotal</span><span class="order-summary-value">${formatPrice(subtotal)}</span></div>
        <div class="order-summary-row"><span class="order-summary-label">Shipping</span><span class="order-summary-value">${shipping === 0 ? 'Free' : formatPrice(shipping)}</span></div>
        <div class="order-summary-divider"></div>
        <div class="order-summary-total"><span>Total</span><span>${formatPrice(total)}</span></div>
        ${shipNote}
      `;
    }

    // Listeners
    itemsEl.querySelectorAll('.page-qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        const item = getCart().find(i => i.id === id);
        if (!item) return;
        updateCartQty(id, btn.dataset.action === 'plus' ? item.qty + 1 : item.qty - 1);
        render();
      });
    });

    itemsEl.querySelectorAll('.page-remove-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        removeFromCart(parseInt(btn.dataset.id));
        render();
      });
    });
  }

  render();
}

/* ============================================================
   CHECKOUT
   ============================================================ */

function initCheckout() {
  const form = document.getElementById('checkout-form');
  const formWrapper = document.getElementById('checkout-form-wrapper');
  const successEl = document.getElementById('order-success');
  const summaryItems = document.getElementById('checkout-summary-items');
  const summarySubtotal = document.getElementById('checkout-subtotal');
  const summaryShipping = document.getElementById('checkout-shipping');
  const summaryTotal = document.getElementById('checkout-total');
  const paymentOptions = document.querySelectorAll('.payment-option');
  const cardFields = document.getElementById('card-fields');

  if (!form) return;

  // Summary
  const cart = getCart();
  if (summaryItems) {
    summaryItems.innerHTML = cart.map(item => `
      <div class="order-summary-row" style="align-items:start">
        <span class="order-summary-label">${item.name}<br><span style="font-size:11px;color:var(--c-text-4)">Qty: ${item.qty}</span></span>
        <span class="order-summary-value">${formatPrice(item.price * item.qty)}</span>
      </div>
    `).join('');
  }

  const subtotal = getCartTotal();
  const shipping = subtotal >= 5000 ? 0 : 499;
  const total = subtotal + shipping;

  if (summarySubtotal) summarySubtotal.textContent = formatPrice(subtotal);
  if (summaryShipping) summaryShipping.textContent = shipping === 0 ? 'Free' : formatPrice(shipping);
  if (summaryTotal) summaryTotal.textContent = formatPrice(total);

  // Payment toggle
  paymentOptions.forEach(opt => {
    const radio = opt.querySelector('input[type="radio"]');
    opt.addEventListener('click', () => {
      paymentOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      if (radio) radio.checked = true;
      if (cardFields) {
        cardFields.classList.toggle('visible', radio?.value === 'card');
      }
    });
  });

  // Form submit
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('[required]').forEach(field => {
      field.classList.remove('is-error');
      if (!field.value.trim()) {
        field.classList.add('is-error');
        valid = false;
      }
    });

    if (!valid) {
      const firstError = form.querySelector('.is-error');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const orderId = 'LMN-' + Date.now().toString(36).toUpperCase().slice(-8);

    // Clear cart
    localStorage.removeItem('lumino-cart');
    updateCartBadge();

    // Show success
    if (formWrapper) formWrapper.style.display = 'none';
    const summaryPanel = document.getElementById('checkout-summary-panel');
    if (summaryPanel) summaryPanel.style.display = 'none';

    if (successEl) {
      successEl.classList.add('visible');
      const orderIdEl = successEl.querySelector('.order-success__id');
      if (orderIdEl) orderIdEl.textContent = `Order ID: ${orderId}`;
    }
  });
}

/* ============================================================
   SUPPORT — FAQ
   ============================================================ */

function initSupport() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    trigger?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ============================================================
   COLLECTIONS PAGE
   ============================================================ */

function initCollections() {
  const grid = document.getElementById('collections-product-grid');
  if (!grid) return;
  // Populate with all products initially
  grid.innerHTML = PRODUCTS.map(renderProductCard).join('');
  attachCardListeners(grid);
}

/* ============================================================
   GLOBAL 3D EFFECTS
   ============================================================ */

function initGlobal3D() {
  const main = document.querySelector('main');
  if (!main) return;

  // 1. Mouse Parallax Diorama
  window.addEventListener('mousemove', e => {
    if (window.matchMedia('(hover: none)').matches) return; // Skip on mobile
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    const rotateX = y * -2.5;
    const rotateY = x * 2.5;
    main.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  // 2. Scroll Z-Depth
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => {
    sec.style.transformStyle = 'preserve-3d';
    sec.style.willChange = 'transform';
  });
  
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        sections.forEach(sec => {
          const rect = sec.getBoundingClientRect();
          const centerLine = window.innerHeight / 2;
          const dist = Math.abs(rect.top + rect.height / 2 - centerLine);
          // Push further away from center down the Z-axis
          const zPush = Math.min(dist * -0.05, 0);
          sec.style.transform = `translateZ(${zPush}px)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  });
}

/* ============================================================
   INIT
   ============================================================ */

// Inline theme before DOM loads (prevent flash)
(function() {
  const t = localStorage.getItem('lumino-theme') || 'light';
  document.documentElement.dataset.theme = t;
})();

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initAnnounceBar();
  initNavbar();
  initSearch();
  initCartDrawer();
  updateCartBadge();
  updateWishlistBadge();
  initGlobal3D();
  initCanvasBackground();

  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';

  if (page === 'index.html' || page === '' || path.endsWith('/')) {
    initHomepage();
  } else if (page === 'shop.html') {
    initShop();
  } else if (page === 'product.html') {
    initProductDetail();
  } else if (page === 'cart.html') {
    initCartPage();
  } else if (page === 'checkout.html') {
    initCheckout();
  } else if (page === 'support.html') {
    initSupport();
  } else if (page === 'collections.html') {
    initCollections();
  }
});

/* ============================================================
   INTERACTIVE CANVAS BACKGROUND
   ============================================================ */

function initCanvasBackground() {
  const canvas = document.createElement('canvas');
  canvas.id = 'bg-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.zIndex = '-1';
  canvas.style.pointerEvents = 'none';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  
  let mouse = { x: -1000, y: -1000 };
  let ripples = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('click', e => {
    ripples.push({ x: e.clientX, y: e.clientY, radius: 0, life: 1 });
  });

  class Particle {
    constructor() {
      this.baseX = Math.random() * width;
      this.baseY = Math.random() * height;
      this.x = this.baseX;
      this.y = this.baseY;
      this.size = Math.random() * 1.5 + 0.5;
      this.color = document.documentElement.dataset.theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)';
      this.glowing = 0;
    }
    update() {
      // Mouse repulsion (Scatter)
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      let forceX = 0;
      let forceY = 0;

      if (dist < 150) { // Increased scatter radius
        const force = (150 - dist) / 150;
        forceX -= (dx / dist) * force * 15; // Increased scatter force
        forceY -= (dy / dist) * force * 15;
      }

      // Ripple repulsion and glowing
      for (let r of ripples) {
        const rdx = r.x - this.baseX;
        const rdy = r.y - this.baseY;
        const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
        // If particle is near the expanding ripple ring
        if (Math.abs(rdist - r.radius) < 30) {
          const rForce = r.life * 25;
          forceX += (rdx / rdist) * rForce;
          forceY += (rdy / rdist) * rForce;
          this.glowing = 1.0; // Trigger glow
        }
      }

      // Spring back to base
      this.x += (this.baseX + forceX - this.x) * 0.08;
      this.y += (this.baseY + forceY - this.y) * 0.08;
    }
    draw() {
      if (this.glowing > 0) {
        ctx.shadowBlur = 12 * this.glowing;
        const isDark = document.documentElement.dataset.theme === 'dark';
        const glowColor = isDark ? '#D4AF37' : '#C9A84C'; // Gold accent
        ctx.shadowColor = glowColor;
        ctx.fillStyle = glowColor;
        this.glowing -= 0.015; // Fade out
      } else {
        ctx.shadowBlur = 0;
        ctx.fillStyle = this.color;
      }
      
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size + (this.glowing * 1.5), 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function initParticles() {
    particles = [];
    const count = Math.floor((width * height) / 10000); // 1 per 100x100 area
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Update ripples
    for (let i = ripples.length - 1; i >= 0; i--) {
      let r = ripples[i];
      r.radius += 8;
      r.life -= 0.02;
      if (r.life <= 0) ripples.splice(i, 1);
    }

    // Update theme colors periodically
    const isDark = document.documentElement.dataset.theme === 'dark';
    const pColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)';

    particles.forEach(p => {
      p.color = pColor;
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  resize();
  animate();
}
