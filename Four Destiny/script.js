// toggle class active
const navbarNav = document.querySelector ('.navbar-nav');
// ketika humburger-menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active')
};
// klik luar sidebar untuk menghilangkan sidebar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
});