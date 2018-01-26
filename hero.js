const Hero = function(name,health,favouriteFood){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}

Hero.prototype.canTalk = function(){
  return `My name is ${this.name}`;
}

Hero.prototype.canEat = function(food){
  if(this.favouriteFood === food){
    this.health += (food.replenishmentValue * 1.5)
  } else{
    this.health += food.replenishmentValue
  }
}

Hero.prototype.addtask = function(task){
  this.tasks.push(task);
}

Hero.prototype.orderByReward = function(){
  return this.tasks.sort(function(a,b){
    return b.reward - a.reward;
  })
}

Hero.prototype.orderByUrgency = function(){
  return this.tasks.sort(function(a,b){
    return a.urgencyLevel - b.urgencyLevel;
  })
}

Hero.prototype.checkTask = function(){
  var completedTasks = this.tasks.filter(function(task){
    return task.completed;
  })
  return completedTasks;
}




module.exports = Hero;
