$(document).ready(function() {
    $(".lightSlider").lightSlider({
        item:8,
        loop:false,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        loop: true,
        controls: true,
        prevHtml: '',
        nextHtml: '',
        pager: false,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });
    $(".lSAction").children().css({ 'background-image': 'url(/images/controls.png)' });
});