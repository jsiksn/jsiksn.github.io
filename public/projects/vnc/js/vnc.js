$(document).ready(function(){

  // fullPage
  if($(window).width() < 1441){
    $('section').addClass('fp-auto-height-responsive');
    }
  $(window).resize(function(){
    if(($(window).width() < 1441)){
      $('section').addClass('fp-auto-height-responsive');
    } else {
      $('section').removeClass('fp-auto-height-responsive');
    }
  });
  $('#fullpage').fullpage({
    verticalCentered: false,
    responsiveWidth: 1441,
    bigSectionsDestination: top
  });

  // swiper
  var swiper = new Swiper(".portfolio", {
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
      1025: {
        slidesPerView: 5,
        spaceBetween: 20
      },
      761: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });

}); // ready