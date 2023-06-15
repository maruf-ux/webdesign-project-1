
//   Pre loader
$(window).on('load', function(){
    $("#preloader").delay(700).fadeOut("slow");
});

// $('.counter').counterUp({
//     delay: 10,
//     time: 1000
// });
//  Slider
$('.owl-carousel').owlCarousel({
    infinity: true,
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
});
$(function(){
    $('.counter-1').counto(80, 10000);
  });
$(function(){
    $('.counter-2').counto(120, 10000);
});
$(function(){
    $('.counter-3').counto(115, 10000);
});
$(function(){
    $('.counter-4').counto(4000, 10000);
});

AOS.init();