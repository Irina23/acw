
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
            autoHeight:true,
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

        //scroll link menu
        $(function() {
            $('a[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });

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
                if(customType === jQuery(this).attr('data-cat')) jQuery(this).show(); else jQuery(this).hide();
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

window.onload = function(){




    if ($.browser.safari && !$.browser.mobile ) $('body').addClass('client-safari');
    if ($.browser.iphone || $.browser.ipad || $.browser.ipad) $('body').addClass('client-ios');
    

};

/*!
 * jQuery Browser Plugin 0.1.0
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2015 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2015 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 05-07-2015
 */
/*global window: false */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], function ($) {
            return factory($);
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        // Node-like environment
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(window.jQuery);
    }
}(function(jQuery) {
    "use strict";

    function uaMatch( ua ) {
        // If an UA is not provided, default to the current browser UA.
        if ( ua === undefined ) {
            ua = window.navigator.userAgent;
        }
        ua = ua.toLowerCase();

        var match = /(edge)\/([\w.]+)/.exec( ua ) ||
            /(opr)[\/]([\w.]+)/.exec( ua ) ||
            /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
            /(iemobile)[\/]([\w.]+)/.exec( ua ) ||
            /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
            /(msie) ([\w.]+)/.exec( ua ) ||
            ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
            [];

        var platform_match = /(ipad)/.exec( ua ) ||
            /(ipod)/.exec( ua ) ||
            /(windows phone)/.exec( ua ) ||
            /(iphone)/.exec( ua ) ||
            /(kindle)/.exec( ua ) ||
            /(silk)/.exec( ua ) ||
            /(android)/.exec( ua ) ||
            /(win)/.exec( ua ) ||
            /(mac)/.exec( ua ) ||
            /(linux)/.exec( ua ) ||
            /(cros)/.exec( ua ) ||
            /(playbook)/.exec( ua ) ||
            /(bb)/.exec( ua ) ||
            /(blackberry)/.exec( ua ) ||
            [];

        var browser = {},
            matched = {
                browser: match[ 5 ] || match[ 3 ] || match[ 1 ] || "",
                version: match[ 2 ] || match[ 4 ] || "0",
                versionNumber: match[ 4 ] || match[ 2 ] || "0",
                platform: platform_match[ 0 ] || ""
            };

        if ( matched.browser ) {
            browser[ matched.browser ] = true;
            browser.version = matched.version;
            browser.versionNumber = parseInt(matched.versionNumber, 10);
        }

        if ( matched.platform ) {
            browser[ matched.platform ] = true;
        }

        // These are all considered mobile platforms, meaning they run a mobile browser
        if ( browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone ||
            browser.ipod || browser.kindle || browser.playbook || browser.silk || browser[ "windows phone" ]) {
            browser.mobile = true;
        }

        // These are all considered desktop platforms, meaning they run a desktop browser
        if ( browser.cros || browser.mac || browser.linux || browser.win ) {
            browser.desktop = true;
        }

        // Chrome, Opera 15+ and Safari are webkit based browsers
        if ( browser.chrome || browser.opr || browser.safari ) {
            browser.webkit = true;
        }

        // IE11 has a new token so we will assign it msie to avoid breaking changes
        if ( browser.rv || browser.iemobile) {
            var ie = "msie";

            matched.browser = ie;
            browser[ie] = true;
        }

        // Edge is officially known as Microsoft Edge, so rewrite the key to match
        if ( browser.edge ) {
            delete browser.edge;
            var msedge = "msedge";

            matched.browser = msedge;
            browser[msedge] = true;
        }

        // Blackberry browsers are marked as Safari on BlackBerry
        if ( browser.safari && browser.blackberry ) {
            var blackberry = "blackberry";

            matched.browser = blackberry;
            browser[blackberry] = true;
        }

        // Playbook browsers are marked as Safari on Playbook
        if ( browser.safari && browser.playbook ) {
            var playbook = "playbook";

            matched.browser = playbook;
            browser[playbook] = true;
        }

        // BB10 is a newer OS version of BlackBerry
        if ( browser.bb ) {
            var bb = "blackberry";

            matched.browser = bb;
            browser[bb] = true;
        }

        // Opera 15+ are identified as opr
        if ( browser.opr ) {
            var opera = "opera";

            matched.browser = opera;
            browser[opera] = true;
        }

        // Stock Android browsers are marked as Safari on Android.
        if ( browser.safari && browser.android ) {
            var android = "android";

            matched.browser = android;
            browser[android] = true;
        }

        // Kindle browsers are marked as Safari on Kindle
        if ( browser.safari && browser.kindle ) {
            var kindle = "kindle";

            matched.browser = kindle;
            browser[kindle] = true;
        }

        // Kindle Silk browsers are marked as Safari on Kindle
        if ( browser.safari && browser.silk ) {
            var silk = "silk";

            matched.browser = silk;
            browser[silk] = true;
        }

        // Assign the name and platform variable
        browser.name = matched.browser;
        browser.platform = matched.platform;
        return browser;
    }

    // Run the matching process, also assign the function to the returned object
    // for manual, jQuery-free use if desired
    window.jQBrowser = uaMatch( window.navigator.userAgent );
    window.jQBrowser.uaMatch = uaMatch;

    // Only assign to jQuery.browser if jQuery is loaded
    if ( jQuery ) {
        jQuery.browser = window.jQBrowser;
    }

    return window.jQBrowser;
}));
