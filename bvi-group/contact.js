// const services = document.querySelector('.sectionHeader');
const header = document.querySelector('.header');
const navMenu = document.querySelector('.navbar')
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let headerCenter = header.offsetHeight;
    if(scrollTop > headerCenter) {
        navMenu.classList.add('fixed');
        header.style.marginBottom = `${75}px`;
    } else{
        navMenu.classList.remove('fixed')
        header.style.marginBottom = `0px`;
    }
})


const body = document.querySelector('body')
const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    body.classList.toggle('block');
    burger.classList.toggle('all')
})
