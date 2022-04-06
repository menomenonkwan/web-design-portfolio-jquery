$(document).ready(function() {

  // Window resize
  $(window).on('resize', function(){
    const screenHeight = $(this);

    if (screenHeight.width() >= 768) { 
      $('nav').show();
    }
  });

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

  // Hamburger Menu
  $('.hamburger').click(() => {
    $('.hamburger').toggleClass('open');
    $('nav').slideToggle(300, 'swing');
  });

  $('nav a').click(() => {
    const screenWidth = $(this).width();

    if(screenWidth < 768) {
      $('nav').slideToggle(300, 'swing');
      $('.hamburger').toggleClass('open');
    }
  })

  // Desktop menu
  $(window).on('scroll', () => {
    const scrollPosition = $(this).scrollTop();
    const screenWidth = $(this).width();
    const header = $('header');
    const brand = $('header h3');
    const nav = $('nav');
    
    if (scrollPosition > 210 && screenWidth >= 768) {
      header.addClass('menu-fade');
      brand.addClass('menu-shrink');
      nav.addClass('menu-shrink');
    } else {
      header.removeClass('menu-fade');
      brand.removeClass('menu-shrink');
      nav.removeClass('menu-shrink');
    }

    if (scrollPosition > 525) {
      header.addClass('menu-darken');
    } else {
      header.removeClass('menu-darken');
    }
  })

  // tabs
  $( function() {
    $( "#tabs" ).tabs();
  } );

  
})