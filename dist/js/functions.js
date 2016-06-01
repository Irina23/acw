
jQuery(document).ready(function() {




    jQuery(window).load(function() {
        ///blink
        /*setInterval(function(){blink()}, 1000);
        function blink() {
            $("#header i span").fadeTo(300, 0).fadeTo(300, 1);
        }*/


        // Rewieves
        $('.list_reviews').owlCarousel({
            loop:true,
            nav:true,
            autoplay:true,
            autoplayTimeout: 7000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })
    });



    $('.block_advantages').on('mousemove', function () {

        jQuery(".number").addClass('animated fadeInLeft').css("opacity", 1);
        jQuery(".block_advantage").addClass('animated fadeInRight').css("opacity", 1);

    });



});