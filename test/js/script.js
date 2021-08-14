$(document).ready(function(){
    $('.slider').slick({ 
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: false,
        swipe: false
    });
});

const culture = document.querySelector('#culture');
const yield = document.querySelector('#yield');
const fortilizerCost = document.querySelector('#fortilizerCost');
const sownArea = document.querySelector('#sownArea');
const btnPrice = document.querySelector('#btnPrice');
const price = document.querySelector('.aside__result-price');


btnPrice.addEventListener('click', () => {
    price.innerHTML = (culture.value * (yield.value / 10) * sownArea.value) - (fortilizerCost.value * sownArea.value);
})

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.header__menu-list');

burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
})