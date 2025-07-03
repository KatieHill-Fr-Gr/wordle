/*-------------------------------- Constants --------------------------------*/

const guessLimit = 6;
const correctWordLetterCount = {};
const guessMatchCount = {};


/*-------------------------------- Variables --------------------------------*/

let correctWord;
let currentBoxIdx = 0;
let row;
let currentRow;
let currentRowIdx = 0;
let selectedLetters = []
let currentGuessIdx = 0;
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
    startCorrectWordCount()
    winner = false;
    gameEnd = false;
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

function startCorrectWordCount() {
    for (const letter in correctWordLetterCount) {
        delete correctWordLetterCount[letter];
    }
    for (const letter of correctWord) {
        correctWordLetterCount[letter] = (correctWordLetterCount[letter] || 0) + 1;
    }
}

// * Allow user to enter and delete letters, then submit their guess

function selectLetter(e) {
    if (gameEnd === true) {
        return
    }
    let letter 
    if (e.type ==="click") {
        letter = e.target.textContent;
    } else if (e.type === "keydown") {
        letter= e.key;
    }
    if (currentBoxIdx < allBoxes.length) {
        allBoxes[currentBoxIdx].textContent = letter;
        currentBoxIdx++;
    }
    selectedLetters.push(letter);
}

function deleteLetter() {
    if (gameEnd === true) {
        return
    }
    if (currentBoxIdx > 0) {
        currentBoxIdx--;
        allBoxes[currentBoxIdx].textContent = "";
    }
    selectedLetters.pop();
}

function submitGuess() {
    if (selectedLetters.length < correctWord.length) {
        messageEl.textContent = "Make sure you guess all five letters!"
        return;
    }
    messageEl.textContent = ""
    updateCurrentRow();
    updateGuessCount();
    checkForMatch();
    checkForDiffPosition();
    checkForWin();
    if (gameEnd === false) {
        nextGuess();
    }
}

// * Check against the correctWord for matching letters, positions, and whole word

function updateCurrentRow() {
    row = document.querySelector(`[data-row="${currentRowIdx}"]`);
    currentRow = row.querySelectorAll(".box");
}

function updateGuessCount() {
    for (const letter in guessMatchCount) {
        delete guessMatchCount[letter];
    }
}

function checkForMatch() {
    selectedLetters.forEach((letter, index) => {
        if (letter === correctWord[index]) {
            currentRow[index].classList.add("match");
            guessMatchCount[letter] = (guessMatchCount[letter] || 0) + 1;
        }
    })
}

function checkForDiffPosition() {
    selectedLetters.forEach((letter, index) => {
        if (currentRow[index].classList.contains("match"))
            return;
        const alreadyMatched = guessMatchCount[letter] || 0;
        const frequencyInWord = correctWordLetterCount[letter] || 0;
        if (frequencyInWord > 0 && alreadyMatched < frequencyInWord) {
            currentRow[index].classList.add("diff-position");
            guessMatchCount[letter] = alreadyMatched + 1;
        }
    })
}

function checkForWin() {
    const guess = selectedLetters.join("");
    if (guess === correctWord) {
        winner = true;
        gameEnd = true;
        messageEl.textContent = "Congrats, you guessed right!"
    } else if (currentGuessIdx >= guessLimit - 1 && winner === false) {
        messageEl.textContent = `Bad luck! The correct answer was ${correctWord}.`
        gameEnd = true;
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

document.addEventListener("keydown", selectLetter);



