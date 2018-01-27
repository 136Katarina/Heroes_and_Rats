const Rat = function(name){
this.name = name;
}

Rat.prototype.canTouchFood = function(food){
  food.poisoned = true;
}



module.exports = Rat;
