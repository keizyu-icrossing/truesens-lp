(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    new Swiper ('.hero-slider .swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    new Swiper('.product-slider .swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    new Swiper ('.blockquote-slider .swiper-container', {
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
