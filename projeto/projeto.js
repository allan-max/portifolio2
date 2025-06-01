// Projects page JavaScript
class ProjectsPage {
    constructor() {
        this.init();
    }

    init() {
        this.createStars();
        this.setupProjectInteractions();
    }

    createStars() {
        const starsContainer = document.getElementById('starsContainer');
        const starCount = 80;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Random position
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            
            // Random animation delay and duration
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.animationDuration = (Math.random() * 4 + 2) + 's';
            
            starsContainer.appendChild(star);
        }
    }

    setupProjectInteractions() {
        const projectCards = document.querySelectorAll('.project-card');
        const projectLinks = document.querySelectorAll('.project-link');

        // Project card hover effects are handled by CSS
        
        // Project link click handlers
        projectLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                // Add your project link logic here
                console.log('Project link clicked:', link.textContent.trim());
            });
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectsPage();
});