$(document).ready(function() {
    // $('#icons').hover(function() {
    //     $(this).effect("shake");
    // });
    // $('.thumbnail').hover(function() {
    //     $(this).tilt({
    //         scale: 1.3,
    //     });
    // });
    $("figure").mouseleave(
        function() {
            $(this).removeClass("hover");
        }
    );
    $('.terminal').typewriting("Coding, web development...", {

        // default: 150
        "typing_interval": 100,

        // default: 0.7s
        "blink_interval": "1s",

        // default: black
        "cursor_color": "#00fd55"

    });
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        var portfolio = $('#middle').offset().top;
        var contact = $('#contact').offset().top;
        if (scroll >= portfolio && scroll < portfolio + $('#middle').height() *
            0.7) {
            $("#1").removeClass("active");
            $("#3").removeClass("active");
            $("#2").addClass("active");
        } else if (scroll >= contact * 0.7) {
            $("#1").removeClass("active");
            $("#2").removeClass("active");
            $("#3").addClass("active");
        } else {
            $("#3").removeClass("active");
            $("#2").removeClass("active");
            $("#1").addClass("active");
        }
    });


});