$(document).ready(function(){
  // header scroll
  let lastScroll = 0; // 초기 스크롤 위치
  $(window).scroll(function(){
    let nowScroll = $(this).scrollTop(); // 현재 스크롤 위치
    if (lastScroll >= nowScroll || lastScroll < 0){ // 스크롤 위치 감소
      // iOS 사파리 bounce effect 시 스크롤 위치 마이너스 할당
      $('header').stop().slideDown(200);
    } else { // 스크롤 위치 증가
      $('header').stop().slideUp(50);
    };
    lastScroll = nowScroll; // 현재 스크롤 위치 재할당
  });
  // nav action
  let windowWidth = window.innerWidth; // 초기 width 값 할당
  $(window).resize(function (){
    windowWidth = window.innerWidth; // width 값 실시간 재할당
    $('nav').removeClass('active'); // nav 초기화
    $('.drop-menu').removeClass('active'); //drop-menu 초기화
    $('.drop-menu').removeAttr('style'); //drop-menu inline style 초기화
    $('.blur').removeClass('active'); // blur 초기화
  });
  $('nav > ul').mouseover(function(){
    if (windowWidth > 1024){
      $('.drop-menu').stop().slideDown(350);
      $('.drop-menu-bg').stop().slideDown(350);
      $('.link-wrap button').addClass('on');
    };
  });
  $('nav > ul').mouseleave(function(){
    if (windowWidth > 1024){
      $('.drop-menu').stop().slideUp(350);
      $('.drop-menu-bg').stop().slideUp(350);
      $('.link-wrap button').removeClass('on');
    };
  });
  $('nav > ul > li').click(function(){
    if (windowWidth <= 1024) {
      $(this).children('.drop-menu').toggleClass('active');
    };
  });
  // mobile-menu toggle
  function scrollDisable(){ // 스크롤 비활성화
    $('body').addClass('scroll-disable').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
    });
  };
  function scrollAble(){ // 스크롤 활성화
    $('body').removeClass('scroll-disable').off('scroll touchmove mousewheel');
  };
  $('.mobile-menu-open').click(function(){
    $('nav').addClass('active');
    $('.blur').addClass('active');
    scrollDisable();
  });
  $('.mobile-menu-close').click(function(){
    $('nav').removeClass('active');
    $('.blur').removeClass('active');
    scrollAble();
  });
  // slider-main slick
  $('.slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });
  // menu-main tab
  $('.tab').click(function(){
    $('.tab').removeClass('active');
    $(this).addClass('active');
    $('.menu-main-bg').removeClass('sig bev cof coo');
    $('.menu-sub').removeClass('active');
  });
  $('.tab-1').click(function(){
    $('.menu-main-bg').addClass('sig');
    $('.menu-sub.sig').addClass('active');
  });
  $('.tab-2').click(function(){
    $('.menu-main-bg').addClass('bev');
    $('.menu-sub.bev').addClass('active');
  });
  $('.tab-3').click(function(){
    $('.menu-main-bg').addClass('cof');
    $('.menu-sub.cof').addClass('active');
  });
  $('.tab-4').click(function(){
    $('.menu-main-bg').addClass('coo');
    $('.menu-sub.coo').addClass('active');
  });
});// ready