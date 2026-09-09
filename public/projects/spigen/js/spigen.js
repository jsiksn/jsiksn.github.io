$(document).ready(function(){

  // fullpage
  $('#fullpage').fullpage({
    verticalCentered: false,
    responsiveWidth: 1201
  });
  
  // header menu-sub
  $('.gnb').hover(function(){
    if($(window).innerWidth() > 1200){
      $('.menu-sub, .menu-sub-bg').stop().slideToggle(300);
    }
  });

  // header mobile
  $('.btn-toggle').click(function(){
    $('nav').addClass('on');
  });
  $('.btn-close').click(function(){
    $('nav').removeClass('on');
  });

  // header menu-sub mobile
  $('.menu-main > li').click(function(){
    $('.menu-sub').stop().slideUp(300);
    $(this).children('.menu-sub').stop().slideToggle(300);
  });

  // slick main-visual
  $('.slider-main').slick({
    infinite: true,
    speed: 1000,
    fade: true,
    arrows: true,
    dots: true,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });
  $('.slider-main').on('beforeChange', function(){
    $('.slider-main em').removeClass('fade-down');
    $('.slider-main h2,.slider-main p,.slider-main .btn-more').removeClass('fade-up');
    $('.slider-main .text-line').removeClass('w100');
  });
  $('.slider-main').on('afterChange',function(){
    $('.slider-main em').addClass('fade-down');
    $('.slider-main h2,.slider-main p,.slider-main .btn-more').addClass('fade-up');
    $('.slider-main .text-line').addClass('w100');
  });

  // blog tab
  $('.tab a').click(function(e){
    e.preventDefault();
    $('.tab').removeClass('current');
    $(this).parent('.tab').addClass('current');
  });

  // family
  $('.family > a').click(function(e){
    e.preventDefault();
    $('.family ul').stop().slideDown(300);
    $('.family').addClass('on');
  });
  $('.family').mouseleave(function(){
    $(this).children('ul').stop().slideUp(300);
    $(this).removeClass('on');
  });

}); // ready