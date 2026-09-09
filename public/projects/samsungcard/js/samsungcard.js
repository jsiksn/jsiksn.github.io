$(document).ready(function(){
  $(document).on('scroll', function(){
    if($(window).scrollTop() > 50){
      $("header").removeClass("deactive");
      $("header").addClass("active");
    }else{
      $("header").removeClass("active");
      $("header").addClass("deactive");
    }
  });
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
  });
  $('.tab').click(function(){
    $('.tab').removeClass('active');
    $(this).addClass('active');
  });
});
