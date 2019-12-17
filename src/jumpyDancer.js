var makeJumpyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeJumpyDancer.prototype = Object.create(makeDancer.prototype);
makeJumpyDancer.prototype.constructor = makeJumpyDancer;

makeJumpyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this, arguments);


  this.$node.animate("slide", {direction: "left" }, 1000);


  this.$node.html('<img class="flossy-black" src="https://media.giphy.com/media/dQpqkxXyPvb2iImius/giphy.gif"></img>')
};
