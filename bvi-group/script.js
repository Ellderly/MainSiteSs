new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    loop: true,
    autoplay: {
        delay: 3000
    },
});

const services = document.querySelector('.sectionHeader');
const header = document.querySelector('.header');
const navMenu = document.querySelector('.navbar')
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let servicesCenter = services.offsetHeight + header.offsetHeight;
    if(scrollTop > servicesCenter) {
        navMenu.classList.add('fixed');
        services.style.marginBottom = `${75}px`;
    } else{
        navMenu.classList.remove('fixed')
        services.style.marginBottom = `0px`;
    }
})

const body = document.querySelector('body')
const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    body.classList.toggle('block');
    burger.classList.toggle('all')
})