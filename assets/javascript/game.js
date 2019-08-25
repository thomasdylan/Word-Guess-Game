//List of words for game
const wordJar = ["AWKWARD", "BAGPIPES", "BANJO", "BUNGLER", "CROQUET", "CRYPT", "DWARVES", "FERVID", "FISHHOOK",
"FJORD", "GAZEBO", "GYPSY", "HAIKU", "HAPHAZARD", "HYPHEN", "IVORY", "JAZZY", "JIFFY", "JINX", "JUKEBOX", "KAYAK",
"KIOSK", "KLUTZ", "MEMENTO", "MYSTIFY", "NUMBSKULL", "OSTRACIZE", "OXYGEN", "PAJAMA", "PHLEGM", "PIXEL", "POLKA",
"QUAD", "QUIP", "RHYTHMIC", "ROGUE", "SPHINX", "SQUAWK", "SWIVEL", "TOADY", "TWELFTH", "UNZIP", "WAXY", "WILDEBEEST",
"YACHT", "ZEALOUS", "ZIGZAG", "ZIPPY", "ZOMBIE"];
//Grabs a random word from wordJar
gameWord = wordJar[Math.floor(Math.random() * wordJar.length)];
//Turns gameWord into underscores for each letter
var hiddenWord = gameWord.replace(/[a-z]/gi, '_').split("").join(" ");
//Puts the underscores into the html span
document.getElementById("underscore-word").textContent = hiddenWord;
//Get key user presses
document.onkeyup = function(event) {
    var userInput = event.key;
    return userInput;
}
//Reload page on button click after confirm
function refreshPage() {
    if(confirm("Are you sure? This will reset your score.")) {
        window.location.reload();
    }
} 

console.log(gameWord);
console.log(hiddenWord);