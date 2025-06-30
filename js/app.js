/*-------------------------------- Variables --------------------------------*/

let correctWord 
let currentBox // The current box is the next empty one where user adds their letter
let selectedLetters = [] // User's selected letters in each row
let winner = false

/*------------------------ Cached Element References ------------------------*/

const boxEls = document.querySelectorAll(".box")

const letterKeys = document.querySelectorAll(".key")

const playButton = document.getElementById("play-button")

const enterButton = document.getElementById("enter")

const deleteButton = document.getElementById("delete")

const messageEl = document.getElementById("message")

/*-------------------------------- Functions --------------------------------*/

// * Init function to set up game, word to be chosen at random by computer
function setUp() {
    if (boxEls.textContent !== "") {
        boxEls.textContent === ""
    }
    const randomIdx = Math.floor(Math.random() * words.length);
    correctWord = words[randomIdx];
    console.log("New word selected:", correctWord);
}


// * This adds the letter from key clicked by user
function selectKey() {
    // - get the box index like const currentBox = words[index]
    // - add the key letter to the .textContent of the box
}

function deleteKey() {
    // if (currentBox.textContent !== "") {
    //     currentBox.textContent === ""
    // }
    // if the box is not empty (!== "")
    // clear box by changing currentBox.textContent = ""

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

// letterKeys.forEach((key) => key.addEventListener("click", selectKey())) 

// enterButton.addEventListener("click", submitGuess())

