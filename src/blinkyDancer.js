var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this, arguments);

  this.$node.toggle();
  this.$node.html("<img class='jacky-blacky' src='https://media.giphy.com/media/dQpqkxXyPvb2iImius/giphy.gif'></img>");
};

