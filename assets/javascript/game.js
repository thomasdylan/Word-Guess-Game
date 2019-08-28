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

//Grabs a random word from wordJar
var gameWord = wordJar[Math.floor(Math.random() * wordJar.length)];

//Loops through the gameWord and creates an array of underscores
for (var i = 0; i < gameWord.length; i++) {
    answerWord[i] = "_";
}

//Sets the remaining letters to the length of the random word
remainingLetters = answerWord.length;

//console.log(remainingLetters);
document.getElementById("underscore-word").textContent = answerWord;

//Get key user presses
document.onkeyup = function (event) {
    var userInput = event.key;
    return userInput;
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