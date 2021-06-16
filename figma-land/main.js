const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav-menu');
burger.addEventListener('click', function(e){
    document.body.classList.toggle('lock')
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});

// const seeMoreBtn = document.querySelector('.gallery .links-btn');
// const blockImage1 = document.querySelector('.block-image:nth-child(5)');
// const blockImage2 = document.querySelector('.block-image:nth-child(6)');
// const blockImage3 = document.querySelector('.block-image:nth-child(7)');
// seeMoreBtn.addEventListener('click', function(e){
//     blockImage1.classList.toggle('active');
//     blockImage2.classList.toggle('active');
//     blockImage3.classList.toggle('active');
// })