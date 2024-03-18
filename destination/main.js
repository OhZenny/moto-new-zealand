
// Navbar background on scroll

const navbar = document.querySelector('.header');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
navbar.before(scrollWatcher);

const navObserver = new IntersectionObserver(() => {
    navbar.classList.toggle('bg-dark')
});

navObserver.observe(scrollWatcher);
