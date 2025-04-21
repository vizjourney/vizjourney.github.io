document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Functionality
     // Function to handle hamburger visibility based on screen size
    function handleHamburgerVisibility() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const navLinksMobile = document.querySelector('.nav-links-mobile')
        if (window.innerWidth > 768 && hamburger) {
            if (hamburger) {
                hamburger.classList.add('hidden'); // Hide on larger screens
            }
            if (navLinks) {
                navLinks.style.display = 'flex';
            }
             if (navLinksMobile) {
                navLinksMobile.style.display = 'none';
            }
        } else {
           hamburger.classList.remove('hidden'); // Show on smaller screens
        }
    }
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
          navMenu.classList.toggle('active');
      });

      // Close menu if a link is clicked
      navMenu.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
              navMenu.classList.remove('active');
          });
      });

      // Close the menu if click outside
        document.addEventListener('click', (event) => {
            if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
    } else {
      console.error("Hamburger menu or navigation not found");
    }
     // Check hamburger visibility on load and resize
    handleHamburgerVisibility();
    window.addEventListener('resize', () => {
        handleHamburgerVisibility();
    }

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
    