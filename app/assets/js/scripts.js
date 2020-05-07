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

    // document.addEventListener('click', function(e) {
    //     console.log('document click')
	// 	var menu = document.getElementById('menu'),
    //     menuText = document.getElementById('menu__text'),
	// 	targetEl = e.target;  // clicked element
    //
	// 	do {
	// 		if (targetEl == menu) {
	// 			classie.add( menu, 'menu--active');
	// 			return;
	// 		}
    //
	// 	targetEl = targetEl.parentNode;
    //
	// 	} while (targetEl);
    //
    //
	// 	classie.remove( menu, 'menu--active');
	// });
    //

    [].slice.call(document.querySelectorAll('.menu')).forEach(function(el) {
    	var openCtrl = el.querySelector('.menu__button'),
    		closeCtrls = el.querySelectorAll('.menu__close');

    	openCtrl.addEventListener('click', function(e) {
            e.preventDefault();
    		classie.add( el, 'menu--active' );
    	});

    	[].slice.call(closeCtrls).forEach(function(ctrl) {
    		ctrl.addEventListener('click', function() {
                console.log("close");
    			classie.remove(el, 'menu--active');
    		});
    	});
    });


  });

})(jQuery, window, document);
