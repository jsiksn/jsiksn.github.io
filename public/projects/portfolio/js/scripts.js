window.onscroll = function () {
	scrollFunction();
	scrollFunctionBTT(); // back to top button
};

window.onload = function () {
	scrollFunction();
};

// navbar on scroll
function scrollFunction() {
	if (document.documentElement.scrollTop > 30) {
		document.getElementById("navbar").classList.add("top-nav-collapse");
	} else if ( document.documentElement.scrollTop < 30 ) {
		document.getElementById("navbar").classList.remove("top-nav-collapse");
	}
}

// Navbar on mobile
let elements = document.querySelectorAll(".nav-link, .btn-outline-sm");

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", () => {
		document.querySelector(".offcanvas-collapse").classList.toggle("open");
		scrollAble();
	});
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  	document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

// scroll disable on mobile
function scrollDisable(){
	$('body').addClass('scroll-disable').on('scroll touchmove mousewheel', function(e){
			e.preventDefault();
	});
}
function scrollAble(){
	$('body').removeClass('scroll-disable').off('scroll touchmove mousewheel');
}

$('.navbar-toggler').click(function(){
	if($(".offcanvas-collapse").hasClass("open")){
		scrollDisable();
	}else{
		scrollAble();
	}
});
  
/* Portfolio - button */
document.querySelector(".btn-outline-lg").addEventListener("click", (e) => {
	e.preventDefault();
	document.querySelectorAll(".cards-2 .card").forEach((element) => {
		element.classList.add("active");
	});
	document.querySelector(".btn-outline-lg").style.display ="none";
});

/* Back To Top Button */
// Get the button
myButton = document.getElementById("myBtn");

// show on scroll
function scrollFunctionBTT() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

// scroll top on click
function topFunction() {
	document.body.scrollTop = 0; // Safari
	document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}