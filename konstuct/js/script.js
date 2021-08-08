const burger = document.querySelector('.burger');

if(burger){
    const navbar = document.querySelector('.navbar');
    const bodyBlock = document.querySelector('body')
burger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    burger.classList.toggle('active');
    bodyBlock.classList.toggle('block');
})
}

const header = document.querySelector('.header');
const menu = document.querySelector('.menu-wrapper');
const main = document.querySelector('.main')
window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    let headerScroll = header.offsetHeight;
    
    if(scroll >= headerScroll){
        menu.classList.add('fixed');
        main.style.marginTop = `${menu.offsetHeight}px`; 
    }
    else{
        menu.classList.remove('fixed');
        main.style.marginTop = `0px`
    }
});