$(document).ready(function () {
  'use strict';
  // banner slider
  $('.banner-slider').slick({
  arrows: false,
  slidesToShow: true,
  dots: true,
  // autoplay: true,
  sautoplaySpeed: 500,
});
// About video
  $('.venobox').venobox();
  
  // testimonial slide
  $('.testimonial-slider').slick({
  arrows: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
    sautoplaySpeed: 500,
    responsive: [
     {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
      },
      
      {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    
  ]
  
  });
  
  // counter
  $('.counter').counterUp({
		delay: 10,
		time: 2000,
  });
  


});
	
