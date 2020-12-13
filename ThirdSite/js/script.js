$(function (){
    $('.burger').on('click', function(){
        $('.burger, nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.slider').slick({
    });
})