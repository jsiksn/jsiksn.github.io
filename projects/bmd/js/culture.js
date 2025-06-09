$(document).ready(function(){

//cul-items
    $(function(){
      $(".more").click(function(e){
        e.preventDefault();
        $(".cul-items li").addClass("on");
        $(this).addClass("off");
      });
    });
    // slider-culture
    $('.con-items').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.slick-dots').css('display','');
  }); // ready