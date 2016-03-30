/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var navigationScroll = __webpack_require__(1);
	var initPageScrollLinks = __webpack_require__(2);

	$(document).ready(function () {

		// Top Slider
		$('#top-slider').carousel({
			interval: 5000
		});

		// Scrollr
		var s = skrollr.init({ forceHeight: false });

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
		$('#mobile-icon').bind('click', function () {
			event.preventDefault();
			$('#main-nav-mobile').show();
		});
		$('#mobile-close').bind('click', function () {
			event.preventDefault();
			$('#main-nav-mobile').hide();
		});
	}

	// Hide mobile menu on click
	function initHideMainNavMobile() {
		$('.page-scroll').on('click', function (event) {
			event.preventDefault();
			$('#main-nav-mobile').hide();
		});
	}

	// Page scroll anchors

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	function navigation() {
	  var links = $('.main-nav-list a');
	  var headerHeight = $('header').height();

	  var menuLinks = links.map(function (_index, link) {
	    var jQueryObj = $(link);
	    var anchor = jQueryObj.attr('href');
	    var section = $(anchor);

	    var height = section.height();

	    var topOffset = section.offset().top;
	    var bottomOffset = topOffset + height;

	    return { element: jQueryObj, topOffset: topOffset, bottomOffset: bottomOffset };
	  });

	  $(document).on('scroll', function (e) {
	    menuLinks.each(function (_index, navigationSection) {
	      var currentScrollTop = $(document).scrollTop() + headerHeight;

	      if (currentScrollTop > navigationSection.topOffset && currentScrollTop < navigationSection.bottomOffset) {
	        links.removeClass('menu-link-active');
	        navigationSection.element.addClass('menu-link-active');
	      }
	    });
	  });
	}

	module.exports = navigation;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	function initPageScrollLinks() {
						$('.main-nav-list a').on('click', function (event) {
											event.preventDefault();

											var target = $(event.target).attr('href'),
											    elem = $(target),
											    offset = elem.offset().top - 60;

											$('body, html').animate({ scrollTop: offset + 1 }, 500);
						});
	};

	module.exports = initPageScrollLinks;

/***/ }
/******/ ]);