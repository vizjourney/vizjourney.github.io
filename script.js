document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        navMenu.classList.toggle('is-active');
    });

    // Smooth Scrolling for Navigation Links
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

    // Day/Night Mode Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Set initial theme to day mode
    body.classList.add('day-mode');

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('night-mode');
        body.classList.toggle('day-mode');
    });

    // Hover Effect for Project Cards
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

    // Tooltip Functionality for Skill Items
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