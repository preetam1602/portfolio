// Smooth scroll helper used by both nav links and main button
const scrollToSection = (selector) => {
    const target = document.querySelector(selector);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
};

// Handle nav link clicks for smooth scrolling and active state
const navLinks = document.querySelectorAll('.navigation nav a');
navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const sectionId = link.getAttribute('href');
        scrollToSection(sectionId);
        navLinks.forEach((nav) => nav.classList.remove('active'));
        link.classList.add('active');
    });
});

// Highlight nav item while scrolling
const sections = document.querySelectorAll('section, .intro-section, .about, .skills, .education, .contact');
window.addEventListener('scroll', () => {
    const fromTop = window.scrollY + 100;
    sections.forEach((section) => {
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            const id = section.getAttribute('id');
            navLinks.forEach((link) => {
                link.classList.toggle('active', link.getAttribute('href').slice(1) === id);
            });
        }
    });
});

// Scroll to skills when the hero button is clicked
const workButton = document.getElementById('workButton');
if (workButton) {
    workButton.addEventListener('click', () => scrollToSection('#Skills'));
}

