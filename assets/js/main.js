$(document).ready(function(){

    var body = $('body');
    var html = $('html');
    var viewport = $(window);

    /* ==========================================================================
     Menu
     ========================================================================== */

    function menu() {
        html.toggleClass('menu-active');
    };

    $('#menu').on({
        'click': function() {
            menu();
        }
    });

    $('.menu-button').on({
        'click': function() {
            menu();
        }
    });

    $('.hidden-close').on({
        'click': function() {
            menu();
        }
    });

    /* ==========================================================================
     Parallax cover
     ========================================================================== */

    var cover = $('.cover');
    var coverPosition = 0;

    function prlx() {
        if(cover.length >= 1) {
            var windowPosition = viewport.scrollTop();
            (windowPosition > 0) ? coverPosition = Math.floor(windowPosition * 0.25) : coverPosition = 0;
            cover.css({
                '-webkit-transform' : 'translate3d(0, ' + coverPosition + 'px, 0)',
                'transform' : 'translate3d(0, ' + coverPosition + 'px, 0)'
            });
            (viewport.scrollTop() < cover.innerHeight()) ? html.addClass('cover-active') : html.removeClass('cover-active');
        }
    }
    prlx();

    viewport.on({
        'scroll': function() {
            prlx();
        },
        'resize': function() {
            prlx();
        },
        'orientationchange': function() {
            prlx();
        }
    });


});