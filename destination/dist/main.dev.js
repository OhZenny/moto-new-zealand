"use strict";

// Navbar background on scroll
var navbar = document.querySelector('.header');
var scrollWatcher = document.createElement('div');
scrollWatcher.setAttribute('data-scroll-watcher', '');
navbar.before(scrollWatcher);
var navObserver = new IntersectionObserver(function () {
  navbar.classList.toggle('bg-dark');
});
navObserver.observe(scrollWatcher);