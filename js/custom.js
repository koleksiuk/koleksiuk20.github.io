$(document).ready(function(){

	// Top Slider

	$('#top-slider').carousel({
		interval: 5000
	});

	// Mobile menu

	mobileMenu();

	//Scrollr

	var s = skrollr.init({forceHeight: false});
	
});

// Header scroll

$(window).bind('scroll', function(event) {
	if($(window).scrollTop() > 100) {
		$('.main-header').addClass('header-short');
	} else {
		$('.main-header').removeClass('header-short');
	}	
});

// Mobile menu

function mobileMenu() {
	$('#mobile-icon').bind('click', function() {
		event.preventDefault();
		$('#main-nav-mobile').show();
	});
	$('#mobile-close').bind('click', function() {
		event.preventDefault();
		$('#main-nav-mobile').hide();
	});
}