import { sections, sectionHome, sectionAbout, sectionShop, sectionOrder, sectionContent, header, nav, navLinks, nextButtons, prevButtons } from './Elements.js';
import { showPage } from './buttons.js';

// Function to transition between pages with animation
function transitionToPage(targetSection, targetNavLink) {
    // Add fade-out to all sections
    sections.forEach(sect => {
        sect.classList.add("fade-out");
    });
    
    // After fade-out animation, show new section and nav link
    setTimeout(() => {
        sections.forEach(sect => {
            sect.style.display = "none";
            sect.classList.remove("fade-out");
        });
        
        targetSection.style.display = "flex";
        Object.values(navLinks).forEach(link => link.classList.remove("active"));
        targetNavLink.classList.add("active");
    }, 300);
}

// Hide sections on page load \\
sections.forEach(sect => {
    sect.style.display = "none";
})

// show the first page and active the navbar \\
sectionHome.style.display = "flex"
navLinks.home.classList.add("active")

// Add click events to nav links with beautiful transition \\
navLinks.home.addEventListener("click", (e) => {
    e.preventDefault();
    transitionToPage(sectionHome, navLinks.home);
});

navLinks.about.addEventListener("click", (e) => {
    e.preventDefault();
    transitionToPage(sectionAbout, navLinks.about);
});

navLinks.shop.addEventListener("click", (e) => {
    e.preventDefault();
    transitionToPage(sectionShop, navLinks.shop);
});

navLinks.order.addEventListener("click", (e) => {
    e.preventDefault();
    transitionToPage(sectionOrder, navLinks.order);
});

navLinks.content.addEventListener("click", (e) => {
    e.preventDefault();
    transitionToPage(sectionContent, navLinks.content);
    navLinks.content.classList.add("active");
});

// Import button handlers from buttons.js \\