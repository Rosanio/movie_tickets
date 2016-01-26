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
  if(this.species === 'manitee') {
    price = 0;
  }
  return price;
}

$(document).ready(function() {

});
