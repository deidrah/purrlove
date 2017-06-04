$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
                slideBy: 1
            },
            850: {
                items: 2,
                slideBy: 2
            },
            1300: {
                items: 3,
                slideBy: 3
            }
        }
    });
    $('.item').click(function() {
        $(this).find('.item-cart').html('<span>W koszyku</span>');          
    });
});
