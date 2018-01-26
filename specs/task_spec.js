const assert = require('assert');
const Task = require('../task.js');

describe('task', function(){
  var task;


  beforeEach(function(){
    task = new Task("difficult",1,30);
  })


  it('has a difficulty level', function(){
    assert.strictEqual("difficult", task.difficultyLevel);
  })

  it('has an urgency level', function(){
    assert.strictEqual(1, task.urgencyLevel);
  })

  it('has a reward', function(){
    assert.strictEqual(30, task.reward);
  })

  it('marked as completed or not', function(){
    assert.strictEqual(false, task.completed);
  })

})
