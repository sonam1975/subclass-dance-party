var makeKickyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeKickyDancer.prototype = Object.create(makeDancer.prototype);
makeKickyDancer.prototype.constructor = makeKickyDancer;

makeKickyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this, arguments);

  this.$node.fadeIn();

  this.$node.html('<img class="slidy-dancer" src="https://media.giphy.com/media/m9cyUUQ548jLLUvwR9/giphy.gif"></img>');
};
