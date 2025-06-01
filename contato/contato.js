// Contact page JavaScript
class ContactPage {
    constructor() {
        this.init();
    }

    init() {
        this.createEmbers();
        this.setupFormHandling();
        this.setupContactMethods();
    }

    createEmbers() {
        const embersContainer = document.getElementById('embersContainer');
        const emberCount = 30;

        for (let i = 0; i < emberCount; i++) {
            const ember = document.createElement('div');
            ember.className = 'ember';
            
            // Random position
            ember.style.left = Math.random() * 100 + '%';
            ember.style.top = Math.random() * 100 + '%';
            
            // Random animation delay and duration
            ember.style.animationDelay = Math.random() * 5 + 's';
            ember.style.animationDuration = (Math.random() * 8 + 5) + 's';
            
            embersContainer.appendChild(ember);
        }
    }

    setupFormHandling() {
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            this.submitForm(data);
        });

        // Form input focus effects
        const formInputs = document.querySelectorAll('.form-input, .form-textarea');
        
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.style.transform = 'scale(1.02)';
            });
            
            input.addEventListener('blur', () => {
                input.parentElement.style.transform = 'scale(1)';
            });
        });
    }

    setupContactMethods() {
        const contactMethods = document.querySelectorAll('.contact-method');
        
        contactMethods.forEach(method => {
            method.addEventListener('click', () => {
                const label = method.querySelector('.contact-label').textContent;
                const value = method.querySelector('.contact-value').textContent;
                
                // Handle different contact methods
                switch(label.toLowerCase()) {
                    case 'email':
                        window.location.href = `mailto:${value}`;
                        break;
                    case 'github':
                        window.open(`https://${value}`, '_blank');
                        break;
                    case 'linkedin':
                        window.open(`https://${value}`, '_blank');
                        break;
                }
            });
        });
    }

    submitForm(data) {
        const submitButton = document.querySelector('.form-submit');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            submitButton.textContent = 'Mensagem Enviada!';
            submitButton.style.background = 'linear-gradient(45deg, #10b981, #059669)';
            
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.style.background = 'linear-gradient(45deg, #ea580c, #dc2626)';
                
                // Reset form
                document.getElementById('contactForm').reset();
            }, 2000);
        }, 1500);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ContactPage();
});