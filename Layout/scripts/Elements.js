// Sections
const sections = document.querySelectorAll("section");
const sectionHome = document.querySelector(".home");
const sectionAbout = document.querySelector(".about");
const sectionShop = document.querySelector(".shop");
const sectionOrder = document.querySelector(".order");
const sectionContent = document.querySelector(".content");

// Navigation
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const navLinks = {
    home: document.getElementById("homenav"),
    about: document.getElementById("aboutnav"),
    shop: document.getElementById("shopnav"),
    order: document.getElementById("ordernav"),
    content: document.getElementById("contentnav")
};

// Buttons
const nextButtons = document.querySelectorAll(".next");
const prevButtons = document.querySelectorAll(".previous");

// Export all elements
export { sections, sectionHome, sectionAbout, sectionShop, sectionOrder, sectionContent, header, nav, navLinks, nextButtons, prevButtons };
