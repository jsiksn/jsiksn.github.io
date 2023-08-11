$(document).ready(function(){
  
  // fullPage
  $('#fullpage').fullpage({
    verticalCentered: false,
    responsiveWidth: 1441
  });

  // scroll disable on mobile
  function scrollDisable(){ // 스크롤 비활성화
    $('body').addClass('scroll-disable').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
    });
  };
  function scrollAble(){ // 스크롤 활성화
    $('body').removeClass('scroll-disable').off('scroll touchmove mousewheel');
  };

  // header toggle on mobile
  $('.btn-mobile .btn-open').click(function(){
    $('nav').slideDown();
    $('.btn-mobile').addClass('open');
    scrollDisable();
  });
  $('.btn-mobile .btn-close').click(function(){
    $('nav').slideUp();
    $('.btn-mobile').removeClass('open');
    scrollAble();
  });
  $('.gnb li a').click(function(){
    if ($(window).innerWidth() < 769) {
      $('nav').slideUp();
      $('.btn-mobile').removeClass('open');
      scrollAble();
    }
  });

  // slider-home
  $('.slider-home').slick({
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipe: false,
    cssEase: 'linear'
  });  

  // slider-projects
  $('.slider-projects').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  });
  $('.slider-projects').on('beforeChange',function(){
    $('.slider-projects').find('.slider-item').removeClass('show');
  });
  $('.slider-projects').on('afterChange',function(){
    $('.slider-projects').find('.slider-item.slick-current + .slider-item').addClass('show');
  });
  $('.slider-projects .slick-dots').css('display','');

  // portfolio click
  /* $('.project-portfolio').click(function(e){
    e.preventDefault();
    alert('현재 페이지입니다.');
  }); */
  
  // slider-work
  $('.slider-work').bxSlider({
    mode: 'vertical',
    speed: 1000,
    captions: true,
    touchEnabled: false,
    auto: true,
    pause: 5000,
    controls: false,
    pager: false
  });

  // go-to-top
  $(window).scroll(function(){
    if ($(window).innerWidth() < 769) {
      if ($(window).scrollTop() > 1000) {
        $('.go-to-top').addClass('active');
      } else {
        $('.go-to-top').removeClass('active');
      }
    }
  });

  // resize
  $(window).resize(function(){
    // header
    if ($(window).innerWidth() > 768) {
      $('nav').css('display','');
      scrollAble();
    }
    // go-to-top
    if ($(window).innerWidth() > 1440) {
      $('.go-to-top').removeClass('active');
    }
  });
  
}); // ready