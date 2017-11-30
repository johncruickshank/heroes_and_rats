var Food = require("./food.js")

var Hero = function(name, faveFood) {
  this.name = name;
  this.health = 100;
  this.faveFood = faveFood;
  this.tasks = [];
  this.ego = 0;
};

Hero.prototype = {
  sayName: function() {
    return "My name is " + this.name;
  },

  eatFood: function(food) {
    if (food.name === this.faveFood) {
      this.health += (1.5 * food.replenishmentValue);
    } else {
      this.health += food.replenishmentValue;
    };
  }



}



module.exports = Hero;
