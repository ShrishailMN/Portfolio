function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const hamburger = document.querySelector('.hamburger-menu');

    if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove('show');
    }
});
