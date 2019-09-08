// make variables for wins/losses/letters guessed/ guesses left/ computer random letter

var wins = 0;
var losses = 0;
var lettersGuessed = [];
var guessesLeft = 9;
var computerRandom = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


//make a function when user clicks on a key

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase;

    var computerLetter = computerRandom[Math.floor(Math.random() * computerRandom.length)]; // random letter from array
    
    //if users guess is the same as computers guess then user alerted, wins goes up 1, guessesleft and letters guessed resets
    if (userGuess === computerLetter) {
        alert("YOU WON!!!");
        wins++;
        guessesLeft = 9;
        lettersGuessed = [];
    }

    //if users guess does not equal computers letter then guessesleft goes down 1 and lettersguessed gets pushed to line
    if (userGuess !== computerLetter) {
        guessesLeft --;
        lettersGuessed.push(lettersGuessed);

    }

    //if guessed left is 0 then user alerted, guesses left/ letters guessed resets and losses goes up 1
    if (guessesLeft === 0) {
        alert("YOU LOST TRY AGAIN!")
        guessesLeft = 9;
        losses++;
        lettersGuessed = [];
    }
}