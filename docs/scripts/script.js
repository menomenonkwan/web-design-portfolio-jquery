$(document).ready(function() {
  // Cursor
  $(document).on("mousemove", (e) => {
    const cursor = $(".cursor");
    const top = e.pageY - $(window).scrollTop();

    cursor.attr(
      "style",
      `top: ${top -10}px; left: ${e.pageX - 10}px;`
    );
  });

  // Landing Parallax
  $(window).on('scroll', () => {
    const parallax = $('.parallax');
    const scrollPosition = $(this).scrollTop();
    parallax.css('transform', 'translateY(' + scrollPosition * 0.5 + 'px' + ')');
  });

  // Desktop menu
  $(window).on('scroll', () => {
    const scrollPosition = $(this).scrollTop();
    const header = $('header');
    const brand = $('header h3');
    const nav = $('nav');

    if (scrollPosition > 210) {
      header.addClass('menu-split');
      brand.addClass('menu-shrink');
      nav.addClass('menu-shrink');
    } else {
      header.removeClass('menu-split');
      brand.removeClass('menu-shrink');
      nav.removeClass('menu-shrink');
    }

    if (scrollPosition > 525) {
      header.addClass('menu-darken');
    } else {
      header.removeClass('menu-darken');
    }
  })


  $( "#draggable" ).draggable();
})