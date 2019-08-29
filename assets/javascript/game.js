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
var maxWrongGuesses = 8;
var wrongGuesses = 0;
var guessed = [];
var answerWord = [];
var remainingLetters;
var gameWord;


//Grabs a random word from wordJar
gameWord = wordJar[Math.floor(Math.random() * wordJar.length)];

//Loops through the gameWord and creates an array of underscores
for (var i = 0; i < gameWord.length; i++) {
    answerWord[i] = "_";
}

//Sets the remaining letters to the length of the random word
remainingLetters = answerWord.length;

//console.log(remainingLetters);
document.getElementById("underscore-word").textContent = answerWord.slice("").join(" ");

//Get key user presses
document.onkeyup = function (event) {
    var userInput = event.key;
    console.log(userInput);

    if (guessed.includes(userInput.toUpperCase())) {
        console.log("Duplicate guess");
    } else {
        guessed.push(userInput.toUpperCase());
        console.log("guessed: " + guessed);
    }

    for (var i = 0; i < gameWord.length; i++) {
        if (userInput.toUpperCase() === gameWord[i]) {
            answerWord[i] = userInput.toUpperCase();
            remainingLetters--;
            document.getElementById("underscore-word").textContent = answerWord.slice("").join(" ");
        }
    };

    if (answerWord.includes(userInput.toUpperCase())) {
        console.log("Nothing should happen");
    } else {
        wrongGuesses++;
        console.log("wrong guesses: " + wrongGuesses);
    }

    if (wrongGuesses >= maxWrongGuesses) {
        gameOver = true;
    };
    console.log(gameOver);
    document.getElementById("guessed-letters").textContent = guessed.slice("").join(" ");
}

function resetGame() {
    wrongGuesses = 0;
    gameStart = false;
};

function refreshPage() {
    if (confirm("Are you sure? This will reset your score.")) {
        window.location.reload();
    }
};

console.log(gameWord);
console.log(wrongGuesses);


/*
Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!
Use key events to listen for the letters that your players will type.
Display the following on the page:
Press any key to get started!
Wins: (# of times user guessed the word correctly).



X If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
X As the user guesses the correct letters, reveal them: m a d o _  _ a.



Number of Guesses Remaining: (# of guesses remaining for the user).
X Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
After the user wins/loses the game should automatically choose another word and make the user play it.
*/

//2 functions.  One to start game and one after game is ended.  Calls function multiple times