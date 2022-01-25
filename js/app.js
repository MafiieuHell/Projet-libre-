// ================================================
// tester si jQuery est bien installé
// ================================================

// window.onload = function() {
//     if (window.jQuery) {
//         // jQuery is loaded
//         alert("Youpiiii !!!!");
//     } else {
//         // jQuery is not loaded
//         alert("Marche poaah");
//     }
// };


$(document).ready(function() {


  // ================================================
  // JQuery
  // ================================================


  $('#blue').click(function() {
    $('body, .button').css({
      'background-color': 'lavender',
      'color': '#7c7ca1'
    });
  });

  $('#red').click(function() {
    $('body, .button').css({
      'background-color': '#e5c5bf',
      'color': 'tomato'
    });
  });






  // ================================================
  // mixitup
  // ================================================

  // var mixer = mixitup('.mix-container');


  // ================================================
  // fancy-box
  // ================================================


  $('[data-fancybox="my-gallery"]').fancybox({
    loop: true,
    buttons: [
      "zoom",
      //"share",
      "slideShow",
      //"fullScreen",
      //"download",
      "thumbs",
      "close",
    ],
    // Transition effect between slides
    //
    // Possible values:
    //   false            - disable
    //   "fade'
    //   "slide'
    //   "circular'
    //   "tube'
    //   "zoom-in-out'
    //   "rotate'
    //
    transitionEffect: "circular",
  });


  // ================================================
  // slick slider
  // ================================================

  $('.slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });


});