$(document).ready(function(){
  // header pc
  $('nav').mouseenter(function(){
    if($(window).width() > 575){
      $('header').addClass('active');
      $('header').css('color', '#000');
      $('h1 img').attr('src', 'images/header-logo.png');
      $('.lang-btn img').attr('src', 'images/icon/gnb-lang-ico.png');
    };
  });
  $('header').mouseleave(function(){
    if($(window).width() > 575){
      $('header').removeClass('active');
      $('header').css('color', '#fff');
      $('h1 img').attr('src', 'images/header-logo-white.png');
      $('.lang-btn img').attr('src', 'images/icon/gnb-lang-white-ico.png');
      $('.lang-list').removeClass('active');
    };
  });
  $('.lang-btn').click(function(){
    if($(window).width() > 575){
      $('.lang-list').toggleClass('active');
    };
  });
  // header mobile
  $(window).on('scroll', function(){
    if($(window).scrollTop() > 50){
        $("header").addClass("active");
        $('h1 img').attr('src', 'images/header-logo.png');
    }else{
        $("header").removeClass("active");
        $('h1 img').attr('src', 'images/header-logo-white.png');
    };
  });
  function scrollDisable(){ // 스크롤 비활성화
    $('body').addClass('scroll-disable').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
    });
  }
  function scrollAble(){ // 스크롤 활성화
    $('body').removeClass('scroll-disable').off('scroll touchmove mousewheel');
  }
  $('.m-menu-btn').click(function(){
    $(this).toggleClass('active');
    $('.gnb').toggleClass('active');
    $('.lang-list').toggleClass('active');
    if($(this).hasClass('active')){
      $('h1 img').attr('src', 'images/header-logo-white.png');
      scrollDisable();
    }else{
      scrollAble();
      if($(window).scrollTop() > 50){
        $('h1 img').attr('src', 'images/header-logo.png');
      };
    };
  });
  // main apply
  $(window).on('scroll', function(){
    let applyTop = $('.apply').offset().top;
    if($(window).width() > 575){
      if($(window).scrollTop() >= applyTop){
        $('.apply').addClass('active');
      };
      if($(window).scrollTop() < applyTop - 40){
        $('.apply').removeClass('active');
      };
    };
  });
  // main slider-main
  $('.slider-main-visual').slick({
    dots: true,
    arrows: false,
    draggable: false,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear'
  });
  $('.main-visual .play').click(function(){
    $('.slider-main-visual').slick('slickPlay');
    $(this).toggleClass('active');
    $(this).next().toggleClass('active');
  }); 
  $('.main-visual .stop').click(function(){
    $('.slider-main-visual').slick('slickPause');
    $(this).toggleClass('active');
    $(this).prev().toggleClass('active');
  });
  // main slider-about
  $('.slider-about').slick({
    dots: false,
    arrows: true,
    draggable: false,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear'
  });
  $('.about .play').click(function(){
    $('.slider-about').slick('slickPlay');
    $(this).toggleClass('active');
    $(this).next().toggleClass('active');
  }); 
  $('.about .stop').click(function(){
    $('.slider-about').slick('slickPause');
    $(this).toggleClass('active');
    $(this).prev().toggleClass('active');
  });
  // main slider-family
  $('.slider-family').slick({
    dots: false,
    arrows: true,
    draggable: true,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '50px',
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
  $('.family .play').click(function(){
    $('.slider-family').slick('slickPlay');
    $(this).toggleClass('active');
    $(this).next().toggleClass('active');
  }); 
  $('.family .stop').click(function(){
    $('.slider-family').slick('slickPause');
    $(this).toggleClass('active');
    $(this).prev().toggleClass('active');
  });
  // footer
  $('.footer-link em').click(function(){
    $(this).toggleClass('active');
  });
}); // ready