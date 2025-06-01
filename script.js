// Main page JavaScript
class PortfolioApp {
    constructor() {
        this.menuOpen = false;
        this.mousePosition = { x: 0, y: 0 };
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupParallaxEffect();
        this.animateWelcome();
    }

    setupEventListeners() {
        const sun = document.getElementById('sun');
        const navItems = document.querySelectorAll('.nav-item');

        // Sun click event
        sun.addEventListener('click', () => this.toggleMenu());

        // Navigation items click events
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const href = item.getAttribute('data-href');
                if (href) {
                    window.location.href = href;
                }
            });
        });

        // Mouse move for parallax
        document.addEventListener('mousemove', (e) => {
            this.mousePosition = { x: e.clientX, y: e.clientY };
        });
    }

    setupParallaxEffect() {
        const parallaxElement = document.querySelector('.parallax-effect');
        
        const updateParallax = () => {
            if (parallaxElement) {
                const x = this.mousePosition.x * 0.01;
                const y = this.mousePosition.y * 0.01;
                parallaxElement.style.transform = `translate(${x}px, ${y}px)`;
            }
            requestAnimationFrame(updateParallax);
        };
        
        updateParallax();
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
        
        const solarSystem = document.getElementById('solarSystem');
        const navigationMenu = document.getElementById('navigationMenu');
        const sunHint = document.getElementById('sunHint');
        const navigationHint = document.getElementById('navigationHint');

        if (this.menuOpen) {
            // Open menu
            solarSystem.classList.add('menu-open');
            sunHint.classList.add('hidden');
            
            setTimeout(() => {
                navigationMenu.classList.add('active');
                this.animateNavItems();
            }, 200);

            setTimeout(() => {
                navigationHint.classList.add('active');
            }, 800);
        } else {
            // Close menu
            navigationMenu.classList.remove('active');
            navigationHint.classList.remove('active');
            
            // Reset nav items
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                item.classList.remove('animate');
            });
            
            setTimeout(() => {
                solarSystem.classList.remove('menu-open');
                sunHint.classList.remove('hidden');
            }, 300);
        }
    }

    animateNavItems() {
        const navItems = document.querySelectorAll('.nav-item');
        
        navItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
                
                // Animate text
                const text = item.querySelector('.nav-text');
                setTimeout(() => {
                    text.style.animationDelay = '0s';
                }, 200);
            }, index * 100 + 300);
        });
    }

    animateWelcome() {
        // Welcome section is animated via CSS
        // Additional JS animations can be added here
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});