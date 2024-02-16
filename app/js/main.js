$('.slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true
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
// $(function() {
//     $('.slider').slick({
//         dots: false,
//         speed: 3000,
//         autoplay: false,
//         cssEase: 'linear',
//         autoplaySpeed: 3000,
//         prevArrow: false,
//         nextArrow: false
//     });
// });