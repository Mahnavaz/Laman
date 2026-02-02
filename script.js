// Language Management
let currentLang = localStorage.getItem('lang') || 'en';

const translations = {
    fa: {
        dir: 'rtl',
        lang: 'fa'
    },
    en: {
        dir: 'ltr',
        lang: 'en'
    },
    ar: {
        dir: 'rtl',
        lang: 'ar'
    }
};

// Apply language on page load
document.addEventListener('DOMContentLoaded', function() {
    applyLanguage(currentLang);
    
    // Language switcher
    const langCurrent = document.getElementById('langCurrent');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    
    if (langCurrent && langDropdown) {
        // Toggle dropdown
        langCurrent.addEventListener('click', function(e) {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
            langCurrent.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function() {
            langDropdown.classList.remove('active');
            langCurrent.classList.remove('active');
        });
        
        // Language selection
        langOptions.forEach(function(option) {
            option.addEventListener('click', function(e) {
                e.stopPropagation();
                const selectedLang = this.getAttribute('data-lang');
                changeLanguage(selectedLang);
                langDropdown.classList.remove('active');
                langCurrent.classList.remove('active');
            });
        });
    }
});

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    const html = document.documentElement;
    const config = translations[lang];
    
    if (!config) return;
    
    // Set HTML attributes
    html.setAttribute('lang', config.lang);
    html.setAttribute('dir', config.dir);
    
    // Update current language button
    const langCurrent = document.getElementById('langCurrent');
    if (langCurrent) {
        // Get the SVG element
        const svg = langCurrent.querySelector('svg');
        // Update the text content while preserving the SVG
        langCurrent.childNodes[0].textContent = lang.toUpperCase() + ' ';
    }
    
    // Update all elements with data-en, data-fa, data-ar attributes
    const elements = document.querySelectorAll('[data-en], [data-fa], [data-ar]');
    elements.forEach(function(element) {
        const text = element.getAttribute('data-' + lang);
        if (text) {
            // Check if it's a placeholder
            if (element.hasAttribute('data-' + lang + '-placeholder')) {
                element.placeholder = element.getAttribute('data-' + lang + '-placeholder');
            } else if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        }
    });
    
    // Update placeholders
    const placeholders = document.querySelectorAll('[data-en-placeholder], [data-fa-placeholder], [data-ar-placeholder]');
    placeholders.forEach(function(element) {
        const placeholder = element.getAttribute('data-' + lang + '-placeholder');
        if (placeholder) {
            element.placeholder = placeholder;
        }
    });
}

