import { sections, sectionHome, sectionAbout, sectionShop, sectionOrder, sectionContent, navLinks, nextButtons, prevButtons } from './Elements.js';

// Define the page order
const pageOrder = [
    { section: sectionHome, navLink: navLinks.home, name: 'home' },
    { section: sectionAbout, navLink: navLinks.about, name: 'about' },
    { section: sectionShop, navLink: navLinks.shop, name: 'shop' },
    { section: sectionOrder, navLink: navLinks.order, name: 'order' },
    { section: sectionContent, navLink: navLinks.content, name: 'content' }
];

// Function to transition between pages with animation
function transitionToPage(pageIndex) {
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
        
        pageOrder[pageIndex].section.style.display = "flex";
        Object.values(navLinks).forEach(link => link.classList.remove("active"));
        pageOrder[pageIndex].navLink.classList.add("active");
    }, 300);
}

// Function to show a specific page
function showPage(pageIndex) {
    transitionToPage(pageIndex);
}

// Get current page index
function getCurrentPageIndex() {
    return pageOrder.findIndex(page => page.section.style.display === "flex");
}

// Next button functionality
nextButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let currentIndex = getCurrentPageIndex();
        if (currentIndex < pageOrder.length - 1) {
            transitionToPage(currentIndex + 1);
        }
    });
});

// Previous button functionality
prevButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let currentIndex = getCurrentPageIndex();
        if (currentIndex > 0) {
            transitionToPage(currentIndex - 1);
        }
    });
});

export { showPage, getCurrentPageIndex };
