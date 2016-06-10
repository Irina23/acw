
jQuery(document).ready(function() {




    jQuery(window).load(function() {
        ///blink
        /*setInterval(function(){blink()}, 1000);
        function blink() {
            $("#header i span").fadeTo(300, 0).fadeTo(300, 1);
        }*/


        // Rewieves slider
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
        });


        /*jQuery('.list_reviews').bxSlider({
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


        });*/

        
       
    });


   //advantages animation
    $('.block_advantages').on('mousemove', function () {

        jQuery(".number").addClass('animated fadeInLeft').css("opacity", 1);
        jQuery(".block_advantage").addClass('animated fadeInRight').css("opacity", 1);

    });

    //print text
    $(function () {
        $("#typed").typed({
            stringsElement: $("#typed-strings"),
            typeSpeed: 130,
            cursorChar: ""
        });
    });

    //mobile menu
    jQuery(".navbar-toggle").on("click", function(){
        jQuery(this).next().slideToggle();

    });




    //modal form
    var overlay = $('#overlay');
    var open_modal = $('.open-modal');
    var close = $('.modal_close, #overlay');
    var modal = $('.modal_div');
   

    open_modal.click( function(event){
        event.preventDefault();
        //console.log('open');
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function(){
                $(div)
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
                $('body').addClass('no-scroll');
                
            });
    });

    close.click( function(){
        //console.log('close');
        modal
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                    $(".success_box").removeClass('show');
                    $('body').removeClass('no-scroll');
                }
            );
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27)
            modal.animate({opacity: 0}, 200,
                function(){
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                    $(".success_box").removeClass('show');
                    $('body').removeClass('no-scroll');
                   
                }
            );
    });





    //form validate
    jQuery("form").validate({

        rules:{
            name:{
                required: true,
                minlength: 2
            },
            phone:{
                required: true,
                digits: true
            },
            email:{
                required: true,
                email: true
            },
            address:{
                required: true
            }
        }
    });


    //filter portfolio
    jQuery(".list_filter li").click(function(){
        var nav_active = jQuery(this);
        //console.log(nav_active);
        jQuery('.list_filter li').each(function(){
            jQuery(this).removeClass("active");
        });
        jQuery(nav_active).addClass("active");


        var customType = jQuery(this).attr('data-cat');
        //console.log(customType);
        if(customType==="all") {
            jQuery('.item-portfolio').show();
        }else{
            jQuery('.item-portfolio').each(function(){
                if(jQuery(this).attr('data-cat').indexOf(customType) < 0) jQuery(this).hide(); else jQuery(this).show();
            });
        }


    });


    //loading list portfolio
    $(window).scroll(function() {

        /*if ($(document).height() - $(window).height() == $(window).scrollTop()) {
            $('#loading').show();

            $.ajax({
                url: '',
                dataType: 'html',
                success: function(html) {
                    $('.list_portfolios').append(html);
                    $('#loading').hide();
                }
            });
        }*/
    });
});