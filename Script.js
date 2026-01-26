document.addEventListener("DOMContentLoaded", function() {
    
    // --- Custom Cursor Logic ---
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");
    
    window.addEventListener("mousemove", function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot follows instantly
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Outline follows with delay (handled by CSS transition, just update position)
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Add 'hovering' class to body when hovering over links/buttons
    const interactiveElements = document.querySelectorAll("a, button, .card");
    interactiveElements.forEach(el => {
        el.addEventListener("mouseenter", () => document.body.classList.add("hovering"));
        el.addEventListener("mouseleave", () => document.body.classList.remove("hovering"));
    });

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Intersection Observer for Fade-in Animations ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add simple fade-in CSS class dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        .section, .card, .project-card { 
            opacity: 0; 
            transform: translateY(30px); 
            transition: all 0.8s ease-out; 
        }
        .visible { 
            opacity: 1; 
            transform: translateY(0); 
        }
    `;
    document.head.appendChild(style);

    // Target elements to animate
    document.querySelectorAll('.section, .card, .project-card, .about-text').forEach(el => {
        observer.observe(el);
    });

    // --- Glitch Text Effect (Simple Randomizer) ---
    const glitchText = document.querySelector('.glitch');
    if(glitchText) {
        let originalText = glitchText.getAttribute('data-text');
        // You can add complex glitch logic here, for now CSS animation handles the glow
    }
});