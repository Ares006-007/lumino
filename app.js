/* ========================================================================
   LUMINO — Core Application Logic
   ======================================================================== */

// ---------------------------------------------------------------------------
// Product Data
// ---------------------------------------------------------------------------
const PRODUCTS = [
  {
    id: 1,
    name: 'Aura Pro Over-Ear Headphones',
    category: 'Audio',
    price: 24999,
    original: 32000,
    spec: 'Active noise cancellation, 40h battery',
    rating: 4.8,
    reviews: 240,
    description: 'Precision-engineered over-ear headphones with adaptive noise cancellation, 40mm custom drivers, and up to 40 hours of battery life. Crafted with aerospace-grade aluminium and protein leather ear cushions.',
    specs: {
      'Driver': '40mm Beryllium',
      'Battery': '40 hours',
      'Connectivity': 'Bluetooth 5.3',
      'Weight': '248g',
      'ANC': 'Adaptive'
    }
  },
  {
    id: 2,
    name: 'Vertex S Smartwatch',
    category: 'Wearables',
    price: 18499,
    original: 22000,
    spec: 'AMOLED display, titanium case',
    rating: 4.7,
    reviews: 185,
    description: 'A refined smartwatch with a 1.4-inch AMOLED display, titanium case, and sapphire crystal glass. Tracks 100+ workouts, sleep stages, and heart health with medical-grade sensors.',
    specs: {
      'Display': '1.4" AMOLED',
      'Case': 'Grade 5 Titanium',
      'Battery': '14 days',
      'Water Resistance': '5ATM',
      'Sensors': 'SpO2, ECG, Temperature'
    }
  },
  {
    id: 3,
    name: 'Lumino X1 Flagship Phone',
    category: 'Mobile',
    price: 89999,
    original: null,
    spec: '6.7" LTPO display, Snapdragon 8 Gen 3',
    rating: 4.9,
    reviews: 520,
    description: 'The flagship Lumino X1 features a 6.7-inch LTPO AMOLED display, Snapdragon 8 Gen 3 chipset, and a triple 50MP camera system co-engineered with Hasselblad. Ceramic body with surgical steel frame.',
    specs: {
      'Display': '6.7" LTPO AMOLED',
      'Processor': 'Snapdragon 8 Gen 3',
      'Camera': '50MP Triple',
      'Battery': '5000mAh',
      'Storage': '256GB / 512GB'
    }
  },
  {
    id: 4,
    name: 'Aura Buds Pro',
    category: 'Audio',
    price: 11499,
    original: 14000,
    spec: 'Spatial audio, 30h total battery',
    rating: 4.6,
    reviews: 310,
    description: 'True wireless earbuds with 11mm dual-driver architecture, spatial audio processing, and adaptive transparency mode. IPX5 water resistant with 30 hours total battery life.',
    specs: {
      'Driver': '11mm Dual',
      'Battery': '30h total',
      'ANC': 'Hybrid',
      'Codec': 'LDAC, AAC',
      'IP Rating': 'IPX5'
    }
  },
  {
    id: 5,
    name: 'NovaCam 4K Webcam',
    category: 'Accessories',
    price: 8999,
    original: 11000,
    spec: '4K 30fps, auto-tracking',
    rating: 4.5,
    reviews: 128,
    description: 'Professional-grade 4K webcam with Sony STARVIS sensor, AI-powered auto-tracking, and studio-quality dual microphones. Magnetic privacy shutter and adjustable field of view.',
    specs: {
      'Resolution': '4K 30fps',
      'Sensor': 'Sony STARVIS',
      'Microphones': 'Dual Beamforming',
      'FOV': '65-90 adjustable',
      'Mount': 'Magnetic Universal'
    }
  },
  {
    id: 6,
    name: 'Blade Ultra Laptop',
    category: 'Mobile',
    price: 124999,
    original: null,
    spec: '15.6" 4K OLED, Intel i9, 32GB RAM',
    rating: 4.8,
    reviews: 96,
    description: 'Ultra-thin professional laptop with a 15.6-inch 4K OLED display, Intel Core i9-14900H, 32GB LPDDR5X, and 1TB PCIe 5.0 SSD. CNC-milled aluminium unibody at just 15.9mm thin.',
    specs: {
      'Display': '15.6" 4K OLED',
      'Processor': 'Intel i9-14900H',
      'Memory': '32GB LPDDR5X',
      'Storage': '1TB PCIe 5.0',
      'Weight': '1.68kg'
    }
  },
  {
    id: 7,
    name: 'Vertex Band 3',
    category: 'Wearables',
    price: 4999,
    original: 6500,
    spec: 'AMOLED band, 21-day battery',
    rating: 4.4,
    reviews: 445,
    description: 'Slim fitness band with a 1.62-inch AMOLED touch display, continuous heart rate and SpO2 monitoring, and an exceptional 21-day battery life. 5ATM water resistant.',
    specs: {
      'Display': '1.62" AMOLED',
      'Battery': '21 days',
      'Sensors': 'HR, SpO2',
      'Water Resistance': '5ATM',
      'Weight': '25g'
    }
  },
  {
    id: 8,
    name: 'Lumino Desk Speaker',
    category: 'Audio',
    price: 15999,
    original: 19000,
    spec: 'Stereo pair, room-adaptive EQ',
    rating: 4.7,
    reviews: 164,
    description: 'Desktop stereo speaker with room-adaptive EQ, dual full-range drivers, and a passive bass radiator. Anodised aluminium enclosure with zero-vibration isolation feet.',
    specs: {
      'Drivers': '2x 3" Full Range',
      'Power': '30W RMS',
      'Connectivity': 'USB-C, Bluetooth 5.2',
      'Material': 'Anodised Aluminium',
      'Features': 'Room-Adaptive EQ'
    }
  },
  {
    id: 9,
    name: 'ProCharge 120W GaN',
    category: 'Accessories',
    price: 3499,
    original: 4500,
    spec: '120W, 4 ports, GaN III',
    rating: 4.6,
    reviews: 372,
    description: 'Compact 120W GaN III charger with 2x USB-C PD 3.1 and 2x USB-A ports. Intelligent power distribution charges a laptop and phone simultaneously.',
    specs: {
      'Power': '120W Total',
      'Ports': '2x USB-C, 2x USB-A',
      'Technology': 'GaN III',
      'PD': '3.1 (100W max)',
      'Weight': '186g'
    }
  },
  {
    id: 10,
    name: 'ClearView 4K Monitor',
    category: 'Accessories',
    price: 42999,
    original: null,
    spec: '27" 4K IPS, 99% DCI-P3',
    rating: 4.8,
    reviews: 89,
    description: 'Professional 27-inch 4K IPS monitor with 99% DCI-P3 coverage, factory-calibrated Delta E<1, and USB-C 96W power delivery. Nano-texture anti-glare coating.',
    specs: {
      'Display': '27" 4K IPS',
      'Color': '99% DCI-P3',
      'Calibration': 'Delta E < 1',
      'USB-C': '96W PD',
      'Panel': 'Nano-texture AG'
    }
  },
  {
    id: 11,
    name: 'Aura Studio Buds',
    category: 'Audio',
    price: 7499,
    original: 9000,
    spec: 'Open-ear design, 24h battery',
    rating: 4.3,
    reviews: 198,
    description: 'Open-ear studio buds designed for extended listening sessions. 14.2mm drivers deliver natural soundstage without ear canal fatigue. 24 hours total battery life.',
    specs: {
      'Driver': '14.2mm',
      'Battery': '24h total',
      'Design': 'Open-ear',
      'Codec': 'aptX, AAC',
      'Weight': '4.5g per bud'
    }
  },
  {
    id: 12,
    name: 'KeyMaster Pro Keyboard',
    category: 'Accessories',
    price: 12999,
    original: 16000,
    spec: 'Mechanical, hot-swap, aluminium',
    rating: 4.7,
    reviews: 256,
    description: 'Premium mechanical keyboard with hot-swappable switches, per-key configurable actuation, and a CNC aluminium case. Gasket-mounted for a refined typing experience.',
    specs: {
      'Switches': 'Hot-swap Mechanical',
      'Layout': '75% Compact',
      'Case': 'CNC Aluminium',
      'Mount': 'Gasket',
      'Connectivity': 'USB-C / Bluetooth'
    }
  }
];


