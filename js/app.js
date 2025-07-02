/*-------------------------------- Variables --------------------------------*/

let correctWord;
let currentBoxIdx = 0;
let row;
let currentRow;
let currentRowIdx = 0;
let selectedLetters = []
let currentGuessIdx = 0;
const guessLimit = 6;
let winner = false;
let gameEnd = false;

/*------------------------ Cached Element References ------------------------*/

const allBoxes = document.querySelectorAll(".box")

const letterKeys = document.querySelectorAll(".key")

const playButton = document.getElementById("play-button")

const enterButton = document.getElementById("enter")

const deleteButton = document.getElementById("delete")

const messageEl = document.getElementById("message")

/*-------------------------------- Functions --------------------------------*/

// * Initialise new game when user clicks "play"

function setUp() {
    messageEl.textContent = "";
    clearGuesses()
    setCorrectWord()
}

function clearGuesses() {
    selectedLetters = []
    allBoxes.forEach((box) => {
        if (box.textContent !== "") {
            box.textContent = ""
        }
    })
    currentRowIdx = 0;
    currentBoxIdx = 0;
    allBoxes.forEach((box) => {
        box.classList.remove("match", "diff-position")
    })
    currentGuessIdx = 0;
}

function setCorrectWord() {
    const randomIdx = Math.floor(Math.random() * words.length);
    correctWord = words[randomIdx];
    console.log("New word selected:", correctWord);
}

// * Allow user to enter and delete letters, then submit their guess

function selectLetter(e) {
    const letter = e.target.textContent;
    console.log(letter);
    if (currentBoxIdx < allBoxes.length) {
        allBoxes[currentBoxIdx].textContent = letter;
        currentBoxIdx++;
    }
    selectedLetters.push(letter);
    console.log(selectedLetters);
}

function deleteLetter() {
    if (currentBoxIdx > 0) {
        currentBoxIdx--;
        allBoxes[currentBoxIdx].textContent = "";
    }
    console.log("Deleted");
    selectedLetters.pop();
}

function submitGuess() {
    if (selectedLetters.length < correctWord.length) {
        messageEl.textContent = "Make sure you guess all five letters!"
        return;
    }
    messageEl.textContent = ""
    updateCurrentRow()
    checkForMatch()
    checkForDiffPosition()
    checkForWin()
    nextGuess()
}

// * Check against the correctWord for matching letters, positions, and whole word

function updateCurrentRow() {
    row = document.querySelector(`[data-row="${currentRowIdx}"]`);
    currentRow = row.querySelectorAll(".box");
}

function checkForMatch() {
    selectedLetters.forEach((char, index) => {
        if (char === correctWord[index]) {
            currentRow[index].classList.add("match");
        }
    })
}

function checkForDiffPosition() {
    selectedLetters.forEach((letter, index) => {
        if (correctWord.includes(letter) && correctWord[index] !== letter) {
            currentRow[index].classList.add("diff-position");
        }
    })
}

function checkForWin() {
    const guess = selectedLetters.join("");
    console.log(guess);
    if (guess === correctWord) {
        winner = true;
        gameEnd = true;
        console.log(winner);
        console.log(gameEnd);
        messageEl.textContent = "Congrats, you guessed right!"
    } else if (currentGuessIdx >= guessLimit - 1 && winner === false) {
        messageEl.textContent = `Bad luck! The correct answer was ${correctWord}.`
        gameEnd = true;
        console.log(winner);
        console.log(gameEnd);
    } else {
        return
    }
}

// * Allows user to move to next row if current guess is incorrect

function nextGuess() {
    if (gameEnd === true) {
        return
    }
    currentGuessIdx++;
    currentRowIdx++;
    selectedLetters = []
}


/*----------------------------- Event Listeners -----------------------------*/

playButton.addEventListener("click", setUp)

letterKeys.forEach((key) => key.addEventListener("click", selectLetter))

deleteButton.addEventListener("click", deleteLetter)

enterButton.addEventListener("click", submitGuess)


