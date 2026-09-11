$(document).ready(function(){
  // header scroll
  let lastScroll = 0; // 초기 스크롤 위치
  $(window).scroll(function(){
    let nowScroll = $(this).scrollTop(); // 현재 스크롤 위치
    if (lastScroll >= nowScroll || lastScroll < 0){ // 스크롤 위치 감소
      // iOS 사파리 bounce effect 시 스크롤 위치 마이너스 할당
      $('header').stop().slideDown(200);
      $('header').addClass('on');
    } else { // 스크롤 위치 증가
      $('header').stop().slideUp(50);
    };
    if (lastScroll < 200) {
      $('header').removeClass('on');
    };
    lastScroll = nowScroll; // 현재 스크롤 위치 재할당
  });
  $('.gnb').hover(function(){
    $('header').addClass('on');
  }, function(){
    if (lastScroll < 200) {
      $('header').removeClass('on');
    };
  });
  // swiper-main
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    effect: "fade",
    touchRatio: 0,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: swiper,
    },
    on: { // 헤더 색상 변경
      slideChangeTransitionStart: function(){
        let txtColor = $('.mySwiper2 .swiper-slide-active .txt').css('color');
        if(txtColor == 'rgb(34, 34, 34)'){
          $('header').addClass('dark');
        }else{
          $('header').removeClass('dark');
        };
      }
    },
  });
  $('.news-room .tab').click(function(){
    $('.tab').removeClass('active');
    $(this).addClass('active');
  });
  $('.family').click(function(){
    $(this).toggleClass('active');
    $(this).children('div').slideToggle(300);
  });
}); //ready