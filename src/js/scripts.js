(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    var galleryHero = new Swiper('.hero-slider .swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });

    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 5,
      // loop: true,
      // freeMode: true,
      // loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });

    var galleryTop = new Swiper('.gallery-top', {
      // spaceBetween: 10,
      // loop:true,
      // loopedSlides: 5, //looped slides should be the same
      thumbs: {
        swiper: galleryThumbs,
      },
      // autoplay: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      effect: 'fade',
      fadeEffect: {
          crossFade: true
      }
    });


    var galleryTestimonials = new Swiper ('.blockquote-slider .swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    });


  });

})(jQuery, window, document);
