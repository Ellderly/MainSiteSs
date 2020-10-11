$(function(){
    $('.button-slider-1').on('focus', function () {
        $('.slider').hide();
        $('.slider-1').addClass('animation');
        $('.slider-1').css('display','grid');
    });
    $('.button-slider-2').on('focus', function () {
        $('.slider').hide();
        $('.slider-2').addClass('animation');
        $('.slider-2').css('display','grid');
    });
    $('.button-slider-3').on('focus', function () {
        $('.slider').hide();
        $('.slider-3').addClass('animation');
        $('.slider-3').css('display','grid');
    });
});