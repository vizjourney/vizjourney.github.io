// Hamburger menu functionality for mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul'); // Ensure this correctly targets the nav menu

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Check if menu is active to show/hide
    if (navMenu.classList.contains('active')) {
        navMenu.style.display = 'block';
        // Optionally add any additional effects or transitions here
    } else {
        navMenu.style.display = 'none';
        // Optionally remove any effects or transitions here
    }
});


// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add hover effect to project cards
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.02)'; // Slightly scale up on hover
        this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'; // Increase shadow for depth
    });
    project.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)'; // Reset scale on mouse out
        this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Reset shadow
    });
});

// Simple tooltip functionality (example for skill items)
document.querySelectorAll('#skills ul li').forEach(skill => {
    const tooltip = document.createElement('span');
    tooltip.textContent = skill.textContent;
    tooltip.style.cssText = `
        position: absolute;
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
        padding: 5px 10px;
        border-radius: 4px;
        z-index: 10;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none; /* Prevent tooltip from blocking events */
    `;
    skill.appendChild(tooltip);

    skill.addEventListener('mouseover', () => {
        tooltip.style.opacity = '1';
    });
    skill.addEventListener('mouseout', () => {
        tooltip.style.opacity = '0';
        });
    });