// ---------------------------------------------------------------------------
// Category Icons (SVG)
// ---------------------------------------------------------------------------
const CATEGORY_ICONS = {
  Audio: '<svg viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>',
  Wearables: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><polyline points="12 9 12 12 13.5 13.5"/><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"/></svg>',
  Mobile: '<svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
  Accessories: '<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>'
};


// ---------------------------------------------------------------------------
// Cart State
// ---------------------------------------------------------------------------
let cart = JSON.parse(localStorage.getItem('lumino_cart') || '[]');

function saveCart() {
  localStorage.setItem('lumino_cart', JSON.stringify(cart));
  updateCartDot();
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      spec: product.spec,
      qty: 1
    });
  }
  saveCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
}

function updateCartQty(productId, newQty) {
  if (newQty <= 0) {
    removeFromCart(productId);
    return;
  }
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty = newQty;
    saveCart();
  }
}

function updateCartDot() {
  const dots = document.querySelectorAll('.cart-dot');
  const count = getCartCount();
  dots.forEach(dot => {
    if (count > 0) {
      dot.classList.add('visible');
    } else {
      dot.classList.remove('visible');
    }
  });
}

function formatPrice(num) {
  return '\u20B9' + num.toLocaleString('en-IN');
}


// ---------------------------------------------------------------------------
// Product Card Renderer
// ---------------------------------------------------------------------------
function renderProductCard(product) {
  const icon = CATEGORY_ICONS[product.category] || '';
  const originalHTML = product.original
    ? `<span class="price-original">${formatPrice(product.original)}</span>`
    : '';

  return `
    <div class="product-card" data-category="${product.category}">
      <a href="product.html?id=${product.id}">
        <div class="product-card__image">${icon}</div>
      </a>
      <div class="product-card__tag">${product.category}</div>
      <div class="product-card__name"><a href="product.html?id=${product.id}">${product.name}</a></div>
      <div class="product-card__spec">${product.spec}</div>
      <div class="product-card__bottom">
        <div class="product-card__prices">
          <span class="price">${formatPrice(product.price)}</span>
          ${originalHTML}
        </div>
        <button class="product-card__add" data-id="${product.id}" aria-label="Add to cart">+</button>
      </div>
    </div>
  `;
}


