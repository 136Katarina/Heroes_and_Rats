const assert = require('assert');
const Hero = require('../hero.js');
const Task = require('../task.js');
const Food = require('../food.js');

describe('Hero', function(){
  var hero;
  var task1;
  var task2;
  var task3;
  var food1;
  var food2;

  beforeEach(function(){
    food1 = new Food("melon", 10);
    food2 = new Food("tomato soup", 5);
    hero = new Hero("Katarina", 100,food1);
    task1 = new Task("difficult",1,30);
    task2 = new Task("average",2, 20);
    task3 = new Task("easy", 3, 10);


  })

  it('has a favourite food', function(){
    assert.strictEqual(food1, hero.favouriteFood);
  })

  it('has a name', function(){
    assert.strictEqual( hero.canTalk(), "My name is Katarina");
  })

  it('has a health', function(){
    assert.strictEqual(100, hero.health);
  })

  it('has ability to talk', function(){
    assert.strictEqual('My name is Katarina', hero.canTalk());
  })


  it('can eat food', function(){
    hero.canEat(food2);
    assert.strictEqual(105, hero.health);
  })

  it('increase health by favourite', function(){
    hero.canEat(food1);
    assert.strictEqual(115, hero.health);
  })






  it('it can add tasks to do', function(){
    hero.addtask(task1);
    hero.addtask(task2);
    hero.addtask(task3);
    assert.strictEqual(hero.tasks.length, 3);
  })

  it('it can sort tasks by descending value of reward ', function(){
    hero.addtask(task1);
    hero.addtask(task2);
    hero.addtask(task3);
    assert.deepEqual(hero.orderByReward(),[task1, task2, task3]);
  })

  it('it can sort tasks by urgency level', function(){
    hero.addtask(task1);
    hero.addtask(task2);
    hero.addtask(task3);
    assert.deepEqual(hero.orderByUrgency(),[task1,task2,task3]);
  })

  it('can check is the task is completed', function(){
    task2.updateTask();
    hero.addtask(task1);
    hero.addtask(task2);
    hero.addtask(task3);
    assert.deepEqual(hero.checkTask(), [task2]);
  })



})
