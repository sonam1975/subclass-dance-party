var makeOtherDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps)
};

makeOtherDancer.prototype = Object.create(makeDancer.prototype);
makeOtherDancer.prototype.constructor = makeOtherDancer;

makeOtherDancer.prototype.step = function() {
  makeDancer.prototype.step(this, arguments);
  this.$node.toggle();
  this.$node.fadeOut();
  this.$node.fadeIn();
  this.$node.html("<img class='jacky-blacky' src='https://media3.giphy.com/media/9PnJrN5KHO7YHj0yW1/giphy.gif?cid=790b7611e285d54f79ea9a19cca0b641b8c8a8197ef5ea55&rid=giphy.gif'></img>");
}
