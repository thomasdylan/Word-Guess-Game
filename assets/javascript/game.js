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
var gameOver = false;
var wrongGuesses = 8;
var guessed = [];
var answerWord = [];
var remainingLetters;
var gameWord;

//Shows elements we want to display even when Game function is not running
document.getElementById("losses").textContent = ("Losses: " + losses);
document.getElementById("wins").textContent = ("Wins: " + wins);
document.getElementById("underscore-word").textContent = ("Press any key to get started!");

//Starts game function on key up



function game() {
    //Grabs a random word from wordJar
    gameWord = wordJar[Math.floor(Math.random() * wordJar.length)];

    //Loops through the gameWord and creates an array of underscores
    for (var i = 0; i < gameWord.length; i++) {
        answerWord[i] = "_";
    }

    //Sets the remaining letters to the length of the random word
    remainingLetters = answerWord.length;

    //Show elements we want during game
    document.getElementById("underscore-word").textContent = answerWord.slice("").join(" ");
    document.getElementById("remaining-guesses").textContent = ("Guesses Remaining: " + wrongGuesses);
    

    //Get key user presses
    document.onkeyup = function (event) {
        var userInput = event.key;
        console.log(userInput);

        //Checks to see if guess has already been made.  If not it adds it to the guessed array.
        if (guessed.includes(userInput.toUpperCase())) {
            console.log("Duplicate guess");
        } else {
            guessed.push(userInput.toUpperCase());
            console.log("guessed: " + guessed);
        }

        //If input is part of the work it adds it to the screen and decresses the amount of letters left.
        for (var i = 0; i < gameWord.length; i++) {
            if (userInput.toUpperCase() === gameWord[i]) {
                answerWord[i] = userInput.toUpperCase();
                if(answerWord.includes(userInput.toUpperCase())) {
                    console.log("only once");
                } else {
                    remainingLetters--;
                }
                
                document.getElementById("underscore-word").textContent = answerWord.slice("").join(" ");
            }
        };

        //If the guess is part of the word it does nothing.  If it isn't then it adds one to the wrongGuesses
        if (answerWord.includes(userInput.toUpperCase())) {
            console.log("Nothing should happen");
        } else {
            wrongGuesses--;
            document.getElementById("remaining-guesses").textContent = ("Guesses Remaining: " + wrongGuesses);
            console.log("wrong guesses: " + wrongGuesses);
        }
        
        //Checks to see if remainingLetters has reached 0.  If so it changes the variable gameOver to true and adds one to wins.
        if(remainingLetters = 0) {
            gameOver = true;
            wins++;
            document.getElementById("wins").textContent = ("Wins: " + wins);
        };

        //Checks to see if wrongGuesses has reached 0.  If so it changes the variable gameOver to true and adds one to losses.
        if (wrongGuesses = 0) {
            gameOver = true;
            losses++;
            document.getElementById("losses").textContent = ("Losses: " + losses);
        };

        console.log(gameOver);
        document.getElementById("guessed-letters").textContent = guessed.slice("").join(" ");
    }

    

    

    console.log(gameWord);
    console.log(wrongGuesses);
}

//If restart button is clicked it refreshes the page.  Has to be outside game function.
function refreshPage() {
    if (confirm("Are you sure? This will reset your score.")) {
        window.location.reload();
    }
};

game();



/*
Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!
X Use key events to listen for the letters that your players will type.
Display the following on the page:
Press any key to get started!
X Wins: (# of times user guessed the word correctly).



X If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
X As the user guesses the correct letters, reveal them: m a d o _  _ a.



X Number of Guesses Remaining: (# of guesses remaining for the user).
X Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
After the user wins/loses the game should automatically choose another word and make the user play it.
*/
