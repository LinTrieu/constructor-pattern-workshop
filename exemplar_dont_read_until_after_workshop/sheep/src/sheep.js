function Sheep(name) {
  this._name = name;
};

Sheep.prototype.sayName = function() {
  return this._name;
};
