document.addEventListener('DOMContentLoaded', () => {
    // Right-side Hamburger Menu Functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links-mobile');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Function to handle hamburger visibility based on screen size (REMOVED - no longer needed)
    // Function to handle hamburger visibility() { ... }

    // Removed existing hamburger menu logic (REMOVED)
    // const hamburger = document.querySelector('.hamburger');
    // const navMenu = document.querySelector('nav ul');
    // ...

    // Smooth Scrolling for Navigation Links (unchanged)
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

    // Day/Night Mode Toggle (unchanged)
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    if (themeToggle && body) {
        // Set initial theme to day mode
        body.classList.add('day-mode');

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('night-mode');
            body.classList.toggle('day-mode');
            const currentMode = body.classList.contains('night-mode') ? 'night' : 'day';
            localStorage.setItem('themeMode', currentMode);
        });
    } else {
        console.error("theme or body not found");
    }

    // Hover Effect for Project Cards (unchanged)
    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('mouseover', () => {
            project.style.transform = 'scale(1.02)';
            project.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });
        project.addEventListener('mouseout', () => {
            project.style.transform = 'scale(1)';
            project.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });

    // Tooltip Functionality for Skill Items (unchanged)
    document.querySelectorAll('#skills ul li').forEach(skill => {
        const tooltip = document.createElement('span');
        tooltip.textContent = skill.textContent;
        tooltip.classList.add('skill-tooltip'); // Add a class for styling
        skill.appendChild(tooltip);

        skill.addEventListener('mouseover', () => {
            tooltip.style.opacity = '1';
        });
        skill.addEventListener('mouseout', () => {
            tooltip.style.opacity = '0';
        });
    });
});
