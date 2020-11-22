$(function(){
    $('.header-burger').on('click', function(){
        $('.header-burger, nav').toggleClass('active');
        $('body').toggleClass('lock');
    })
})