// ---------------------------------------------------------------------------
// Search Overlay
// ---------------------------------------------------------------------------
function initSearch() {
  const searchBtn = document.getElementById('search-btn');
  const overlay = document.getElementById('search-overlay');
  if (!searchBtn || !overlay) return;

  const input = overlay.querySelector('.search-overlay__input');
  const results = overlay.querySelector('.search-results');
  const closeBtn = overlay.querySelector('.search-overlay__close');

  searchBtn.addEventListener('click', () => {
    overlay.classList.add('visible');
    setTimeout(() => input.focus(), 100);
  });

  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('visible');
    input.value = '';
    results.innerHTML = '';
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('visible')) {
      overlay.classList.remove('visible');
      input.value = '';
      results.innerHTML = '';
    }
  });

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    if (!q) {
      results.innerHTML = '';
      return;
    }
    const matches = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
    results.innerHTML = matches.map(p => `
      <div class="search-result">
        <a href="product.html?id=${p.id}">
          <span class="search-result__name">${p.name}</span>
          <span class="search-result__price">${formatPrice(p.price)}</span>
        </a>
      </div>
    `).join('');
  });
}


// ---------------------------------------------------------------------------
// Homepage Logic
// ---------------------------------------------------------------------------
function initHomepage() {
  const grid = document.getElementById('featured-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!grid) return;

  const featured = [1, 2, 3, 4]; // default featured IDs

  function renderGrid(category) {
    let products;
    if (category === 'ALL') {
      products = PRODUCTS.filter(p => featured.includes(p.id));
    } else {
      products = PRODUCTS.filter(p => p.category === category).slice(0, 4);
    }
    grid.innerHTML = products.map(renderProductCard).join('');
    attachAddToCartListeners(grid);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGrid(btn.dataset.category);
    });
  });

  renderGrid('ALL');
}


