// make variables for wins/losses/letters guessed/ guesses left/ computer random letter

var wins = 0;
var losses = 0;
var lettersGuessed = [];
var guessesLeft = 10;
var computerRandom = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


// computer generates random letter from array
var computerLetter; 

//calling upon reset function before game starts
resetGame();

//make a function when user clicks on a key
document.onkeypress = function(event) {
    var userGuess = event.key.toLowerCase();
    

    //if users guess is the same as computers guess then user alerted, wins goes up 1, guessesleft and letters guessed resets
    if (userGuess === computerLetter) {
        alert("YOU WON!!!");
        wins++;
        //call upon id within function to input back to html file
        document.getElementById("youWin").innerHTML = "Wins: " + wins;
        resetGame();
    }

    //if users guess does not equal computers letter then guessesleft goes down 1 and lettersguessed gets pushed to line
    if (userGuess !== computerLetter) {
        guessesLeft --;
        lettersGuessed.push(userGuess);
        //call upon id within function to input back to html file
        document.getElementById("soFar").innerHTML = "Guesses So Far: " + lettersGuessed;
        document.getElementById("youGuessed").innerHTML = "Guesses Left: " + guessesLeft;
    }

    //if guessed left is 0 then user alerted, guesses left/ letters guessed resets and losses goes up 1
    if (guessesLeft < 1 ) {
        alert("YOU LOST TRY AGAIN!")
        losses++;
        document.getElementById("youLose").innerHTML = "losses: " + losses;
        resetGame();
    }


}

 //defining reset game as function to simplify code and re use in different if statements
 function resetGame(){
    computerLetter = computerRandom[Math.floor(Math.random() * computerRandom.length)];
    console.log("this is the letter ", computerLetter) 
    lettersGuessed = [];
    guessesLeft = 10;
    document.getElementById("soFar").innerHTML = "Guesses So Far: " + lettersGuessed;
    document.getElementById("youGuessed").innerHTML = "Guesses Left: " + guessesLeft;
    }

