var Task = function(description, difficulty, urgency, reward){
    this.description = description;
    this.difficulty = difficulty;
    this.urgency = urgency;
    this.reward = reward;
    this.completion = false;
}

Task.prototype = {
    markAsCompleted: function(){
        this.completion = true;
    },
    increaseUrgency: function(newUrgency){
        this.urgency += newUrgency;
    }
}

module.exports = Task;
