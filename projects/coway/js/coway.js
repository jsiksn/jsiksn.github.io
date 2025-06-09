$(document).ready(function(){
  $('nav > ul > li').mouseover(function(){
    $(this).children('.drop-menu-wrap').stop().slideDown(350);
  });
  $('nav > ul > li').mouseleave(function(){
      $(this).children('.drop-menu-wrap').stop().slideUp(0);
  });
  $('.lang-open').click(function(){
    $(this).next('div').addClass('active');
  });
  $('.lang-close').click(function(){
    $(this).parent().removeClass('active');
  });
  $('.slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
  });
  $('.play').click(function(){
    $('.slider-main').slick('slickPlay');
    $(this).toggleClass('active');
    $(this).next().toggleClass('active');
  }); 
  $('.stop').click(function(){
    $('.slider-main').slick('slickPause');
    $(this).toggleClass('active');
    $(this).prev().toggleClass('active');
  });
  $('.slider-noble').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });
  $('.slider-review').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
  });
  $('.slider-bene').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });
  $('.slider-service').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
  });
  $('.slick-arrow').css('display','')
  $('.story .text-wrap li:nth-child(1)').hover(function(){
    $('.story .bg-wrap li').removeClass('active');
    $('.story .bg-wrap li:nth-child(1)').addClass('active');
  });
  $('.story .text-wrap li:nth-child(2)').hover(function(){
    $('.story .bg-wrap li').removeClass('active');
    $('.story .bg-wrap li:nth-child(2)').addClass('active');
  });
  $('.story .text-wrap li:nth-child(3)').hover(function(){
    $('.story .bg-wrap li').removeClass('active');
    $('.story .bg-wrap li:nth-child(3)').addClass('active');
  });
});