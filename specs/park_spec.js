const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Jurassic Park', 12, [])
    dinosaur1 = new Dinosaur('Raptor', 'carnivore', 65)
    dinosaur2 = new Dinosaur('T-Rex', 'carnivore', 30)
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 12);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should count number of dinosaurs in collection', function(){
    const actual = park.noOfDinosaurs();
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur('T-Rex');
    const actual = park.noOfDinosaurs();
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur('T-Rex');
    park.addDinosaur('Raptor');
    park.removeDinosaurByName('Raptor');
    const expected = ['T-Rex'];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  describe('dinosaurs', function(){


  xit('should be able to find the dinosaur that attracts the most visitors');
  //loop through dinosaurs comparing visitor number

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur('T-Rex', 'carnivore', 35);
    park.addDinosaur('Raptor', 'carnivore', 50);
    park.addDinosaur('T-Rex', 'omnivore', 70);
    park.addDinosaur('Raptor', 'omnivore', 20);
    const expected = ['T-Rex', 'T-Rex'];
    const actual = park.findBySpecies('T-Rex');
    assert.deepStrictEqual(actual, expected);
  });

  xit('should be able to remove all dinosaurs of a particular species');

});

});
