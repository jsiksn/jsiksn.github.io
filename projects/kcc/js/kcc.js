$(document).ready(function(){

  // header
  $(window).scroll(function(){
    if ($(window).innerWidth() > 1024 && $(window).scrollTop() > 50) {
      $('header').addClass('scroll');
    } else {
      $('header').removeClass('scroll');
    };
  }); // header

  // business tab
  $('.tab-busi > li').click(function(e){
    e.preventDefault();
    let tabId = $(this).attr('data-tab');
    $('.tab-busi > li').removeClass('active');
    $('.drop-busi').removeClass('active');
    $(this).addClass('active');
    $('#' + tabId).addClass('active');
  }); // business tab

  // swiper slider-main
  const swiperMain = new Swiper('.slider-main', {
    // Optional parameters
    direction: 'horizontal',
    effect: 'fade',
    autoplay: {
      delay: 5000,
    },
    speed: 1000,

    // callback
    on: {
      slideChangeTransitionStart: function () {
        document.querySelectorAll('.slider-main p').forEach((i) =>{
          i.classList.remove('show');
        });
      },
      slideChangeTransitionEnd: function () {
        document.querySelector('.swiper-slide-active p').classList.add('show');
      },
    },
  
    // pagination
    pagination: {
      el: '.swiper-pagination',
    },
  }); // swiper slider-main

  // swiper slider-news
  const swiperNews = new Swiper('.slider-news', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }); // swiper slider-news

  // swiper slider-story
  const swiperStory = new Swiper('.slider-story', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    // Responsive breakpoints
    breakpoints: {
      601: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      761: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1201: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }); // swiper slider-story

}); // ready