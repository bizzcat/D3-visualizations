'use strict';

/**
 * sets the logo ID in the top left corner of the page to 'spin' when mouseout.
 */
function setLogoSpin() {
  $('.logo').children().mouseover(function() {
    $('.logo').children().attr('id', 'spin');
  });

  $('.logo').mouseout(function() {
    $('.logo').children().attr('id', '');
  });
}

setLogoSpin();
