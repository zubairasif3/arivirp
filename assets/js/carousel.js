
jQuery(".tabs-carousel").owlCarousel({
    autoplay: false,
    rewind: false,
    loop: true,
    margin: 20, 
    responsiveClass: true,
    autoHeight: true,
    touchDrag  : false,
    mouseDrag  : false,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 2
      },
  
      1024: {
        items: 3
      },
  
      1366: {
        items: 3
      }
    }
});
jQuery(".products-carousel").owlCarousel({
    autoplay: false,
    rewind: false,
    loop: true,
    margin: 20, 
    responsiveClass: true,
    autoHeight: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 2
      },
  
      1024: {
        items: 3
      },
  
      1366: {
        items: 3
      }
    }
});
$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".owl-next").html('<i class="fa fa-chevron-right"></i>');