// Products Data
const products = [
    {
        id: 1,
        nameEn: 'Tar Bench',
        nameFa: 'نیمکت تار',
        descEn: 'Modern bench inspired by musical strings design',
        descFa: 'نیمکت مدرن با طراحی الهام گرفته از تار موسیقی',
        image: 'laman-products/3-1.png',
        category: 'benches',
        url: 'product-tar-bench.html'
    },
    {
        id: 2,
        nameEn: 'Tar Bench with Backrest',
        nameFa: 'نیمکت تار با تکیه‌گاه',
        descEn: 'Ergonomic bench with comfortable backrest',
        descFa: 'نیمکت ارگونومیک با تکیه‌گاه راحت',
        image: 'laman-products/4-1.png',
        category: 'benches',
        url: 'product-tar-bench-backrest.html'
    },
    {
        id: 3,
        nameEn: 'Chaft Bench',
        nameFa: 'نیمکت چفت',
        descEn: 'Minimal design with unique connection system',
        descFa: 'طراحی مینیمال با سیستم اتصال منحصر به فرد',
        image: 'laman-products/5-1.png',
        category: 'benches',
        url: 'product-chaft-bench.html'
    },
    {
        id: 4,
        nameEn: 'Pood Bench',
        nameFa: 'نیمکت پود',
        descEn: 'Contemporary design inspired by traditional weaving',
        descFa: 'طراحی معاصر با الهام از بافت سنتی',
        image: 'laman-products/6-1.png',
        category: 'benches',
        url: 'product-pood-bench.html'
    },
    {
        id: 5,
        nameEn: 'Kalaf Bench',
        nameFa: 'نیمکت کلاف',
        descEn: 'Organic form with flowing lines',
        descFa: 'فرم ارگانیک با خطوط روان',
        image: 'laman-products/7-1.png',
        category: 'benches',
        url: 'product-kalaf-bench.html'
    },
    {
        id: 6,
        nameEn: 'Bast Bench',
        nameFa: 'نیمکت بست',
        descEn: 'Easy installation with high stability',
        descFa: 'نصب آسان با پایداری بالا',
        image: 'laman-products/8-1.png',
        category: 'benches',
        url: 'product-bast-bench.html'
    },
    {
        id: 7,
        nameEn: 'Pallet Platform 01',
        nameFa: 'پلتفرم پالت ۰۱',
        descEn: 'Modular platform with integrated seating',
        descFa: 'پلتفرم ماژولار با نشیمن یکپارچه',
        image: 'laman-products/1-1.png',
        category: 'platforms',
        url: 'product-pallet-platform-01.html'
    },
    {
        id: 8,
        nameEn: 'Pallet Platform 02',
        nameFa: 'پلتفرم پالت ۰۲',
        descEn: 'Flexible urban platform without bench',
        descFa: 'پلتفرم شهری انعطاف‌پذیر بدون نیمکت',
        image: 'laman-products/2-1.png',
        category: 'platforms',
        url: 'product-pallet-platform-02.html'
    },
    {
        id: 9,
        nameEn: 'Picnic Set',
        nameFa: 'ست پیک‌نیک',
        descEn: 'Complete picnic table and bench set',
        descFa: 'ست کامل میز و نیمکت پیک‌نیک',
        image: 'laman-products/9-1.png',
        category: 'tables',
        url: 'product-picnic-set.html'
    },
    {
        id: 10,
        nameEn: 'Pergola',
        nameFa: 'پرگولا',
        descEn: 'Modular urban structure with shading capability',
        descFa: 'سازه مدولار شهری با قابلیت سایه‌اندازی',
        image: 'laman-products/10-1.png',
        category: 'canopies',
        url: 'product-pergola.html'
    },
    {
        id: 11,
        nameEn: 'Baft Canopy',
        nameFa: 'سایه‌بان بافت',
        descEn: 'Canopy with unique woven design',
        descFa: 'سایه‌بان با طراحی بافت منحصر به فرد',
        image: 'laman-products/11-1.png',
        category: 'canopies',
        url: 'product-baft-canopy.html'
    },
    {
        id: 12,
        nameEn: 'Tree Guard',
        nameFa: 'محافظ درخت',
        descEn: 'Essential element for protecting tree trunks',
        descFa: 'المان ضروری برای حفاظت از تنه درختان',
        image: 'laman-products/12-1.png',
        category: 'details',
        url: 'product-tree-guard.html'
    }
];

// Initialize
function init() {
    updateQuoteBadge();
    initCarousel();
    initCategoryScroll();
    initSearch();
    initScrollToTop();
    
    // Event Listeners
    const mobileBtn = document.getElementById('mobileBtn');
    if (mobileBtn) mobileBtn.addEventListener('click', toggleMobileMenu);
}

// Scroll to Top
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTop');
    
    if (scrollBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });
        
        // Scroll to top on click
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Category Scroll
function initCategoryScroll() {
    const scrollBtn = document.getElementById('categoryScrollBtn');
    const scrollTrack = document.querySelector('.categories-scroll-track');
    
    if (scrollBtn && scrollTrack) {
        scrollBtn.addEventListener('click', () => {
            const scrollAmount = document.documentElement.dir === 'rtl' ? -400 : 400;
            scrollTrack.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }
}

// Category Scroll
function initCategoryScroll() {
    const scrollBtn = document.getElementById('categoryScrollNext');
    const scrollContainer = document.querySelector('.categories-scroll');
    
    if (scrollBtn && scrollContainer) {
        scrollBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
    }
}

// Search Functionality
function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchClose = document.getElementById('searchClose');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchInput = document.getElementById('searchInput');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            searchInput.focus();
        });
    }
    
    if (searchClose) {
        searchClose.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
        });
    }
    
    if (searchOverlay) {
        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) {
                searchOverlay.classList.remove('active');
            }
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });
    }
}

