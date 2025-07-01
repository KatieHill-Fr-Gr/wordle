/*-------------------------------- Variables --------------------------------*/

let correctWord
let currentBoxIdx = 0
let selectedLetters = []
let winner = false

/*------------------------ Cached Element References ------------------------*/

const boxEls = document.querySelectorAll(".box")

const letterKeys = document.querySelectorAll(".key")

const playButton = document.getElementById("play-button")

const enterButton = document.getElementById("enter")

const deleteButton = document.getElementById("delete")

const messageEl = document.getElementById("message")

/*-------------------------------- Functions --------------------------------*/

function setUp() {
    selectedLetters = []
    boxEls.forEach((boxEl) => {
        if (boxEl.textContent !== "") {
            boxEl.textContent = ""
        }
    })
    currentBoxIdx = 0;
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
    const guess = selectedLetters.join("");
    console.log(guess);
    checkForMatch()

    // Ensure user can only submit a real five-letter word (from the list?)

    // checkForWin()
}

// * SMALLER FUNCTIONS

function checkForMatch() {
//    for (let char of selectedLetters) {
//         if (char === correctWord[index]) {
//             boxEls[index].classList.add("match");
//         }
//     }
    // ELSE IF letter matches another box, current box turns purple?
    // ELSE nothing happens/box stays grey - no need to code this
}

function checkForWin() {
    if (selectedLetters === correctWord) {
        winner = true;
        // showMessage()
    } else {
        return
    }
}

function nextGuess() {
    // clear selected letter array ready for next guess
    // IF (winner === true) {return} out of function as game ends
    // ELSE 
    // Use index < 5 && > 0, < 7 && > 4, etc to specify each row
}


// * This displays one of two messages: user wins/user loses and can try again
function showMessage() {
    // IF (winner === true) {}
    // messageEl.textContent = "Congrats, you guessed right! Hit Play to play again."
    // ELSE 
    // messageEl.textContent = `Bad luck! The correct answer was ${correctWord} Hit Play to play again.`
}

/*----------------------------- Event Listeners -----------------------------*/

playButton.addEventListener("click", setUp)

letterKeys.forEach((key) => key.addEventListener("click", selectLetter))

deleteButton.addEventListener("click", deleteLetter)

enterButton.addEventListener("click", submitGuess)


