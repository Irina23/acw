
jQuery(document).ready(function() {




    jQuery(window).load(function() {
        ///blink
        setInterval(function(){blink()}, 1000);
        function blink() {
            $("#header i span").fadeTo(300, 0).fadeTo(300, 1);
        }
    });



});