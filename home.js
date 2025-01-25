// Toggle menu burger
const burgerBtn = document.getElementById('burger-btn');
const closeBtn = document.getElementById('close-btn');
const burgerMenu = document.getElementById('burger-menu');

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.remove('menu-hidden');
    burgerMenu.classList.add('menu-visible');
});

closeBtn.addEventListener('click', () => {
    burgerMenu.classList.remove('menu-visible');
    burgerMenu.classList.add('menu-hidden');
});