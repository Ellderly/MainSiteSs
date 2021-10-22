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
    let posTop = {lat: 50.455548613864124, lng: 30.47703876248843};    50.455548613864124, 30.47703876248843
    let pos = {lat: 50.45524188546683, lng: 30.477174299380934};    
    let pos2 = {lat:  50.455528214873986, lng: 30.475779652787846};
    let coordinates = {
    center: {lat: 50.455584, lng: 30.476922},
    zoom: 18
};
    image = 'img/img-shin.png';
    image2 = 'img/med.png';

    map = new google.maps.Map(document.getElementById('map'), coordinates);
    
    let markerOf = new google.maps.Marker({
        position: posTop,
        map: map,
        animation: google.maps.Animation.DROP,
    });

    let marker = new google.maps.Marker({
        position: pos,
        map: map,
        icon: image
    });
    let secmarker = new google.maps.Marker ({
        position: pos2,
        map: map,
        icon: image2
    });

}