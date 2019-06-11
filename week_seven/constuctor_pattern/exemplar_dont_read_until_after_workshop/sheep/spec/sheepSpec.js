describe("Sheep", function() {
  var sheep;

  describe("#sayName", function() {
    beforeEach(function() {
      sheep = new Sheep("bessie");
    });

    it("can say its name", function() {
      expect(sheep.sayName()).toEqual("bessie");
    });
  });
});
