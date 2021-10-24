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

function initMap() {
    let posTop = {lat: 50.45468437690826, lng:  30.476821067043556}; 
    let lleftArrow = {lat: 50.45537173367899, lng: 30.47726631372358};
    let rigtArrow = {lat: 50.45543150336045, lng: 30.476877393430325};
    let posVianor = {lat: 50.45515896167547, lng: 30.477244296106427};  
    let barPos = {lat: 50.45504129136181, lng:  30.476952495284557};  
    let medPos = {lat: 50.45547784585116, lng:  30.475989325863303}; 
    let coordinates = {
    center: {lat:  50.45511154341311, lng: 30.476938084714327},
    zoom: 18
};
    image2 = 'img/med.png';
    rightArrow = 'img/rightArrow.png';
    leftArrow = 'img/leftArrow.png';
    viaonorImg = 'img/vianor.png'; 
    barrierr = 'img/barrier.png';
    medImage = 'img/mediland.png'

    map = new google.maps.Map(document.getElementById('map'), coordinates);
    
    let markerOf = new google.maps.Marker({
        position: posTop,
        map: map,
        animation: google.maps.Animation.DROP,
    });

    let rArrow = new google.maps.Marker ({
        position: rigtArrow,
        map: map,
        icon: rightArrow
    });

    let lArrow = new google.maps.Marker ({
        position: lleftArrow,
        map: map,
        icon: leftArrow
    });

    let marker = new google.maps.Marker({
        position: posVianor,
        map: map,
        icon: viaonorImg
    });
    let secmarker = new google.maps.Marker ({
        position: medPos,
        map: map,
        icon: medImage
    });
    let barrier = new google.maps.Marker ({
        position: barPos,
        map: map,
        icon: barrierr
    });
}