
// computer choices
const letterBase = ["a", "b", "c"];
let currentLetter = letterBase[Math.floor(Math.random() * letterBase.length)]
var wins = 0;
var triesLeft = 15;
var losses = 0;
var guesses= '';
// variables for wins, 
// variable for losses
// variable for ties

var $wins = document.getElementById("wins");
var $triesLeft = document.getElementById("triesLeft");
var $losses = document.getElementById("losses");
var $userChoice = document.getElementById("userChoice");
// Create variable for each html element to update their text


// on key up, 
document.onkeyup = function (event) {
    let userChoice = event.key;

    guesses += userChoice + ", ";

    var resultDiv = document.getElementById('userChoice');
    // appendedElement = document.createElement('div');
    resultDiv.innerHTML = guesses;
    // resultDiv.appendChild(appendedElement);


    console.log(userChoice)
    if (userChoice === currentLetter) {
        wins = wins + 1;
        $wins.textContent = wins;
    }
    else {
        triesLeft = triesLeft - 1;
        $triesLeft.textContent = triesLeft;
        if (triesLeft === 0) {
            losses = losses + 1;
            triesLeft = 15
            alert('suckaaa')
            $triesLeft.textContent = triesLeft;
            $losses.textContent = losses;
        }
    }
}
