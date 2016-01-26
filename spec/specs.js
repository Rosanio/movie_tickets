describe("Ticket",function() {
  it("will return a ticket object with entered values",function() {
    var testTicket = new Ticket("Inglorious Bastards","9:30",91);
    expect(testTicket.movie).to.equal("Inglorious Bastards");
    expect(testTicket.time).to.equal("9:30");
    expect(testTicket.age).to.equal(91);
  });
});
