alert("Lets play a guessing game");

var guessArray = [];
var numberOfGuesses = 0;
var maxNumberOfGuesses = 9;
var numberOfLosses = 0;
var computerGuessedLetter;
var numberOfWins = 0;

function guess() {
	var letters = "abcdefghiklmnopqrstuvwxyz";
    var guessString = '';
    {
		var rlet = Math.floor(Math.random() * letters.length);
		guessString += letters.substring(rlet,rlet+1);
	}
	computerGuessedLetter = guessString
}

function myKeyPress(event){
          
    var keyLet = String.fromCharCode(event.keyCode);
    
    numberOfGuesses = numberOfGuesses + 1;

    guessArray.push(keyLet);
    
    document.getElementById("guesses").innerHTML=guessArray;
    document.getElementById("guessesleft").innerHTML=maxNumberOfGuesses-numberOfGuesses;

    //WIN
   if(keyLet == computerGuessedLetter) {
       numberOfGuesses = 0;
       guessArray = [];
       numberOfWins = numberOfWins + 1;
       guess();
   } 
   //CONTINUE PLAYING
   else {

    //CHECK IF LOST
    if(numberOfGuesses == maxNumberOfGuesses) {
        numberOfLosses = numberOfLosses+1;
        numberOfGuesses = 0;
        guessArray = [];
        guess();
    }
   }

   document.getElementById("wins").innerHTML=numberOfWins;
   document.getElementById("losses").innerHTML=numberOfLosses;
  }



