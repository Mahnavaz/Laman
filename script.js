// Language Management
let currentLang = localStorage.getItem('lang') || 'fa';

const translations = {
    fa: {
        dir: 'rtl',
        lang: 'fa'
    },
    en: {
        dir: 'ltr',
        lang: 'en'
    }
};

// Products Data
const products = [
    {
        id: 1,
        nameEn: 'Modern Park Bench',
        nameFa: 'نیمکت پارکی مدرن',
        descEn: 'Elegant wooden bench with steel frame',
        descFa: 'نیمکت چوبی زیبا با فریم فولادی',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        category: 'benches'
    },
    {
        id: 2,
        nameEn: 'Urban Waste Bin',
        nameFa: 'سطل زباله شهری',
        descEn: 'Durable steel waste bin with modern design',
        descFa: 'سطل زباله فولادی با طراحی مدرن',
        image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&q=80',
        category: 'trash-bins'
    },
    {
        id: 3,
        nameEn: 'LED Street Light',
        nameFa: 'چراغ خیابانی LED',
        descEn: 'Energy-efficient LED street lighting',
        descFa: 'روشنایی خیابانی LED با مصرف انرژی کم',
        image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80',
        category: 'lighting'
    }
];

// Initialize
function init() {
    applyLanguage();
    updateQuoteBadge();
    renderFeaturedProducts();
    
    // Event Listeners
    document.getElementById('langBtn').addEventListener('click', toggleLanguage);
    document.getElementById('mobileBtn')?.addEventListener('click', toggleMobileMenu);
}

// Language Functions
function toggleLanguage() {
    currentLang = currentLang === 'fa' ? 'en' : 'fa';
    localStorage.setItem('lang', currentLang);
    applyLanguage();
}

function applyLanguage() {
    const config = translations[currentLang];
    document.documentElement.dir = config.dir;
    document.documentElement.lang = config.lang;
    
    // Update button
    document.getElementById('langBtn').textContent = currentLang === 'fa' ? 'EN' : 'فا';
    
    // Update all translatable elements
    document.querySelectorAll('[data-en][data-fa]').forEach(el => {
        const key = currentLang === 'fa' ? 'data-fa' : 'data-en';
        el.textContent = el.getAttribute(key);
    });
}

// Quote Cart Functions
function getQuoteItems() {
    return JSON.parse(localStorage.getItem('quoteItems') || '[]');
}

function addToQuote(product) {
    const items = getQuoteItems();
    if (!items.find(item => item.id === product.id)) {
        items.push(product);
        localStorage.setItem('quoteItems', JSON.stringify(items));
        updateQuoteBadge();
        alert(currentLang === 'fa' ? 'محصول به لیست اضافه شد' : 'Product added to quote list');
    }
}

function removeFromQuote(id) {
    const items = getQuoteItems().filter(item => item.id !== id);
    localStorage.setItem('quoteItems', JSON.stringify(items));
    updateQuoteBadge();
}

function updateQuoteBadge() {
    const badge = document.getElementById('quoteBadge');
    if (badge) {
        const count = getQuoteItems().length;
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
}

// Render Products
function renderFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;
    
    container.innerHTML = products.map(product => `
        <a href="product.html?id=${product.id}" class="product-card">
            <div class="product-img">
                <img src="${product.image}" alt="${currentLang === 'fa' ? product.nameFa : product.nameEn}">
                <span class="product-badge">${currentLang === 'fa' ? 'جدید' : 'New'}</span>
            </div>
            <div class="product-info">
                <h3>${currentLang === 'fa' ? product.nameFa : product.nameEn}</h3>
                <p>${currentLang === 'fa' ? product.descFa : product.descEn}</p>
                <span class="product-btn">${currentLang === 'fa' ? 'درخواست قیمت' : 'Request Quote'} →</span>
            </div>
        </a>
    `).join('');
}

// Mobile Menu
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export for other pages
window.dibaApp = {
    products,
    currentLang,
    getQuoteItems,
    addToQuote,
    removeFromQuote,
    updateQuoteBadge,
    applyLanguage
};
