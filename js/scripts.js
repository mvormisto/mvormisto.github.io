 $( document ).ready(function() {

  var $hero = $('#hero'),
    h     = window.innerHeight;

  $hero.css('height', h);

  // Fade the first page elements in
  $('header').delay(200).animate({opacity: 1.0}, 500, function() { 
    // Animation complete. 
  });
  $('nav').delay(800).animate({opacity: 1.0}, 500, function() { 
    //Animation complete. 
  });

  // When clicking navigation link, the browser with smootly scroll to anchor 
  $(document).on('click', 'nav a:first-child, nav a:nth-child(2)', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 300);
  });
});
// Scrollify for snap scrolling
$(function() {
  $.scrollify({
    section : "body > div",
  });
});