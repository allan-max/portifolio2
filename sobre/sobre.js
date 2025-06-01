// About page JavaScript
class AboutPage {
    constructor() {
        this.init();
    }

    init() {
        this.createStars();
        this.animateElements();
    }

    createStars() {
        const starsContainer = document.getElementById('starsContainer');
        const starCount = 50;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Random position
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            
            // Random animation delay
            star.style.animationDelay = Math.random() * 2 + 's';
            star.style.animationDuration = (Math.random() * 3 + 2) + 's';
            
            starsContainer.appendChild(star);
        }
    }

    animateElements() {
        // Tech items hover effects
        const techItems = document.querySelectorAll('.tech-item');
        
        techItems.forEach((item, index) => {
            item.style.animationDelay = (2 + index * 0.1) + 's';
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AboutPage();
});