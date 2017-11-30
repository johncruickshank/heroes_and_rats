var assert = require('assert');
var Task = require('../task.js');

describe("Task", function() {

  var task1;
  var task2;
  var task3;

  beforeEach(function() {
    task1 = new Task("Save a cat from a tree", 1, 1, 5);
    task2 = new Task("Help granny cross the road", 1, 2, 3);
    task3 = new Task("Thwart a would-be mugger, leaving him tied up outside a police station", 3, 4, 10);
  });

  it("should be able to mark a task as complete", function() {
    task1.markAsCompleted();
    assert.strictEqual(task1.completion, true);
  });

  it("should be able to increase urgency", function() {
    task1.increaseUrgency(2);
    assert.strictEqual(task1.urgency, 3);
  });

})
