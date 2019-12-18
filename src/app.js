$(document).ready(function() {

  $('.alignDancersLeftBtn').click(function() {
    $('.dancer').removeClass('left-slidy-dancer');
    $('.dancer').addClass('left-slidy-dancer');
  });

  $('.alignDancersRightBtn').click(function() {
    $('.dancer').removeClass('right-slidy-dancer');
    $('.dancer').addClass('right-slidy-dancer');
  });

  $('.alignDancersTopBtn').click(function() {
    window.dancers.forEach(function(dancer) {
      dancer.css({
        top: 200
      });
    });
  });
});

