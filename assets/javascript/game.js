// make variables to represent wins/losses/letters guessed/guesses left/ and array for computer letters available 

var wins = 0;
var losses = 0;
var lettersGuessed = [];
var guessesLeft = 0;
var computerRandom = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

//create variable that generates random letter for computer(defined in reset game function)
var computerLetter;

//call upon reset function before game starts
resetGame();

//make event listener when user clicks on key
document.onkeypress = function(event){
//make variable for when user cicks key
    var userGuess = event.key.toLowerCase();
 // check if userGuess is a letter. If so, execute logic inside.
 if (computerRandom.includes(userGuess)) {

 //if users guess is same as computer then user alerted, wins goes up 1, game resets
 if(userGuess === computerLetter) {
     wins++;
    //call upon id within this function to output back to htmlfile
     document.getElementById("youWin").innerHTML = "Wins: " + wins;
     alert("YOU WON!!!");
     //call resetGame Function to reset when user wins
     resetGame();
 }
  // if userGuess has already been guessed, alert user and end logic.
 else if (lettersGuessed.includes(userGuess)){
     alert("YOU ALREADY GUESSED THAT LETTER");
     return false;
 }

 //else(otherwise) if users guess does not equal computers letter then guessesLeft goes down 1 and userguess gets pushed to lettersGuessed then outputted to "soFar" in html
 else if (userGuess !== computerLetter){
     guessesLeft --;
     lettersGuessed.push(userGuess);
     //call upon id within function to input back to htmlfile
     document.getElementById("soFar").innerHTML = "Guesses So Far: " + lettersGuessed;
     document.getElementById("youGuessed").innerHTML = "Guesses Left: " + guessesLeft; 
 }

 //if guesses left is 0 then user is alerted, losses goes up 1 and guessedLeft/lettersGuessed resets
 if (guessesLeft < 1 ) {
     losses ++;
     //call upon id to output losses back to htmlfile
     document.getElementById("youLose").innerHTML = "losses: " + losses;
     alert("YOU LOST TRY AGAIN!!");
     //call reset game function to reset game when user losses
     resetGame();
 }
}

}

// defining resetGame function to simplifycode and reuse in different if statements
function resetGame(){
    //generated random letter then logs into console
    computerLetter = computerRandom[Math.floor(Math.random() * computerRandom.length)];
    console.log("The letter is: " , computerLetter)
    //resets lettersGuessed and guessedLeft
    lettersGuessed = [];
    guessesLeft = 10;
    //resets and outputs back to htmlfile
    document.getElementById("soFar").innerHTML = "Guesses So Far: " + lettersGuessed;
    document.getElementById("youGuessed").innerHTML = "Guesses Left: " + guessesLeft;
}