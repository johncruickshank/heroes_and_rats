var Food = require("./food.js");
var _ = require("lodash");

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
  },

  addTask: function(task) {
    this.tasks.push(task);
  },

  prioritiseTasks: function() {
    return this.tasks = _.orderBy(this.tasks, ["urgency", "difficulty", "reward"], ["desc", "asc", "desc"]);
  }



}



module.exports = Hero;
