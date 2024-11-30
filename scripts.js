// script.js

// Use const for constant values and let for mutable variables
const header = document.querySelector('header');
let lastScrollTop = 0;

if (header) { // Ensure the header element exists
    window.addEventListener('scroll', () => {
        // Get the current scroll position
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Check if the user is scrolling down or up
        if (currentScroll > lastScrollTop) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }

        // Update lastScrollTop to the current position
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
}