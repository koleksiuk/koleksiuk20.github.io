var navigationScroll = require('./navigation.js');
var initPageScrollLinks = require('./pageScroll.js');

$(document).ready(function(){

	// Top Slider
	$('#top-slider').carousel({
		interval: 5000
	});

	// Scrollr
	var s = skrollr.init({forceHeight: false});

	// Mobile menu
	mobileMenu();

	// Hide mobile menu on click init
	initHideMainNavMobile();

	// Page scroll anchors init
	initPageScrollLinks();

	// Change active menu link on scroll
	navigationScroll();

});

// Header scroll
/*$(window).bind('scroll', function(event) {
	if($(window).scrollTop() > 100) {
		$('.main-header').addClass('header-short');
	} else {
		$('.main-header').removeClass('header-short');
	}
});*/

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

// Hide mobile menu on click
function initHideMainNavMobile() {
	$('.page-scroll').on('click', function(event) {
		event.preventDefault();
		$('#main-nav-mobile').hide();
	});
}

// Page scroll anchors
