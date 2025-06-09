$(document).ready(function(){
  // header
  $(window).scroll(function(){
    if($(window).scrollTop() > 50){
      $('header').addClass('scroll');
      $('header').css('background','var(--primary01)');
    }else{
      $('header').removeClass('scroll');
      $('header').css('background','');
    };
  });

  // gnb-sub
  $('.gnb > li:first-child').hover(function(){
    if($(window).innerWidth() > 767){
      $(this).children('.gnb-sub').stop().slideToggle(300);
    $('.gnb-sub-bg').stop().slideToggle(300);
    };
  });
  $('.gnb > li:first-child > a').click(function(e){
    if($(window).innerWidth() <= 768){
      e.preventDefault();
      $(this).next('.gnb-sub').stop().slideToggle(300);
    };
  });

  // search
  $('.search-btn').click(function(){
    $(this).toggleClass('active');
    $('.search-inp').toggleClass('active');
    if($(this).hasClass('active')){
      $(this).children('img').attr('src', 'image/icon/icon_close.png');
    }else{
      $(this).children('img').attr('src', 'image/icon/icon_search.png');
    };
  });

  // header-mobile
  function scrollDisable(){ // 스크롤 비활성화
    $('body').addClass('scroll-disable').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
    });
  }
  function scrollAble(){ // 스크롤 활성화
    $('body').removeClass('scroll-disable').off('scroll touchmove mousewheel');
  }
  $('.mb-menu-btn').click(function(){
    $(this).toggleClass('active');
    $('nav').toggleClass('active');
    if($(this).hasClass('active')){
      $('.mb-menu-btn img').attr('src', 'image/icon/icon_close.png');
      $('.search-inp').toggleClass('active');
      scrollDisable();
    }else{
      $('.mb-menu-btn img').attr('src', 'image/icon/m_btn_dark.png');
      $('.search-inp').toggleClass('active');
      scrollAble();
    };
  });

  // resize
  $(window).resize(function(){
    $('nav').removeClass('active');
    $('.gnb-sub').hide();
    $('.search-inp').removeClass('active');
    $('.search-btn').removeClass('active');
    $('.search-btn img').attr('src', 'image/icon/icon_search.png');
    $('.mb-menu-btn').removeClass('active');
    $('.mb-menu-btn img').attr('src', 'image/icon/m_btn_dark.png');
  });

  // go-top
  $(window).scroll(function(){
    if($(window).scrollTop() > 400){
      $('.go-top').addClass('active');
    }else{
      $('.go-top').removeClass('active');
    };
  });
}); // ready