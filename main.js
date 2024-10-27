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
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  });
}
