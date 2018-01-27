const assert = require('assert');
const Rat = require('../rat.js');
const Food = require('../food.js');

describe('Rat', function(){
  var rat;
  var food1;


  beforeEach(function(){
    rat = new Rat("Daisy");
    food1= new Food("melon", 10)
  })

  it('rat can touch food', function(){
    rat.canTouchFood(food1);
    assert.strictEqual(food1.poisoned, true);
  })





})
