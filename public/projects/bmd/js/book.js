$(document).ready(function(){
  // slider-book
  $('.slider-book-rec').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
  $('.slick-dots').css('display','');
}); // ready