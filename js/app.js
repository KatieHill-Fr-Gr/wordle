/*-------------------------------- Variables --------------------------------*/

let correctWord
let currentBoxIdx = 0
let currentRowIdx = 0
let selectedLetters = []
let winner = false

/*------------------------ Cached Element References ------------------------*/

const allBoxes = document.querySelectorAll(".box")

const letterKeys = document.querySelectorAll(".key")

const playButton = document.getElementById("play-button")

const enterButton = document.getElementById("enter")

const deleteButton = document.getElementById("delete")

const row = document.querySelector(`.row[data-row="${currentRowIdx}"]`);

const currentRow = row.querySelectorAll(".box"); 

const messageEl = document.getElementById("message")

/*-------------------------------- Functions --------------------------------*/

function setUp() {
    clearBoxes()
    setCorrectWord()
}

function clearBoxes() {
    selectedLetters = []
    allBoxes.forEach((box) => {
        if (box.textContent !== "") {
            box.textContent = ""
        }
    })
    currentBoxIdx = 0;
    allBoxes.forEach((box) => {
        box.classList.remove("match", "diff-position")
    })
}

function setCorrectWord() {
    const randomIdx = Math.floor(Math.random() * words.length);
    correctWord = words[randomIdx];
    console.log("New word selected:", correctWord);
}


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
    // Ensure user can only submit a real five-letter word (from the list?)
    checkForMatch()
    checkForDiffPosition()
    checkForWin()
    nextGuess()
}

// * SMALLER FUNCTIONS

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
    const allBoxesFilled = Array.from(allBoxes).every(box => box.value !== "")
    if (guess === correctWord) {
        winner = true;
        console.log(winner);
        messageEl.textContent = "Congrats, you guessed right!"
    } else if (allBoxesFilled && winner === false) {
        messageEl.textContent = `Bad luck! The correct answer was ${correctWord}.`
        console.log(winner);
    } else {
        return
    }
}

function nextGuess() {
    selectedLetters = []
}

/*----------------------------- Event Listeners -----------------------------*/

playButton.addEventListener("click", setUp)

letterKeys.forEach((key) => key.addEventListener("click", selectLetter))

deleteButton.addEventListener("click", deleteLetter)

enterButton.addEventListener("click", submitGuess)


