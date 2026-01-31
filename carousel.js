// Hero Carousel
let currentSlide = 0;
const heroTrack = document.getElementById('heroTrack');
const heroPrev = document.getElementById('heroPrev');
const heroNext = document.getElementById('heroNext');

if (heroTrack && heroPrev && heroNext) {
    const cards = heroTrack.querySelectorAll('.hero-carousel-card');
    const totalCards = cards.length;
    const cardsPerView = 3;
    const maxSlide = Math.max(0, totalCards - cardsPerView);
    
    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth;
        const gap = 24; // 1.5rem = 24px
        const offset = currentSlide * (cardWidth + gap);
        heroTrack.style.transform = `translateX(-${offset}px)`;
        
        // Update button states
        heroPrev.style.opacity = currentSlide === 0 ? '0.5' : '1';
        heroPrev.style.cursor = currentSlide === 0 ? 'default' : 'pointer';
        heroNext.style.opacity = currentSlide >= maxSlide ? '0.5' : '1';
        heroNext.style.cursor = currentSlide >= maxSlide ? 'default' : 'pointer';
    }
    
    heroPrev.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateCarousel();
        }
    });
    
    heroNext.addEventListener('click', () => {
        if (currentSlide < maxSlide) {
            currentSlide++;
            updateCarousel();
        }
    });
    
    // Initialize
    updateCarousel();
    
    // Update on window resize
    window.addEventListener('resize', updateCarousel);
}
