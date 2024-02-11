
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('.header').addClass('not-top');
        } else if ($(this).scrollTop() === 0) {
            $('.header').removeClass('not-top');
        };
    });
});



// Slider script

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


// Tabs
(function($) {
    $(function() {
        $("ul.tabs__caption").on("click", "li:not(.active)", function() {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.tabs")
                .find("div.tabs__content")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
})(jQuery);




// Slider for review
$(function() {
    $('.section-slider').slick({
        dots: false,
        speed: 3000,
        autoplay: false,
        cssEase: 'linear',
        autoplaySpeed: 3000,
        prevArrow: false,
        nextArrow: false
    });
});