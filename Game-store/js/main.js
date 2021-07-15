const burgerBtn = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.burger');

burgerBtn.addEventListener('click', function(){
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');
})
// console.log(burgerBtn);