$(document).ready(function () {
    svg4everybody({});
});

$(document).ready(function(){
  $('.hamburger').on('click', function(){
    $('.navigation').toggleClass('opened');
    $('.hamburger').toggleClass('hamburger__active');
    return false;
  });
});


$( document ).ready(function() {
	$('.video__popup-link').magnificPopup({
	 type:'inline',
	 midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
 });

 });
