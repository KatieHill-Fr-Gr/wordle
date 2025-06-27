/*-------------------------------- Variables --------------------------------*/

let correctWord // The word randomly selected by computer at start of game
let currentBox // The current box is the next empty one where user adds their letter
let selectedLetters = [] // User's selected letters in each row
let winner = false // 

/*------------------------ Cached Element References ------------------------*/

// Grab all boxes so they can be populated when user clicks on their chosen letter
const boxEls = document.querySelectorAll(".box")

// Grab all keys on keyboard
const letterKeys = document.querySelectorAll("#key")

// Grabs the play button so player can initiate computer random word choice
const playButton = document.querySelectorAll("play-button")

// Grab the enter key on keyboard to enable user to submit row of selectedLetters
const enterButton = document.getElementById("enter-button")

// Grab the delete key on keyboard to enable user to delete/select another letter
const deleteButton = document.getElementById("delete-button")

// Grab message element to be populated with win/lose message 
const messageEl = document.getElementById("message")

/*-------------------------------- Functions --------------------------------*/

// * Init function to set up game, word to be chosen at random by computer
function setUp() {
    // if boxes !== "", clear them 
    // correctWord is selected from Words array and stored in variable
    // e.g 
    // - const randomIdx = Math.floor(Math.random() * words.length);
    // - correctWord = words[randomIdx]

}

// * This adds the letter from key clicked by user
function selectKey() {
    // - get the box index like const currentBox = words[index]
    // - add the key letter to the .textContent of the box
}

function deleteKey() {
    // if the box is not empty (!== "")
    // clear box by changing currentBox.textContent = ""

}

function submitGuess() {
    // like a submit button to enter user's choice for that row
    // selectedLetters = ... (array needs to be populated with their choices)
    // computer can then:
    checkForMatch()
    checkForWin()
    nextGuess()
}

function nextGuess() {
   // IF (winner === true) {return} out of function as game ends
   // ELSE 
   // Use index < 5 && > 0, < 7 && > 4, etc to specify each row
}
function checkForMatch() {
    // IF letters match, the box turns green // query selector here? splice?
    // ELSE IF letter matches another box, current box turns orange
    // ELSE nothing happens/box stays grey - no need to code this
}

function checkForWin() {
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
    // messageEl.textContent = "Congrats, you guessed right!"
    // ELSE 
    // messageEl.textContent = `The correct answer was ${correctWord}` to display correct answer
}

/*----------------------------- Event Listeners -----------------------------*/

playButton.addEventListener("click", setUp())
letterKeys.forEach((key) => key.addEventListener("click", selectKey())) // ??
enterButton.addEventListener("click", submitGuess())