function performSearch(query) {
    const resultsContainer = document.getElementById('searchResults');
    if (!resultsContainer) return;
    
    if (!query.trim()) {
        resultsContainer.innerHTML = '';
        return;
    }
    
    const results = products.filter(product => {
        const searchText = currentLang === 'fa' 
            ? `${product.nameFa} ${product.descFa}`.toLowerCase()
            : `${product.nameEn} ${product.descEn}`.toLowerCase();
        return searchText.includes(query.toLowerCase());
    });
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `<p style="text-align: center; color: #999;">${currentLang === 'fa' ? 'نتیجه‌ای یافت نشد' : 'No results found'}</p>`;
        return;
    }
    
    resultsContainer.innerHTML = results.map(product => `
        <a href="${product.url}" class="search-result-item">
            <h4>${currentLang === 'fa' ? product.nameFa : product.nameEn}</h4>
            <p style="color: #999; font-size: 0.875rem;">${currentLang === 'fa' ? product.descFa : product.descEn}</p>
        </a>
    `).join('');
}

// Hero Carousel
let carouselPosition = 0;
const totalCards = 9;
const cardsToShow = 3;
const maxPosition = totalCards - cardsToShow;

// City Carousel
let cityCarouselPosition = 0;
const totalCityCards = 6;
const cityCardsToShow = 3;
const maxCityPosition = totalCityCards - cityCardsToShow;

function initCarousel() {
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    
    if (prevBtn) prevBtn.addEventListener('click', prevCard);
    if (nextBtn) nextBtn.addEventListener('click', nextCard);
    
    // City Carousel
    const cityPrevBtn = document.getElementById('cityCarouselPrev');
    const cityNextBtn = document.getElementById('cityCarouselNext');
    
    if (cityPrevBtn) cityPrevBtn.addEventListener('click', prevCityCard);
    if (cityNextBtn) cityNextBtn.addEventListener('click', nextCityCard);
}

function updateCarousel() {
    const track = document.getElementById('heroTrack');
    if (!track) return;
    
    const cardWidth = track.children[0].offsetWidth;
    const gap = 24; // 1.5rem
    const offset = -(carouselPosition * (cardWidth + gap));
    track.style.transform = `translateX(${offset}px)`;
}

function updateCityCarousel() {
    const track = document.getElementById('cityTrack');
    if (!track) return;
    
    const cardWidth = track.children[0].offsetWidth;
    const gap = 24; // 1.5rem
    const offset = -(cityCarouselPosition * (cardWidth + gap));
    track.style.transform = `translateX(${offset}px)`;
}

function nextCard() {
    if (carouselPosition < maxPosition) {
        carouselPosition++;
        updateCarousel();
    }
}

function prevCard() {
    if (carouselPosition > 0) {
        carouselPosition--;
        updateCarousel();
    }
}

function nextCityCard() {
    if (cityCarouselPosition < maxCityPosition) {
        cityCarouselPosition++;
        updateCityCarousel();
    }
}

function prevCityCard() {
    if (cityCarouselPosition > 0) {
        cityCarouselPosition--;
        updateCityCarousel();
    }
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
    
    // Update all translatable elements
    document.querySelectorAll('[data-en][data-fa]').forEach(el => {
        const key = currentLang === 'fa' ? 'data-fa' : 'data-en';
        el.innerHTML = el.getAttribute(key);
    });
    
    // Update placeholders
    document.querySelectorAll('[data-en-placeholder][data-fa-placeholder]').forEach(el => {
        const key = currentLang === 'fa' ? 'data-fa-placeholder' : 'data-en-placeholder';
        el.placeholder = el.getAttribute(key);
    });
    
    // Re-render products if on homepage
    const featuredContainer = document.getElementById('featuredProducts');
    if (featuredContainer) {
        renderFeaturedProducts();
    }
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


// Hero Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const heroTrack = document.getElementById('heroTrack');
    const heroPrev = document.getElementById('heroPrev');
    const heroNext = document.getElementById('heroNext');
    
    if (heroTrack && heroPrev && heroNext) {
        const cards = heroTrack.querySelectorAll('.hero-carousel-card');
        const totalCards = cards.length;
        
        function updateCarouselPosition() {
            const offset = currentSlide * 100;
            heroTrack.style.transform = `translateX(-${offset}%)`;
            
            // Update button states
            heroPrev.style.opacity = currentSlide === 0 ? '0.5' : '1';
            heroPrev.style.cursor = currentSlide === 0 ? 'default' : 'pointer';
            heroNext.style.opacity = currentSlide >= totalCards - 1 ? '0.5' : '1';
            heroNext.style.cursor = currentSlide >= totalCards - 1 ? 'default' : 'pointer';
        }
        
        heroPrev.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                updateCarouselPosition();
            }
        });
        
        heroNext.addEventListener('click', () => {
            if (currentSlide < totalCards - 1) {
                currentSlide++;
                updateCarouselPosition();
            }
        });
        
        // Auto-play carousel
        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalCards;
            updateCarouselPosition();
        }, 5000);
        
        // Initialize
        updateCarouselPosition();
    }
});


