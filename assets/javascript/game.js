//List of words for game
const wordJar = ["AWKWARD", "BAGPIPES", "BANJO", "BUNGLER", "CROQUET", "CRYPT", "DWARVES", "FERVID", "FISHHOOK",
    "FJORD", "GAZEBO", "GYPSY", "HAIKU", "HAPHAZARD", "HYPHEN", "IVORY", "JAZZY", "JIFFY", "JINX", "JUKEBOX", "KAYAK",
    "KIOSK", "KLUTZ", "MEMENTO", "MYSTIFY", "NUMBSKULL", "OSTRACIZE", "OXYGEN", "PAJAMA", "PHLEGM", "PIXEL", "POLKA",
    "QUAD", "QUIP", "RHYTHMIC", "ROGUE", "SPHINX", "SQUAWK", "SWIVEL", "TOADY", "TWELFTH", "UNZIP", "WAXY", "WILDEBEEST",
    "YACHT", "ZEALOUS", "ZIGZAG", "ZIPPY", "ZOMBIE"
];

//Game variables
var wins = 0;
var losses = 0;
var gameStart = false;
var wrongGuesses = 8;
var wrongArray = [];
var correctArray = [];
var guessed = [];
var answerWord = [];
var remainingLetters;
var gameWord;
var previousWord
var audio = new Audio('assets/audio/drumFill.wav'); //I made this

//Picks a random word from our list
gameWord = wordJar[Math.floor(Math.random() * wordJar.length)];

//Shows elements we want to display even when Game function is not running
document.getElementById("losses").textContent = ("Losses: " + losses);
document.getElementById("wins").textContent = ("Wins: " + wins);
document.getElementById("underscore-word").textContent = ("Press any key to get started!");

//Function resets all variables on new game.
function reset() {
    //Reset Variables
    wrongGuesses = 8;
    wrongArray = [];
    correctArray = [];
    guessed = [];
    answerWord = [];
    remainingLetters;
    gameWord;
    //Reset Guessed Array in HTML.
    document.getElementById("guessed-letters").innerHTML = guessed.slice("").join(" ");
}

//Function creates a new word to play.
function newWord() {

    //Picks a random word from our list
    gameWord = wordJar[Math.floor(Math.random() * wordJar.length)];

    //Should stop the same word from being chosen twice in a row.
    if (gameWord === previousWord) {
        newWord();
    }


    //Loops through the gameWord and creates an array of underscores
    for (var i = 0; i < gameWord.length; i++) {
        answerWord[i] = "_";
    }

    //Displays the word as underscores. innerHTML should prevent a shorter word from not displaying properly on new game.
    document.getElementById("underscore-word").innerHTML = answerWord.slice("").join(" ");
    console.log("gameWord: ", gameWord); //Dev tools cheatcodes.

    //Displays the ammount of guesses remaining.
    document.getElementById("remaining-guesses").innerHTML = ("Guesses Remaining: " + wrongGuesses);

    remainingLetters = answerWord.length; //Sets the variable remaining letter to the length of our word.
    console.log("Remaining Letters: ", remainingLetters);
}

//Function to hold the logic for guessing letters and determining if they are correct or wrong.
function guessing() {
    //all logic will have to be within next block for userInput scope.  Unable to retrieve it to guessing function otherwise.
    document.onkeyup = function (event) {
        var userInput = (event.key).toUpperCase(); //Takes the key the user pressed and assigns it to userInput as an Uppercase letter.  ALL CAPS.
        console.log("userInput: ", userInput);

        //Adds the userInput to the guessed array if the guess doesn't already exist in the array.
        if (guessed.includes(userInput.toUpperCase()) === false) {
            guessed.push(userInput.toUpperCase()); // adds to array
            document.getElementById("guessed-letters").innerHTML = guessed.slice("").join(" "); // adds array to HTML
            console.log("guessed: " + guessed);
        }

        if (correctArray.includes(userInput.toUpperCase()) === false) { //Checks to see if this guess has already been made and if so stops it from decreasing remaining letters.
            //Checks if guess is part of word.  If so it adds it to the array and HTML
            for (var i = 0; i < gameWord.length; i++) { // Loops through the word for each letter.
                if (userInput.toUpperCase() === gameWord[i]) { //Checks guess to index of i of gameWord
                    correctArray.push(userInput.toUpperCase()); //Adds guess to correctArray to prevent the same letter from decreasing remaining letters.
                    answerWord[i] = userInput.toUpperCase(); // Changes the underscore to the user input letter.
                    remainingLetters--; // Decreases remainingLetters by one.
                };
            };
        };

        //Checks if guess is not part of word.  If so it decreases the amount of guesses left.
        if (guessed.includes(userInput.toUpperCase()) && gameWord.includes(userInput.toUpperCase()) === false) {
            if (wrongArray.includes(userInput.toUpperCase()) === false) {
                wrongArray.push(userInput.toUpperCase());
                wrongGuesses--;
                console.log("wrongGuesses: " + wrongGuesses);
            }
        }

        console.log("Updated remaining letters: ", remainingLetters);
        document.getElementById("underscore-word").textContent = answerWord.slice("").join(" "); //adds updated word to screen.
        document.getElementById("remaining-guesses").innerHTML = ("Guesses Remaining: " + wrongGuesses); //adds updated guesses remaining to screen.

        //Win condition
        if (remainingLetters <= 0) {
            audio.play();
            wins++;
            previousWord = gameWord;
            document.getElementById("wins").innerHTML = ("Wins: " + wins);
            document.getElementById("previous-word").innerHTML = ("Previous word: " + gameWord);
            reset();
            newWord();
            guessing();
        }

        //Loss Condition
        if (wrongGuesses <= 0) {
            losses++;
            previousWord = gameWord;
            document.getElementById("losses").innerHTML = ("Losses: " + losses);
            document.getElementById("previous-word").innerHTML = ("Previous word: " + gameWord);
            reset();
            newWord();
            guessing();
        }

    }
}

//When the window is loaded and a key is pressed this function calls newWord, guessing and set gameStart to true.
//Wrapping this block inside an if function without the inner if doesn't work. Must be black magic.
document.onkeyup = function () {
    if (!gameStart) {
        gameStart = true;
        newWord();
        guessing();
        console.log("gameStart: ", gameStart);
    }
}















/*
Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!
X-Use key events to listen for the letters that your players will type.
Display the following on the page:
X-Press any key to get started!
X-Wins: (# of times user guessed the word correctly).



X-If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
X-As the user guesses the correct letters, reveal them: m a d o _  _ a.



Number of Guesses Remaining: (# of guesses remaining for the user).
X-Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
X-After the user wins/loses the game should automatically choose another word and make the user play it.
*/