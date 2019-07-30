const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

module.exports = Park;

Park.prototype.noOfDinosaurs = function () {
  return this.dinosaurs.length;
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaurByName = function (dinosaur) {
  const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(indexOfDinosaur, 1);
};

Park.prototype.findBySpecies = function (species) {
  let speciesSearch = [];
  for (let key in this.dinosaurs){
    if (this.name[key] === species){
      speciesSearch.push(this.name);
    };
    return speciesSearch;
  };




};


module.exports = Park;
