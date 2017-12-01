var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js');
var Task = require('../task.js');

describe("Hero", function(){
    var hero, food1, food2, task1, task2, task3;

    beforeEach(function(){
        hero = new Hero("MichaelAngelo", "Pepperoni Pizza");
        food1 = new Food("Margherita", 50);
        food2 = new Food("Pepperoni Pizza", 50);
        task1 = new Task("Save a cat from a tree", 1, 1, 5);
        task2 = new Task("Help granny cross the road", 1, 2, 3);
        task3 = new Task("Thwart a would-be mugger, leaving him tied up outside a police station", 3, 4, 10);
    });

    it("should have a health value of 100", function(){
        assert.strictEqual(hero.health, 100);
    });

    it("should talk", function(){
        assert.strictEqual(hero.sayName(), "My name is MichaelAngelo");
    });

    it("should increase health by eating food", function(){
        hero.eatFood(food1);
        assert.strictEqual(hero.health, 150);
    });

    it("should increase more health by eating fav food", function(){
        hero.eatFood(food2);
        assert.strictEqual(hero.health, 175);
    });

    it("should be able to add tasks to list", function() {
      hero.addTask(task1);
      assert.strictEqual(hero.tasks.length, 1);
    });

    it("should prioritise tasklist", function() {
      hero.addTask(task1);
      hero.addTask(task2);
      hero.addTask(task3);
      hero.prioritiseTasks();
      assert.deepStrictEqual(hero.tasks, [task3, task2, task1]);
    });
});
