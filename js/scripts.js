// Business logic for movieTickets
function Ticket() {
  this.price = {}
}

Ticket.prototype.userInput = function(input) {
  this.price[input] = input;
}

function Input (movie, timeOfTheDay, userAge) {
  this.movie = movie;
  this.timeOfTheDay = timeOfTheDay;
  this.userAge = userAge;

}

Input.prototype.calculate = function() {
   return this.movie + this.timeOfTheDay + this.userAge;
}