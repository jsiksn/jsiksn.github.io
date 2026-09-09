$(document).ready(function(){
  $(window).on('scroll', function(){
    if($(window).scrollTop() > 100){
        $(".header-main").addClass("active");
        $("header").addClass("active");
    }else{
        $(".header-main").removeClass("active");
        $("header").removeClass("active");
    }
  });
  $(window).on('scroll', function(){
    if($(window).scrollTop() > 400){
        $(".go-top").addClass("active");
    }else{
        $(".go-top").removeClass("active");
    }
  });
  $('.text-slider').slick({
    arrows:false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000
  });
  $('.notice-slider').slick({
    arrows:false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000
  });
});