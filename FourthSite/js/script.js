$(function (){
    $('.burger').on('click', function(){
        $('.burger, nav, .login, .logo').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.slider').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});