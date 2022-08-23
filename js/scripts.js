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

// User Interface Logic
function handleSubmission(event) {
  event.preventDefault()
  const inputtedMovie = parseInt(document.getElementById("movie-input").value);
  const inputtedTimeOfDay = parseInt(document.querySelector("input[name='timeOfTheDay']:checked").value);
  const inputtedAgeGroup = parseInt(document.getElementById("userAge-input").value);
  let input = new Input(inputtedMovie, inputtedTimeOfDay, inputtedAgeGroup);
  
  let price;
  if (input.calculate() > 6 ) {
    price = 15;
  } else if (input.calculate() < 6 ) {
    price = 12;
  } else {
    price = 8;
  }
  
  document.getElementById("results").innerHTML = price;
  document.getElementById("resultsDiv").removeAttribute("class");
}

function resetForm() {
  document.getElementById("inputForm").reset();
  }

window.addEventListener ("load", function() {
  let form = document.getElementById("inputForm");
  form.addEventListener("submit", handleSubmission);
  form.addEventListener("submit", resetForm);
});
