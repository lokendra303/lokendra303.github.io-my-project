// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation to elements with staggered timing
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add staggered delay for smooth cascading effect
            const delay = index * 0.1;
            entry.target.style.animationDelay = `${delay}s`;
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill items and project cards
document.querySelectorAll('.skill-item, .project-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add active state to navigation links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add simple form validation if you add a contact form later
function validateForm(formData) {
    const email = formData.email;
    const name = formData.name;
    
    if (!name || name.trim() === '') {
        return { valid: false, message: 'Please enter your name' };
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return { valid: false, message: 'Please enter a valid email' };
    }
    
    return { valid: true, message: 'Form is valid' };
}

// Add floating particles effect
function createFloatingParticles() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    const particlesContainer = document.createElement('div');
    particlesContainer.id = 'particles';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;

    // Create 20 floating particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 5 + 2;
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        const duration = Math.random() * 15 + 15;
        const delay = Math.random() * 5;

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${xPos}%;
            top: ${yPos}%;
            animation: float ${duration}s infinite ease-in-out;
            animation-delay: ${delay}s;
        `;
        particlesContainer.appendChild(particle);
    }

    heroSection.appendChild(particlesContainer);
}

// Initialize floating particles when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createFloatingParticles);
} else {
    createFloatingParticles();
}

// Log page load
console.log('Portfolio loaded successfully with enhanced animations!');
