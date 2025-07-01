/*-------------------------------- Variables --------------------------------*/

let correctWord
let currentBoxIdx = 0
let currentRowIdx = 0
let selectedLetters = []
let winner = false

/*------------------------ Cached Element References ------------------------*/

const boxEls = document.querySelectorAll(".box")

const letterKeys = document.querySelectorAll(".key")

const playButton = document.getElementById("play-button")

const enterButton = document.getElementById("enter")

const deleteButton = document.getElementById("delete")

const row = document.querySelector(`.row[data-row="${currentRowIdx}"]`);
const rowBoxes = row.querySelectorAll(".box"); // Think about refactoring so all code is "row-scoped logic"

const messageEl = document.getElementById("message")

/*-------------------------------- Functions --------------------------------*/

function setUp() {
    clearBoxes()
    setCorrectWord()
}

// Need to combine boxEls and rowBoxes to make code cleaner
function clearBoxes() {
    selectedLetters = []
    boxEls.forEach((boxEl) => {
        if (boxEl.textContent !== "") {
            boxEl.textContent = ""
        }
    })
    currentBoxIdx = 0;
    boxEls.forEach((boxEl) => {
        boxEl.classList.remove("match", "diff-position")
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
    if (currentBoxIdx < boxEls.length) {
        boxEls[currentBoxIdx].textContent = letter;
        currentBoxIdx++;
    }
    selectedLetters.push(letter);
    console.log(selectedLetters);
}

function deleteLetter() {
    if (currentBoxIdx > 0) {
        currentBoxIdx--;
        boxEls[currentBoxIdx].textContent = "";
    }
    console.log("Deleted");
    selectedLetters.pop();
}

function submitGuess() {
    // if selectedLetters.join("") matches word in words array?? 
    // Ensure user can only submit a real five-letter word (from the list?)
    checkForMatch()
    checkForDiffPosition()
    checkForWin()
    nextGuess()
}

function showMessage() {
    if (winner === true) {
        messageEl.textContent = "Congrats, you guessed right!"
    }
    // else if (all boxes filled && winner === false) {
    //     messageEl.textContent = `Bad luck! The correct answer was ${correctWord}.`
    // }
    // This function should end game 
}

// * SMALLER FUNCTIONS

function checkForMatch() {
    selectedLetters.forEach((char, index) => {
        if (char === correctWord[index]) {
            rowBoxes[index].classList.add("match");
        }
    })
}

function checkForDiffPosition() {
    correctWord.split("").forEach((char, index) => {
        if (selectedLetters.includes(char) && selectedLetters[index] !== char) {
            rowBoxes[index].classList.add("diff-position");
        }
    })
}

function checkForWin() {
    const guess = selectedLetters.join("");
    console.log(guess);
    if (guess === correctWord) {
        winner = true;
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


