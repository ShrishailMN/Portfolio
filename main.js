// Toggle the side menu visibility
    function toggleMenu() {
        const menu = document.getElementById('sideMenu');
        menu.classList.toggle('show');
    }

    // Close the side menu if clicking outside of it
    document.addEventListener('click', function(event) {
        const menu = document.getElementById('sideMenu');
        const hamburgerMenu = document.querySelector('.hamburger-menu');

        // Check if the click is outside the side menu and the hamburger menu
        if (!menu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            menu.classList.remove('show');
        }
    });

