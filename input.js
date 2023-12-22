let words = [
    "COMPRISE","BASEBALL","FOOTBALL","CHOCLATE","CRIMINAL","JERMAINE","CULTURAL","CHAMPION","GRATEFUL",
    "JUDICIAL","PRINCESS",
];

let images = [
    document.getElementById("hangman0"),
    document.getElementById("hangman1"),
    document.getElementById("hangman2"),
    document.getElementById("hangman3"),
    document.getElementById("hangman4"),
    document.getElementById("hangman5"),
    document.getElementById("hangman6"),
];

let word = Math.floor(words.length * Math.random());

console.log(words[word]);

var counter = 0;

let points = 0;

let wrong_buzzer = new Audio("wrong.mp3");

let correct = new Audio("correct.mp3");

let btn = document.getElementById("myButton");
let reset = document.getElementById("reset");
let input = document.getElementById("input1");
let pick = document.getElementById("picked");
let boxes = document.querySelector(".letter");
let letters = [
    document.getElementById("letter1"),
    document.getElementById("letter2"),
    document.getElementById("letter3"),
    document.getElementById("letter4"),
    document.getElementById("letter5"),
    document.getElementById("letter6"),
    document.getElementById("letter7"),
    document.getElementById("letter8")
];

btn.addEventListener("click", guess);

reset.addEventListener("click", newGame);

function guess() {
    if (checkIfLetter(input.value) && checkIfRepeat(input.value)) {
        input.value = input.value.toUpperCase();
        let answer = false;

        for (let i = 0; i < words[word].length; i++) {
            if (words[word][i] == input.value) {
                letters[i].textContent = input.value;
                answer = true;
                points += 1;
            }
        }
        if (points == 8) {
            GameWon();
        }
        if(answer)
        {
            correct.play();
        }
        if (answer == false) {
            images[counter].style.display = "none";
            pick.textContent = input.value + " " + pick.textContent;
            counter += 1;
            images[counter].style.display = "inline";
            wrong_buzzer.volume = 1;
            wrong_buzzer.play();
        }
        if (counter == 6) {
            GameOver();
        }
        input.value = "";
    }
}

function checkIfLetter(letter) {
    if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90 || letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
        return true;
    }
    else {
        return false;
    }
}

function checkIfRepeat(letter) {
    for (let i = 0; i < words[word].length; i++) {
        if(letters[i].textContent==letter.toUpperCase()) {
            return false;
        }
    }
    for (let i = 0; i < pick.textContent.length; i++) {
        if(pick.textContent[i]==letter.toUpperCase()) {
            return false;
        }
    }
    return true;
}

function GameOver() {
    alert("Game Over");
    input.style.display = "none";
    btn.style.display = "none";
}
function GameWon() {
    alert("Congratulations!");
    input.style.display = "none";
    btn.style.display = "none";
}

function newGame() {
    images[counter].style.display = "none"
    points = 0;
    counter = 0;
    images[counter].style.display = "inline"
    word = Math.floor(words.length * Math.random());
    pick.textContent ="";
    for (let i = 0; i < words[word].length; i++) {
        letters[i].textContent = "";
    }
    input.style.display = "inline";
    btn.style.display = "inline";
    console.log(words[word]);
}

