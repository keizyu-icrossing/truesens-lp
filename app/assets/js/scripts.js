/*!
 * TrueSens
 * True Sens LP
 * 
 * @author Keizyu
 * @version 1.0.5
 * Copyright 2020. MIT licensed.
 */
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
