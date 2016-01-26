function Ticket(movie, time, age, species) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.species = species;
}

Ticket.prototype.price = function() {
  var price = 9;
  var theaterMovies = ["Joy", "The Revenant", "Spotlight"];
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

Ticket.prototype.noAge = function() {
  if(isNaN(this.age)) {
    return true;
  }
}

Ticket.prototype.negAge = function() {
  if (this.age <= 0) {
    return true;
  }
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
    if(newTicket.noAge()) {
      alert('Please enter your age');
      return false;
    }
    if(newTicket.negAge()) {
      alert("You're not old enough to see this movie. In fact, I'm pretty sure you don't even have eyes!")
      return false;
    }
    var price = newTicket.price();
    times = ['12:00pm','2:20pm','3:45pm','5:10pm','6:50pm','9:25pm'];
    var actualTime;
    for(var i = 1; i <= times.length; i++) {
      if(time === i) {
        actualTime = times[i-1];
      }
    }

    $(".ticketPrice").text(price);
    $("#price").show();

    event.preventDefault();

    $("#movieName").text(movie);
    $("#movieTime").text(actualTime);
    $("#userAge").text(age);
    $("#ticket").show();
  });

});
