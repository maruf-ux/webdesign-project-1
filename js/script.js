    // Pre loader
$(window).on('load', function(){
    $("#preloader").delay(700).fadeOut("slow");
});
// counter for counter section
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
//  Slider
$('.owl-carousel').owlCarousel({
    autoplay: true,
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})