// ---------------------------------------------------------------------------
// Shop Page Logic
// ---------------------------------------------------------------------------
function initShop() {
  const grid = document.getElementById('shop-grid');
  const countEl = document.getElementById('product-count');
  const catBtns = document.querySelectorAll('.shop-sidebar__item[data-category]');
  const priceRange = document.getElementById('price-range');
  const priceMax = document.getElementById('price-max');
  const sortSelect = document.getElementById('sort-select');

  if (!grid) return;

  let activeCategory = 'All';
  let maxPrice = 150000;

  function renderShop() {
    let filtered = PRODUCTS.filter(p => {
      if (activeCategory !== 'All' && p.category !== activeCategory) return false;
      if (p.price > maxPrice) return false;
      return true;
    });

    // Sort
    if (sortSelect) {
      const sortVal = sortSelect.value;
      if (sortVal === 'price-low') filtered.sort((a, b) => a.price - b.price);
      else if (sortVal === 'price-high') filtered.sort((a, b) => b.price - a.price);
      else if (sortVal === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    grid.innerHTML = filtered.map(renderProductCard).join('');
    if (countEl) countEl.textContent = filtered.length + ' product' + (filtered.length !== 1 ? 's' : '');
    attachAddToCartListeners(grid);
  }

  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category;
      renderShop();
    });
  });

  if (priceRange) {
    priceRange.addEventListener('input', () => {
      maxPrice = parseInt(priceRange.value);
      if (priceMax) priceMax.textContent = formatPrice(maxPrice);
      renderShop();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', renderShop);
  }

  renderShop();
}


// ---------------------------------------------------------------------------
// Product Detail Page Logic
// ---------------------------------------------------------------------------
function initProductDetail() {
  const container = document.getElementById('product-detail');
  const alsoGrid = document.getElementById('also-like-grid');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    container.innerHTML = '<div style="padding:56px 32px;color:var(--muted);">Product not found.</div>';
    return;
  }

  // Update page title
  document.title = product.name + ' — LUMINO';

  const icon = CATEGORY_ICONS[product.category] || '';
  const originalHTML = product.original
    ? `<span class="price-original">${formatPrice(product.original)}</span>`
    : '';

  const specsHTML = Object.entries(product.specs).map(([k, v]) =>
    `<tr><td>${k}</td><td>${v}</td></tr>`
  ).join('');

  container.innerHTML = `
    <div class="product-detail__image">${icon}</div>
    <div class="product-detail__info">
      <div class="product-detail__tag">${product.category}</div>
      <h1 class="product-detail__name">${product.name}</h1>
      <div class="product-detail__rating">${product.rating} — ${product.reviews} reviews</div>
      <div class="product-detail__price">
        <span class="price">${formatPrice(product.price)}</span>
        ${originalHTML}
      </div>
      <p class="product-detail__desc">${product.description}</p>
      <table class="specs-table">
        ${specsHTML}
      </table>
      <div class="quantity-selector">
        <span class="quantity-selector__label">Quantity</span>
        <button class="quantity-selector__btn" id="qty-minus">-</button>
        <div class="quantity-selector__value" id="qty-value">1</div>
        <button class="quantity-selector__btn" id="qty-plus">+</button>
      </div>
      <div class="product-detail__actions">
        <button class="btn-gold btn-full" id="add-to-cart-btn">ADD TO CART</button>
        <button class="btn-ghost btn-full" id="add-to-wishlist-btn">ADD TO WISHLIST</button>
      </div>
    </div>
  `;

  let qty = 1;
  const qtyVal = document.getElementById('qty-value');
  document.getElementById('qty-minus').addEventListener('click', () => {
    if (qty > 1) { qty--; qtyVal.textContent = qty; }
  });
  document.getElementById('qty-plus').addEventListener('click', () => {
    qty++; qtyVal.textContent = qty;
  });

  document.getElementById('add-to-cart-btn').addEventListener('click', () => {
    for (let i = 0; i < qty; i++) addToCart(product.id);
    const btn = document.getElementById('add-to-cart-btn');
    btn.textContent = 'ADDED';
    setTimeout(() => { btn.textContent = 'ADD TO CART'; }, 1500);
  });

  // Also like
  if (alsoGrid) {
    const others = PRODUCTS.filter(p => p.id !== product.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    alsoGrid.innerHTML = others.map(renderProductCard).join('');
    attachAddToCartListeners(alsoGrid);
  }
}


// ---------------------------------------------------------------------------
// Cart Page Logic
// ---------------------------------------------------------------------------
function initCart() {
  const cartItemsEl = document.getElementById('cart-items-list');
  const emptyEl = document.getElementById('cart-empty');
  const filledEl = document.getElementById('cart-filled');
  const summaryEl = document.getElementById('order-summary-content');

  if (!cartItemsEl) return;

  function renderCartPage() {
    if (cart.length === 0) {
      if (emptyEl) emptyEl.style.display = 'block';
      if (filledEl) filledEl.style.display = 'none';
      return;
    }
    if (emptyEl) emptyEl.style.display = 'none';
    if (filledEl) filledEl.style.display = 'flex';

    cartItemsEl.innerHTML = cart.map(item => {
      const icon = CATEGORY_ICONS[item.category] || '';
      return `
        <div class="cart-item" data-id="${item.id}">
          <div class="cart-item__image">${icon}</div>
          <div class="cart-item__details">
            <div class="cart-item__name">${item.name}</div>
            <div class="cart-item__spec">${item.spec}</div>
          </div>
          <div class="cart-item__qty">
            <button class="cart-item__qty-btn" data-action="minus">-</button>
            <div class="cart-item__qty-value">${item.qty}</div>
            <button class="cart-item__qty-btn" data-action="plus">+</button>
          </div>
          <div class="cart-item__price">${formatPrice(item.price * item.qty)}</div>
          <button class="cart-item__remove" data-remove="${item.id}">REMOVE</button>
        </div>
      `;
    }).join('');

    // Summary
    const subtotal = getCartTotal();
    const shipping = subtotal >= 5000 ? 0 : 499;
    const total = subtotal + shipping;
    const shippingText = subtotal >= 5000
      ? 'FREE'
      : formatPrice(shipping);
    const shippingMsg = subtotal < 5000
      ? `Add ${formatPrice(5000 - subtotal)} more for free shipping.`
      : '';

    summaryEl.innerHTML = `
      <div class="order-summary__row">
        <span class="order-summary__label">Subtotal</span>
        <span class="order-summary__value">${formatPrice(subtotal)}</span>
      </div>
      <div class="order-summary__row">
        <span class="order-summary__label">Shipping</span>
        <span class="order-summary__value">${shippingText}</span>
      </div>
      ${shippingMsg ? `<div class="order-summary__shipping-msg">${shippingMsg}</div>` : ''}
      <div class="order-summary__total">
        <span class="order-summary__total-label">Total</span>
        <span class="order-summary__total-value">${formatPrice(total)}</span>
      </div>
      <a href="checkout.html" class="btn-gold btn-full" style="display:block;text-align:center;">PROCEED TO CHECKOUT</a>
    `;

    // Event listeners
    cartItemsEl.querySelectorAll('.cart-item__qty-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const row = e.target.closest('.cart-item');
        const itemId = parseInt(row.dataset.id);
        const cartItem = cart.find(i => i.id === itemId);
        if (!cartItem) return;
        if (btn.dataset.action === 'plus') {
          updateCartQty(itemId, cartItem.qty + 1);
        } else {
          updateCartQty(itemId, cartItem.qty - 1);
        }
        renderCartPage();
      });
    });

    cartItemsEl.querySelectorAll('.cart-item__remove').forEach(btn => {
      btn.addEventListener('click', () => {
        removeFromCart(parseInt(btn.dataset.remove));
        renderCartPage();
      });
    });
  }

  renderCartPage();
}


