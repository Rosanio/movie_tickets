function Ticket(movie, time, age, species) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.species = species;
}

Ticket.prototype.price = function() {
  var price = 9;
  var theaterMovies = ["joy", "rev", "spot"];
  for (var i = 0; i < theaterMovies.length; i++) {
    if (this.movie === theaterMovies[i]) {
      price += 1;
    }
  }
  if (this.time < 4) {
    price -= 1;
  }
  if (this.age <= 10 || this.age >= 65) {
    price -= 2;
  }
  for (var j = 0; j < this.species.length; j++) {
    if(this.species[j] === "manitee") {
      price = 0;
    }
  }
  return price;
}

$(function() {
  $("form#questions").submit(function(event) {
    var movie = $("select#movie").val();
    var time = parseInt($("select#time").val());
    var age = parseInt($("input#age").val());
    var species = [];
    $.each($('input[name="iden"]:checked'), function() {
      species.push($(this).val());
    });
    var newTicket = new Ticket(movie, time, age, species);
    var price = newTicket.price();
    console.log('it works');
    console.log(species);

    $(".ticketPrice").text(price);
    $("#price").show();

    event.preventDefault();
  });

});
