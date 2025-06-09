$(document).ready(function(){
    $(document).on('scroll', function(){
        if($(window).scrollTop() > 50){
            $("header").addClass("active");
            $("header h1 img").attr("src", "images/img_logo_white.png");
        }else{
            $("header").removeClass("active");
            $("header h1 img").attr("src", "images/img_logo_black.png");
        }
        if($(window).scrollTop() > 400){
            $(".go-top").addClass("active");
        }else{
            $(".go-top").removeClass("active");
        }
    });
    $(".family-site").click(function(){
        $(this).toggleClass("active");
    });
});
