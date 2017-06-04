$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        slideBy: 1,
		autoplay: true,
        dots: true,
        loop: true
    });
    $('.item').click(function() {
        $(this).find('.item-cart').html('<span>W koszyku</span>');          
    });
});
