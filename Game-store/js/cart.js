const popupCode = document.querySelector('#popup__text-code');
const popupBtn = document.querySelector('#popup__btn-code');
const popupResult = document.querySelector('.popup__result');
const popupArrowResult = document.querySelector('.arrow-right');
const popupUnderText = document.querySelector('.popup__wrapper-code');

popupBtn.addEventListener('click', function() {
    this.classList.add('marginBott')
    if (popupCode.value == 'code123') {
        popupResult.classList.remove('error');
        popupResult.classList.add('success');
        popupArrowResult.classList.remove('error');
        popupArrowResult.classList.add('success');
        popupUnderText.classList.remove('error');
        popupUnderText.classList.add('success');
    }
    else if (popupCode.value != 'code123') {
        popupResult.classList.remove('success');
        popupResult.classList.add('error');
        popupArrowResult.classList.remove('success');
        popupArrowResult.classList.add('error');
        popupUnderText.classList.remove('success');
        popupUnderText.classList.add('error');
    }
})

// const del = document.querySelectorAll('.popup__delete');
// const mainBlock = document.querySelectorAll('.popup__boost');
// function delBlock() {
//     for (let  i= 0;  i < mainBlock.length; i++) {
//         mainBlock[i].classList.add('none');
//     }
// }
// for(let i = 0; i < del.length; i++){
//     del[i].addEventListener('click', delBlock);
// }


const wrapper = document.querySelector('.popup__main');
const mainBlock = document.querySelectorAll('.popup__boost');
const delBtn = document.querySelectorAll('.popup__delete');
wrapper.addEventListener('click', event => {
    console.log(event.target.className);
    if (event.target.classList.contains('popup__delete')) {
        event.target.parentElement.classList.add('none');
        console.log(event.target.parentElement);
    }
})
