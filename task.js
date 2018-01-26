const Task = function(difficultyLevel,urgencyLevel,reward){
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this. reward = reward;
  this.completed = false;
}


Task.prototype.updateTask = function(){
  if( this.completed === false ) { // !this.completed
    this.completed = true; //make it true
  } else {
    this.completed = false;
  }
}

module.exports = Task;
