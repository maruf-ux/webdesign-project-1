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
