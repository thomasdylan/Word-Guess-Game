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

document.onkeyup = function(event) {
    var userInput = event.key;
    for(var i = 0; i < gameWord.length; i++) {
        if(userInput.toUpperCase() === gameWord[i]) {
            console.log("success");
        } else {
            console.log("failure");
        }
    }
}

console.log(gameWord);
console.log(hiddenWord);