/*-------------------------------- Variables --------------------------------*/

let correctWord
let currentBoxIdx = 0 // Do this by index??
let selectedLetters // User's selected letters in each row as one string rather than array
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
    if (boxEls.textContent !== "") {
        boxEls.textContent = ""
    }
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
}

function deleteLetter() {
    if (currentBoxIdx > 0) {
        currentBoxIdx--; 
        boxEls[currentBoxIdx].textContent = "";
    }
    console.log("Deleted");
}

function submitGuess() {
    // like a submit button to enter user's choice for that row
    // selectedLetters = ... (array needs to be populated with their choices)
    // computer can then:
    // checkForMatch()
    // checkForWin()
    // nextGuess()
}

function nextGuess() {
    // IF (winner === true) {return} out of function as game ends
    // ELSE 
    // Use index < 5 && > 0, < 7 && > 4, etc to specify each row
}
function checkForMatch(playerLetter) {
    // IF letters match, the box turns green // query selector here? splice?
    // ELSE IF letter matches another box, current box turns orange
    // ELSE nothing happens/box stays grey - no need to code this
}

function checkForWin(playerGuess) {
    // IF  all boxes have been filled by user and all match, 
    // words.forEach((word) => {board[word[0]
    // - winner = true
    // - showMessage() = "Congrats, you won"
    // ELSE
    // return out of function
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

//enterButton.addEventListener("click", submitGuess)


