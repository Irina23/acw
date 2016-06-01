
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
        })
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
    /*$(document).ready(function(){
        $.fn.animate_Text = function() {
            var string = this.text();
            return this.each(function(){
                var $this = $(this);
                $this.html(string.replace(/./g, '<span class="new">$&</span>'));
                $this.find('span.new').each(function(i, el){
                    setTimeout(function(){ $(el).addClass('div_opacity'); }, 40 * i);
                });
            });
        };
        $('.block_img .block_text').show();
        $('.block_img .block_text').animate_Text();
    });*/

});