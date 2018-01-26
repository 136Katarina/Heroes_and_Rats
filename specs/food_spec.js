const assert = require('assert');
const Food = require('../food.js');


describe('food', function(){
  var food;

  beforeEach(function(){
   food = new Food("melon", 10);
  })


  it('has a name', function(){
    assert.strictEqual('melon', food.name);
  })

  it('has a value', function(){
    assert.strictEqual(10, food.replenishmentValue);
  })
})