// ---------------------------------------------------------------------------
// Checkout Page Logic
// ---------------------------------------------------------------------------
function initCheckout() {
  const form = document.getElementById('checkout-form');
  const formWrapper = document.getElementById('checkout-form-wrapper');
  const successEl = document.getElementById('order-success');
  const summaryItems = document.getElementById('checkout-items');
  const summarySubtotal = document.getElementById('checkout-subtotal');
  const summaryShipping = document.getElementById('checkout-shipping');
  const summaryTotal = document.getElementById('checkout-total');
  const paymentRadios = document.querySelectorAll('input[name="payment"]');
  const cardFields = document.getElementById('card-fields');

  if (!form) return;

  // Render summary
  if (summaryItems) {
    summaryItems.innerHTML = cart.map(item => `
      <div class="checkout-summary__item">
        <div>
          <div class="checkout-summary__item-name">${item.name}</div>
          <div class="checkout-summary__item-qty">Qty: ${item.qty}</div>
        </div>
        <div class="checkout-summary__item-price">${formatPrice(item.price * item.qty)}</div>
      </div>
    `).join('');
  }

  const subtotal = getCartTotal();
  const shipping = subtotal >= 5000 ? 0 : 499;
  const total = subtotal + shipping;

  if (summarySubtotal) summarySubtotal.textContent = formatPrice(subtotal);
  if (summaryShipping) summaryShipping.textContent = subtotal >= 5000 ? 'FREE' : formatPrice(shipping);
  if (summaryTotal) summaryTotal.textContent = formatPrice(total);

  // Payment toggle
  paymentRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.value === 'card' && radio.checked) {
        cardFields.classList.add('visible');
      } else {
        cardFields.classList.remove('visible');
      }
    });
  });

  // Form validation & submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      field.classList.remove('error');
      if (!field.value.trim()) {
        field.classList.add('error');
        valid = false;
      }
    });

    // If card selected, validate card fields
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    if (selectedPayment && selectedPayment.value === 'card') {
      const cardInputs = cardFields.querySelectorAll('input');
      cardInputs.forEach(input => {
        input.classList.remove('error');
        if (!input.value.trim()) {
          input.classList.add('error');
          valid = false;
        }
      });
    }

    if (!valid) return;

    // Generate order ID
    const orderId = 'LMN-' + Date.now().toString(36).toUpperCase();

    // Clear cart
    cart = [];
    saveCart();

    // Show success
    if (formWrapper) formWrapper.style.display = 'none';
    document.querySelector('.checkout-summary').style.display = 'none';
    successEl.querySelector('.order-success__id').textContent = 'Order ID: ' + orderId;
    successEl.classList.add('visible');
  });
}


// ---------------------------------------------------------------------------
// Attach Add to Cart Listeners
// ---------------------------------------------------------------------------
function attachAddToCartListeners(container) {
  container.querySelectorAll('.product-card__add').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = parseInt(btn.dataset.id);
      addToCart(id);
      btn.textContent = '\u2713';
      btn.style.borderColor = 'var(--gold)';
      btn.style.color = 'var(--gold)';
      setTimeout(() => {
        btn.textContent = '+';
        btn.style.borderColor = '';
        btn.style.color = '';
      }, 1200);
    });
  });
}


// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  updateCartDot();
  initSearch();

  // Determine page
  const path = window.location.pathname;
  if (path.endsWith('index.html') || path.endsWith('/') || path === '') {
    initHomepage();
  } else if (path.endsWith('shop.html')) {
    initShop();
  } else if (path.endsWith('product.html')) {
    initProductDetail();
  } else if (path.endsWith('cart.html')) {
    initCart();
  } else if (path.endsWith('checkout.html')) {
    initCheckout();
  }
});
