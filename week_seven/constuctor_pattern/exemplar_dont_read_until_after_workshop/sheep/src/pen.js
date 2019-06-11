function Pen() {
  this._sheep = [];
};

Pen.prototype.admit = function(singleSheep) {
  this._sheep.push(singleSheep);
};

Pen.prototype.sheepNames = function() {
  return this._sheep
    .map(function(singleSheep) {
      return singleSheep.sayName();
    });
};
