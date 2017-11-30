var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js');
var Task = require('../task.js');

describe("Hero", function(){
    var hero, food1, food2;

    beforeEach(function(){
        hero = new Hero("MichaelAngelo", "Pepperoni Pizza");
        food1 = new Food("Margherita", 50);
        food2 = new Food("Pepperoni Pizza", 50);
    });

    it("should have a health value of 100", function(){
        assert.strictEqual(hero.health, 100);
    })

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
});
