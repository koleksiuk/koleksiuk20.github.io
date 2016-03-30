$(document).ready(function(){

	// Top Slider
	$('#top-slider').carousel({
		interval: 5000
	});

	// Scrollr
	var s = skrollr.init({forceHeight: false});

	// Change active menu link on click
	initShowActiveMenuLink();

	// Show active menu link on scroll
	//$(document).on("scroll", onScroll);

	// Mobile menu
	mobileMenu();

	// Hide mobile menu on click init
	initHideMainNavMobile();

	// Page scroll anchors init
	initPageScrollLinks();

});

// Header scroll
/*$(window).bind('scroll', function(event) {
	if($(window).scrollTop() > 100) {
		$('.main-header').addClass('header-short');
	} else {
		$('.main-header').removeClass('header-short');
	}	
});*/

// Show active menu link on click
function initShowActiveMenuLink() {
	var menuLinkActive = $('.main-nav-list a');

	menuLinkActive.on('click', function() {
		menuLinkActive.removeClass('menu-link-active');
		$(this).addClass('menu-link-active');
	});
}

// Show active menu link on scroll
/*function onScroll(event){
	var scrollPos = $(document).scrollTop();
	$('.main-nav-list a').each(function () {
		console.log(this);
		var currLink = $(this);
		var refElement = $(currLink.attr("href"));
		if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
			$('.nav-main ul li a').removeClass('menu-link-active');
			currLink.addClass('menu-link-active');
		}
		else{
			currLink.removeClass('menu-link-active');
		}
	});
}*/

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
function initPageScrollLinks() {
	$('.page-scroll').on('click', function(event) {
	    event.preventDefault();

	    var target = $(event.target).attr('href'),
	        elem = $('body').find(target);
	        offset = elem.offset().top - 60;

	    $('body, html').animate({scrollTop: offset}, 500);
	});
}

/*
$(document).bind("mobileinit", function() {
	$.support.touchOverflow = true;
	$.mobile.touchOverflowEnabled = true;
});*/
