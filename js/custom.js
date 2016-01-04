$(document).ready(function(){

	// Top Slider

	$('#top-slider').carousel({
		interval: 5000
	});

	// Mobile menu
	mobileMenu();

	//Scrollr
	var s = skrollr.init({forceHeight: false});

	// Page scroll anchors init
	initPageScrollLinks();

	
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


// Page scroll anchors
function initPageScrollLinks(){
	$('.page-scroll').on('click', function(event) {
	    event.preventDefault();

	    var target = $(event.target).attr('href'),
	        elem = $('body').find(target);
	        offset = elem.offset().top - 60;

	    $('body, html').animate({scrollTop: offset}, 300);
	});
}


/* $('#navigation a.link').on('click', function(event) {
    $('html, body').animate({scrollTop: offset}, 300);
    event.preventDefault();

    var target = $(event.target).attr('href'),
        elem = $('body').find(target);
        offset = elem.offset().top - 60;

    $('html, body').animate({scrollTop: offset}, 300);
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
}); */