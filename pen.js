function Pen() {
  this._hold = [];
};

Pen.prototype.add = function(sheep) {
  this._hold.push(sheep)
};

Pen.prototype.sheepNames = function() {
  return this._hold.map(function(sheep){
    return sheep.sayName();
  });

};