// ===================================
// Product Detail Page Gallery & Lightbox
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Gallery Slider
    const gallerySlider = document.getElementById('gallerySlider');
    const galleryPrev = document.getElementById('galleryPrev');
    const galleryNext = document.getElementById('galleryNext');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const readMoreBtn = document.getElementById('readMoreBtn');
    const expandableContent = document.getElementById('expandableContent');
    
    // Lightbox variables (declare early)
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxCounter = document.getElementById('lightboxCounter');
    
    let lightboxIndex = 0;
    let lightboxImages = [];
    
    function updateLightboxCounter() {
        if (lightboxCounter && lightboxImages.length > 0) {
            lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
        }
    }
    
    if (gallerySlider) {
        const images = gallerySlider.querySelectorAll('.gallery-main-image');
        let currentIndex = 0;
        
        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
            
            thumbnails.forEach((thumb, i) => {
                thumb.classList.toggle('active', i === index);
            });
            
            currentIndex = index;
        }
        
        // Initialize first image as active
        showImage(0);
        
        if (galleryPrev) {
            galleryPrev.addEventListener('click', () => {
                const newIndex = (currentIndex - 1 + images.length) % images.length;
                showImage(newIndex);
            });
        }
        
        if (galleryNext) {
            galleryNext.addEventListener('click', () => {
                const newIndex = (currentIndex + 1) % images.length;
                showImage(newIndex);
            });
        }
        
        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                showImage(index);
            });
        });
        
        // Click on main image to open lightbox - use currentIndex
        images.forEach((img) => {
            img.addEventListener('click', () => {
                openLightbox(currentIndex);
            });
        });
    }
    
    // Read More Button
    if (readMoreBtn && expandableContent) {
        readMoreBtn.addEventListener('click', () => {
            expandableContent.classList.toggle('expanded');
            readMoreBtn.classList.toggle('active');
            
            const span = readMoreBtn.querySelector('span');
            if (expandableContent.classList.contains('expanded')) {
                span.textContent = span.getAttribute('data-en') === 'Read more' ? 'Read less' : 'کمتر بخوانید';
            } else {
                span.textContent = span.getAttribute('data-en') === 'Read more' ? 'Read more' : 'بیشتر بخوانید';
            }
        });
    }
    
    // Lightbox functions
    function openLightbox(index) {
        if (!lightbox || !gallerySlider) return;
        
        const images = gallerySlider.querySelectorAll('.gallery-main-image');
        lightboxImages = Array.from(images).map(img => img.src);
        lightboxIndex = index;
        
        lightboxImage.src = lightboxImages[lightboxIndex];
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateLightboxCounter();
    }
    
    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', () => {
            lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
            lightboxImage.src = lightboxImages[lightboxIndex];
            updateLightboxCounter();
        });
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', () => {
            lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
            lightboxImage.src = lightboxImages[lightboxIndex];
            updateLightboxCounter();
        });
    }
    
    // Keyboard navigation for lightbox
    document.addEventListener('keydown', (e) => {
        if (!lightbox || !lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            lightboxPrev && lightboxPrev.click();
        } else if (e.key === 'ArrowRight') {
            lightboxNext && lightboxNext.click();
        }
    });
});


// Similar Products Navigation
document.addEventListener('DOMContentLoaded', function() {
    const similarGrid = document.getElementById('similarGrid');
    const similarPrev = document.getElementById('similarPrev');
    const similarNext = document.getElementById('similarNext');
    
    if (similarGrid && similarPrev && similarNext) {
        similarPrev.addEventListener('click', function() {
            similarGrid.scrollBy({
                left: -350,
                behavior: 'smooth'
            });
        });
        
        similarNext.addEventListener('click', function() {
            similarGrid.scrollBy({
                left: 350,
                behavior: 'smooth'
            });
        });
    }
});


