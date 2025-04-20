// Hamburger Menu Functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active'); // Toggle a class for the hamburger
    navMenu.classList.toggle('is-active'); // Toggle a class for the menu

    if (navMenu.classList.contains('is-active')) {
        navMenu.style.display = 'block'; // Ensure menu is displayed
    } else {
        navMenu.style.display = 'none'; // Ensure menu is hidden
    }
});
// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Hover Effect for Project Cards
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

// Tooltip Functionality for Skill Items
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