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

//Picks a random word from our list
gameWord = wordJar[Math.floor(Math.random() * wordJar.length)];

//Shows elements we want to display even when Game function is not running
document.getElementById("losses").textContent = ("Losses: " + losses);
document.getElementById("wins").textContent = ("Wins: " + wins);
document.getElementById("underscore-word").textContent = ("Press any key to get started!");

function newWord() {
    //Picks a random word from our list
    gameWord = wordJar[Math.floor(Math.random() * wordJar.length)];

    //Loops through the gameWord and creates an array of underscores
    for (var i = 0; i < gameWord.length; i++) {
        answerWord[i] = "_";
    }

    //
    document.getElementById("underscore-word").textContent = answerWord.slice("").join(" ");
    //Dev tools cheatcodes.
    console.log(gameWord);
}

//When the window is loaded and a key is pressed this function calls newWord and set gameStart to true.
//Wrapping this block inside an if function without the inner if doesn't work. Must be black magic.
document.onkeyup = function () {
    if (!gameStart) {
        gameStart = true;
        newWord();
        console.log(gameStart);
    }
}

/*
Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!
Use key events to listen for the letters that your players will type.
Display the following on the page:
Press any key to get started!
Wins: (# of times user guessed the word correctly).



If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
As the user guesses the correct letters, reveal them: m a d o _  _ a.



Number of Guesses Remaining: (# of guesses remaining for the user).
Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
After the user wins/loses the game should automatically choose another word and make the user play it.
*/