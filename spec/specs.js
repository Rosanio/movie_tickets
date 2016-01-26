describe("Ticket",function() {
  it("will return a ticket object with entered values",function() {
    var testTicket = new Ticket("Inglorious Bastards",9,91,"manitee");
    expect(testTicket.movie).to.equal("Inglorious Bastards");
    expect(testTicket.time).to.equal(9);
    expect(testTicket.age).to.equal(91);
    expect(testTicket.species).to.equal("manitee");
  });

  it("will calculate a price based on user information", function () {
    var testTicket = new Ticket ("Inglorious Bastards",9,91,"human");
    expect(testTicket.price()).to.equal(7);
  });

  it("will return true if the user does not enter an age", function() {
    var testTicket = new Ticket ("Inglorious Bastards",9,undefined,"human")
    expect(testTicket.noAge()).to.equal(true);
  });

  it("will return true if the user enters a negative age", function() {
    var testTicket = new Ticket ("Inglorious Bastards",9,-3,"human")
    expect(testTicket.negAge()).to.equal(true);
  });
});
