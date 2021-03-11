$(document).ready(function() {

    //render stars for each item
    function renderStars( el ) {
        var filledStar = '<img src="/images/star_1.png" alt="">';
        var emptyStar = '<img src="/images/star_0.png" alt="">';
        for (var i = 0; i < parseInt(el.attr('id')); i++) {
            el.append(filledStar);
        }
        for (var i=0; i < 5 - parseInt(el.attr('id')); i++) {
            el.append(emptyStar);
        }

     }

     renderStars($(".stars"));
       
});