// randomly generate 4 numbers
// randomly generate a target number
// store all of them
// apply numbers to images
// reset numbers after win or loss
var wins = 0;
var losses = 0;
var total = 0;
var image1 = Math.floor(Math.random() * 12) + 1;
var image2 = Math.floor(Math.random() * 12) + 1;
var image3 = Math.floor(Math.random() * 12) + 1;
var image4 = Math.floor(Math.random() * 12) + 1;
var targetNumber = Math.floor(Math.random() * 120) + 19;
$("#target-number").text(targetNumber);
$("#myGuess").text(total);

// if "total" equals "targetNumber," increment wins by one
// if "total" is greater than "targetNumber," increment losses by one

function checkScore() {
  if (total === targetNumber) {
    wins++;
    $("#wins").text(wins);
    total = 0;
    $("#myGuess").text(total);
    targetNumber = Math.floor(Math.random() * 120) + 19;
    $("#target-number").text(targetNumber);
    image1 = Math.floor(Math.random() * 12) + 1;
    image2 = Math.floor(Math.random() * 12) + 1;
    image3 = Math.floor(Math.random() * 12) + 1;
    image4 = Math.floor(Math.random() * 12) + 1;
  } else if (total > targetNumber) {
    losses++;
    console.log(losses);
    $("#losses").text(losses);
    total = 0;
    $("#myGuess").text(total);
    targetNumber = Math.floor(Math.random() * 120) + 19;
    $("#target-number").text(targetNumber);
    image1 = Math.floor(Math.random() * 12) + 1;
    image2 = Math.floor(Math.random() * 12) + 1;
    image3 = Math.floor(Math.random() * 12) + 1;
    image4 = Math.floor(Math.random() * 12) + 1;
  }
}

$("#image1").on("click", function () {
  total += image1;
  $("#myGuess").text(total);
  checkScore();
});

$("#image2").on("click", function () {
  total += image2;
  $("#myGuess").text(total);
  checkScore();
});

$("#image3").on("click", function () {
  total += image3;
  $("#myGuess").text(total);
  checkScore();
});

$("#image4").on("click", function () {
  total += image4;
  $("#myGuess").text(total);
  checkScore();
});