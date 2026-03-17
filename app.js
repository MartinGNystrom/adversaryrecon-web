// Duplicate marquee content for seamless infinite scroll
document.addEventListener('DOMContentLoaded', () => {
    const marquee = document.querySelector('.tech-marquee');
    if (marquee) {
        const clone = marquee.innerHTML;
        marquee.innerHTML += clone + clone; // duplicate twice for wide screens
    }

    // Add subtle parallax to grid overlay based on mouse movement
    const gridOverlay = document.querySelector('.grid-overlay');
    
    document.addEventListener('mousemove', (e) => {
        if (!gridOverlay) return;
        
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        // Move the grid slightly based on mouse position
        const offsetX = (mouseX - 0.5) * 20; // max 10px shift
        const offsetY = (mouseY - 0.5) * 20;
        
        gridOverlay.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
