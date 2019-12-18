$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      200,
      Math.random() * 1000
    );

    $('.floor').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });
});

