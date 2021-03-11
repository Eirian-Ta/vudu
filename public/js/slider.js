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
                breakpoint:1200,
                settings: {
                    item:7,
                  }
            },
            {
                breakpoint:1024,
                settings: {
                    item:6,
                  }
            },
            {
                breakpoint:900,
                settings: {
                    item:5,
                  }
            },
            {
                breakpoint:700,
                settings: {
                    item:4,
                    //slideMove:1,
                    //slideMargin:6,
                  }
            },
            {
                breakpoint:580,
                settings: {
                    item:3,
                    //slideMove:1
                  }
            },
            {
                breakpoint:450,
                settings: {
                    item:2,
                  }
            },
        ]
    });
    $(".lSAction").children().css({ 'background-image': 'url(/images/controls.png)' });
});