// Categories Navigation
document.addEventListener('DOMContentLoaded', function() {
    const categoriesTrack = document.getElementById('categoriesTrack');
    const categoriesPrev = document.getElementById('categoriesPrev');
    const categoriesNext = document.getElementById('categoriesNext');

    if (categoriesTrack && categoriesPrev && categoriesNext) {
        categoriesPrev.addEventListener('click', function() {
            categoriesTrack.scrollBy({
                left: -400,
                behavior: 'smooth'
            });
        });

        categoriesNext.addEventListener('click', function() {
            categoriesTrack.scrollBy({
                left: 400,
                behavior: 'smooth'
            });
        });
    }
});


// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    const darkModeBtn = document.getElementById('darkModeBtn');
    const htmlElement = document.documentElement;
    
    if (darkModeBtn) {
        const sunIcon = darkModeBtn.querySelector('.sun-icon');
        const moonIcon = darkModeBtn.querySelector('.moon-icon');
        
        // Check for saved theme preference or default to light mode
        const currentTheme = localStorage.getItem('theme') || 'light';
        htmlElement.setAttribute('data-theme', currentTheme);
        
        // Update icons based on current theme
        if (currentTheme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
        
        darkModeBtn.addEventListener('click', function() {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Toggle icons
            if (newTheme === 'dark') {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            } else {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            }
        });
    }
});


// Hero Carousel Auto-Scroll
document.addEventListener('DOMContentLoaded', function() {
    const heroTrack = document.getElementById('heroTrack');
    
    if (heroTrack) {
        const cards = heroTrack.querySelectorAll('.hero-carousel-card');
        let currentIndex = 0;
        let autoScrollInterval;
        
        function scrollToCard(index, smooth = true) {
            const cardWidth = heroTrack.offsetWidth;
            const scrollAmount = index * cardWidth;
            
            // Temporarily disable smooth scrolling if needed
            if (!smooth) {
                heroTrack.style.scrollBehavior = 'auto';
            }
            
            heroTrack.scrollTo({
                left: scrollAmount,
                behavior: smooth ? 'smooth' : 'auto'
            });
            
            // Re-enable smooth scrolling after a moment
            if (!smooth) {
                setTimeout(function() {
                    heroTrack.style.scrollBehavior = 'smooth';
                }, 50);
            }
        }
        
        function autoScroll() {
            currentIndex++;
            
            // If we've reached the end, jump to start without animation
            if (currentIndex >= cards.length) {
                currentIndex = 0;
                scrollToCard(currentIndex, false); // Jump instantly to first
            } else {
                scrollToCard(currentIndex, true); // Smooth scroll to next
            }
        }
        
        function goToNext() {
            currentIndex++;
            if (currentIndex >= cards.length) {
                currentIndex = 0;
                scrollToCard(currentIndex, false); // Jump instantly when looping
            } else {
                scrollToCard(currentIndex, true);
            }
        }
        
        function goToPrev() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = cards.length - 1;
                scrollToCard(currentIndex, false); // Jump instantly when looping back
            } else {
                scrollToCard(currentIndex, true);
            }
        }
        
        // Wait for images to load before starting
        setTimeout(function() {
            // Start auto-scroll every 4 seconds
            autoScrollInterval = setInterval(autoScroll, 4000);
        }, 500);
        
        // Pause on hover
        heroTrack.addEventListener('mouseenter', function() {
            clearInterval(autoScrollInterval);
        });
        
        // Resume on mouse leave
        heroTrack.addEventListener('mouseleave', function() {
            autoScrollInterval = setInterval(autoScroll, 4000);
        });
        
        // Handle manual scroll
        let isScrolling;
        heroTrack.addEventListener('scroll', function() {
            clearTimeout(isScrolling);
            isScrolling = setTimeout(function() {
                const cardWidth = heroTrack.offsetWidth;
                const scrollLeft = heroTrack.scrollLeft;
                currentIndex = Math.round(scrollLeft / cardWidth);
            }, 100);
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                goToNext();
                // Reset auto-scroll timer
                clearInterval(autoScrollInterval);
                autoScrollInterval = setInterval(autoScroll, 4000);
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                goToPrev();
                // Reset auto-scroll timer
                clearInterval(autoScrollInterval);
                autoScrollInterval = setInterval(autoScroll, 4000);
            }
        });
        
        // Recalculate on window resize
        window.addEventListener('resize', function() {
            scrollToCard(currentIndex, false);
        });
    }
});
