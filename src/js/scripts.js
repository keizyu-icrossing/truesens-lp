(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

  });

})(jQuery, window, document);
