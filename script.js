// script.js

// Smooth Scrolling
const smoothScroll = (target) => {
    const element = document.querySelector(target);
    element.scrollIntoView({
        behavior: 'smooth'
    });
};

// Form Handling
const formHandler = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        console.log('Form submitted:', Object.fromEntries(formData));
    });
};

// Animations
constAnimateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const scrollHandler = () => {
        elements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', scrollHandler);
};

// Dark Mode Toggle
const toggleDarkMode = () => {
    const toggleButton = document.querySelector('#dark-mode-toggle');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
};

// Mobile Menu Functionality
const mobileMenu = () => {
    const menuButton = document.querySelector('#menu-toggle');
    const navigation = document.querySelector('nav');
    menuButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
    });
};

// Initializing all functionalities
const init = () => {
    smoothScroll('.scroll-target');
    formHandler();
    animateOnScroll();
    toggleDarkMode();
    mobileMenu();
};

document.addEventListener('DOMContentLoaded', init);