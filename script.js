// ==========================================
// SMOOTH SCROLLING & NAVIGATION
// ==========================================

// Smooth scroll to sections
const scrollToSection = (selector) => {
    const target = document.querySelector(selector);
    if (target) {
        target.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
};

// Navigation link handling
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const sectionId = link.getAttribute('href');
        scrollToSection(sectionId);
        
        // Update active state
        navLinks.forEach((nav) => nav.classList.remove('active'));
        link.classList.add('active');
        
        // Close mobile menu if open
        const navLinksContainer = document.querySelector('.nav-links');
        navLinksContainer.classList.remove('active');
    });
});

// ==========================================
// MOBILE NAVIGATION TOGGLE
// ==========================================
const navToggle = document.querySelector('.nav-toggle');
const navLinksContainer = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// ==========================================
// ACTIVE SECTION HIGHLIGHTING
// ==========================================
const sections = document.querySelectorAll('section');
const observerOptions = {
    root: null,
    rootMargin: '-100px 0px -66%',
    threshold: 0
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// ==========================================
// SCROLL EFFECTS
// ==========================================

// Navbar background on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navigation');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow to navbar on scroll
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// ==========================================
// SCROLL ANIMATIONS (Intersection Observer)
// ==========================================
const animatedElements = document.querySelectorAll('.skill-category, .project-card, .stat-card, .timeline-item');

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            animationObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Set initial state and observe
animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    animationObserver.observe(element);
});

// ==========================================
// HERO CTA BUTTONS
// ==========================================
const ctaButtons = document.querySelectorAll('.hero-cta .btn');
ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = button.getAttribute('href');
        scrollToSection(targetSection);
    });
});

// ==========================================
// PERFORMANCE: DEBOUNCE SCROLL EVENTS
// ==========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================
// ACCESSIBILITY: KEYBOARD NAVIGATION
// ==========================================
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape' && navLinksContainer.classList.contains('active')) {
        navLinksContainer.classList.remove('active');
        navToggle.classList.remove('active');
    }
});


if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScrollPolyfill = document.createElement('script');
    smoothScrollPolyfill.src = 'https://cdn.jsdelivr.net/npm/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js';
    document.head.appendChild(smoothScrollPolyfill);
}


const skillCards = document.querySelectorAll('.skill-category');

skillCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});


const projectCards = document.querySelectorAll('.project-card:not(.coming-soon)');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});


console.log('%c👋 Hello, fellow developer!', 'font-size: 20px; font-weight: bold; color: #1a365d;');
console.log('%cInterested in the code? Let\'s connect!', 'font-size: 14px; color: #4a5568;');
console.log('%c📧 preetam1602@gmail.com', 'font-size: 12px; color: #d97706;');


window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});


const preloadFonts = () => {
    const fonts = [
        'Playfair Display',
        'Source Sans 3'
    ];
    
    fonts.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'font';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
    });
};

preloadFonts();
