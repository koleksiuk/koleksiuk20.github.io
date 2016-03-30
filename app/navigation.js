function navigation() {
  let links = $('.main-nav-list a');
  let headerHeight = $('header').height();

  let menuLinks = links.map(function(_index, link) {
    let jQueryObj = $(link);
    let anchor = jQueryObj.attr('href');
    let section = $(anchor);

    let height = section.height();

    let topOffset = section.offset().top;
    let bottomOffset = topOffset + height;

    return { element: jQueryObj, topOffset: topOffset, bottomOffset: bottomOffset };
  });

	$(document).on('scroll', function(e) {
    menuLinks.each(function(_index, navigationSection) {
      let currentScrollTop = $(document).scrollTop() + headerHeight;

      if(currentScrollTop > navigationSection.topOffset && currentScrollTop < navigationSection.bottomOffset) {
        links.removeClass('menu-link-active');
        navigationSection.element.addClass('menu-link-active');
      }
    });
	});
}

module.exports = navigation;
