/**
 * 
 * Theme Elements v1.0.0
 * Copyright (c) 2019 Valentino Pesce (https://github.com/kenlog)
 * Copyright (c) 2019 ilTuoBrand.it (https://iltuobrand.it/)
 * Licensed under MIT (https://raw.githubusercontent.com/kenlog/theme-elements/master/LICENSE)
 *  
 * @author Valentino Pesce
*/

$(document).ready(function () {

  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 300, function () {
        window.location.hash = hash;
      });
    }
  });

  $('div.fadeIn').fadeIn(1500).removeClass('fadeIn');

  $('body').scrollspy({ target: '#mainNav' })

  $(function () {
    $('.navbar-nav a').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });
  });

});