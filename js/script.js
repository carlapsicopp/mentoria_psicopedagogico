// Mobile menu toggle
function toggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    }
}

// Close mobile menu when clicking a link
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinksContainer = document.querySelector('.nav-links');
            if (menuToggle && navLinksContainer) {
                menuToggle.classList.remove('active');
                navLinksContainer.classList.remove('active');
            }
        });
    });

    // Active menu highlighting
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('.nav-link');

    if (sections.length && menuLinks.length) {
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            menuLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href && href.slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
            }
        });
    }

});