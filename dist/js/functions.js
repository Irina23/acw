
jQuery(document).ready(function() {




    jQuery(window).load(function() {
        ///blink
        /*setInterval(function(){blink()}, 1000);
        function blink() {
            $("#header i span").fadeTo(300, 0).fadeTo(300, 1);
        }*/


        // Rewieves slider
        /*$('.list_reviews').owlCarousel({
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
        })*/


        jQuery('.list_reviews').bxSlider({
            nextText: "",
            prevText: "",
            auto: true,
            pause: 7000,
            onSliderLoad: function () {
                $('.item_reviews:not(.bx-clone)').eq(0).addClass('active-slide').siblings().removeClass('active-slide');
            },
            onSlideAfter: function ($slideElement) {
                $($slideElement).addClass('active-slide').siblings().removeClass('active-slide');
            }


        });
        
    });


   //advantages animation
    $('.block_advantages').on('mousemove', function () {

        jQuery(".number").addClass('animated fadeInLeft').css("opacity", 1);
        jQuery(".block_advantage").addClass('animated fadeInRight').css("opacity", 1);

    });

    //print text
    $(function () {
        $("#typed").typed({
            //strings: ["My name is <br>Anke Carola Walter<br>I am an independent <br><i>copywriter</i>"],
            //strings: [],
            stringsElement: $("#typed-strings"),
            typeSpeed: 70,
            cursorChar: ""
        });
    });

    //mobile menu
    jQuery(".navbar-toggle").on("click", function(){
        jQuery(this).next().slideToggle();
        //jQuery(this).toggleClass("active");
        //jQuery(".mobile-navbar").toggleClass("active");
    });

});