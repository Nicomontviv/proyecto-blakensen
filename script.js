const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.getElementById('shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');

menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    
   
    mobileMenu.classList.toggle('inactive');
}







