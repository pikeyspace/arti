// Boorger-menu script
$(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger, .header-menu').toggleClass('active');
        $('.header-inner').toggleClass('active');
        $('body').toggleClass('lock')
    })
    $('.menu-item>a').click(function(event) {
        $('.header-burger, .header-menu').removeClass('active');
        $('body').removeClass('lock');
    })
})




$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('.header-inner').addClass('not-top');
        } else if ($(this).scrollTop() === 0) {
            $('.header-inner').removeClass('not-top');
        };
    });
});



// Slider script
$(function() {
    $('.header-slider').slick({
        dots: true,
        speed: 3000,
        autoplay: true,
        cssEase: 'linear',
        autoplaySpeed: 3000,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        prevArrow: false,
        nextArrow: false
    });
});


// Slow motion in menu click
$(document).ready(function() {
    $(".menu-item").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top,
            offset = $('header').innerHeight();
        $('body,html').animate({ scrollTop: top - offset }, 1500);
        $('*').removeClass('current-item');
        $(this).addClass('current-item');
    });
});


// Accordion
// $(document).ready(function() {
//     $('.accordion__content .accordion__content_title').on('click', f_acc);
// });

// function f_acc() {
//     $('.accordion__content .accordion__content_list').not($(this).next()).slideUp(1000);
//     $('.accordion__content .accordion__content_title').find('span').addClass('icon-circle-up').removeClass('icon-circle-down');
//     $(this).next().slideToggle(1000);
//     $('.accordion__content .accordion__content_title').not(this).find('span').addClass('icon-circle-down').removeClass('icon-circle-up');
// }

let accordion = function() {
    let data = $('.main__text-block').attr('data-accordion');
    $('.main__text-block_title').on('click', function() {
        if (data === 'close') {
            $('.text-block_text').slideUp();
            if ($(this).hasClass('active')) {
                $(this).toggleClass('active');
            } else {
                $('.main__text-block_title').removeClass('active');
                $(this).toggleClass('active');
            }
        } else {
            $(this).toggleClass('active');
        }
        $(this).next('.text-block_text').not(':animated').slideToggle(1000);
    });
};
accordion();


// Slider for review
$(function() {
    $('.review__slider').slick({
        dots: false,
        speed: 3000,
        autoplay: true,
        cssEase: 'linear',
        autoplaySpeed: 3000,
        prevArrow: false,
        nextArrow: false
    });
});