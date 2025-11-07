# WORDLE - A deceptively simple browser-based game
by Katie Hill

![Wordle_live 2](https://github.com/user-attachments/assets/8d151a6b-c07a-4ddf-96c3-339ffc9ced95)


<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
     alt="JavaScript" width="40" height="40"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" 
     alt="CSS3" width="40" height="40"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" 
     alt="HTML" width="40" height="40"/>

## Timeframe

- **Duration** 5 days (4 days to build and 1 day to test)
- **Team** This was a solo project

## About

This is a Wordle clone inspired by the New York Times Wordle: https://www.nytimes.com/games/wordle/index.html. Unlike the NYT version, you can play it as many times as you like and submit guesses that aren’t real words. The game relies on a fixed word list which is hardcoded in the data.js file (this can be extended or customised if required).  

This was the first project on my General Assembly Software Engineering Bootcamp. Our brief was to build a browser-based game in HTML, CSS and JavaScript using DOM manipulation techniques. Although the game is relatively simple to play (guess a five-letter word), the game logic and multiple edge cases presented some interesting challenges during the build. Tackling the guess evaluation logic was more complicated than simply meeting win/loss conditions and handling repeated letters was also tricky. 

You can play the game here: https://katiehill-fr-gr.github.io/Wordle/


## Planning

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" 
     alt="Figma" width="40" height="40"/>

First, I wrote user stories which I used as a basis for designing my game: 

* The player wants to see how quickly they can guess a word
* The player wants to see a landing page with instructions on how to play:
  - They have to guess a five-letter word
  - They get six tries with an empty box for each letter
  - If they guess correctly, they get a message congratulating them
  - If they don't guess it, they get a message saying bad luck, try again
* The player wants to see a keyboard displayed on the page (clearly labelled + clickable) 
* The player wants visual feedback on:
  - Correct/incorrect guesses
  - When the game is over
  - What the correct answer was
  - If they can play again

I then created a basic UI design in Figma: 

![Figma Design](https://res.cloudinary.com/dh0z1a9nd/image/upload/v1757583851/Wordle_a6c739.jpg)


Finally, I wrote the pseudocode in order to plan out the game logic. My aim here was just to get an idea of the main functions, variables, and datasets I would need:

```
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
    // rowLetters = ... (array needs to be populated with their choices)
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
    // message.El.textContent = `... ${correctWord}` to display correct answer
}
```

I considered the best way to store the words to guess (as an array of strings or separated into individual letters in nested arrays) and also listed the cached element references and event listeners based on the expected user interactions.


## Build

#### 1) Core Layout & Logic

The first task was to create the grid layout and on-screen keyboard based on the Figma design. I then focused on the the game’s core functionalities, starting with the game initialisation or setUp() function, user input (selecting and deleting letters), and how to move through the boxes and rows: 

```
    const rowEnd = (currentRowIdx + 1) * wordLength;
    if (currentBoxIdx < rowEnd) {
        allBoxes[currentBoxIdx].textContent = letter;
        currentBoxIdx++;
        selectedLetters.push(letter);
    }
```

Once these core functions were in place, I tackled the comparison logic (checking the guessed word against the correct word and matching up the letters):

```
function submitGuess() {
    messageEl.textContent = ""
    updateCurrentRow();
    updateGuessCount();
    checkForMatch();
    checkForDiffPosition();
    checkForWin();
    guessAlreadySubmitted = true;
    if (gameEnd === false) {
        nextGuess();
    }
}
```



#### 2) User Feedback

I made the game as user-friendly as possible with flash messages and box-flip animations when revealing correct and incorrect letters after submitting the guess:

<img width="648" height="128" alt="Wordle_userfeedback" src="https://github.com/user-attachments/assets/25597aa4-3007-426f-b212-8b201a8510d5" />


#### 3) Game Flow

I managed the game states using the following variables: 

- winner
- gameStart
- gameEnd
- guessAlreadySubmitted

<img width="636" height="246" alt="Wordle_gamestates" src="https://github.com/user-attachments/assets/2bf3cbfa-e3a2-423c-8f36-baaab1fbb2b6" />



#### 3) Keyboard Input

I added a keydown event listener to allow the player to type their guesses using the keyboard on their device. This involved adding several conditions to ignore all other keys on the keyboard except the letter, delete/backspace and enter keys: 

![Wordle_KeydownEventListener](https://github.com/user-attachments/assets/dcc05e25-cec2-414c-821a-e7e3d4858cbf)

#### 4) Mobile-Responsive Layout

The game is most likely to be played on mobile devices so it was important to take this into account. The narrow design is ideal for smaller screens and the sticky keyboard means players always have access to the letter keys for faster gameplay:

<img width="649" height="333" alt="Wordle_mobileresponsive" src="https://github.com/user-attachments/assets/5667521a-ada6-4366-97cb-d4b39db94583" />


### Challenges

#### 1) Tracking Letter Frequencies

Making sure each letter was only highlighted once was tricky. For example, if the word to guess contained one “e” and the user’s guess contained two “e”s, only one of the “e”s should be counted. To solve this, I added two new variables to the CheckForDiffPosition() function: 

- frequencyInWord to track the number of times a letter appeared
- alreadyMatched to check if it had been matched already

![Multiple Letter Solution](https://res.cloudinary.com/dh0z1a9nd/image/upload/v1757599133/Wordle_MultipleLettersSolution_yahsd6.png)

I also added a variable to the CheckForMatch() function to keep track of matched letters: 

![Wordle_guessMatchCount](https://github.com/user-attachments/assets/4bd3a1f8-179a-4bdb-a9c4-54b90d76b68e)

In both cases, I used boolean gates to keep the functions as short and readable as possible.

#### 2) Keyboard Event Bubbling

The key presses bubbled up the DOM and triggered some of the clickable elements on the page (the “Play” button in particular). To prevent this unexpected behavior, I used the blur() method to remove focus from the “Play” button after it was clicked. I also prevented the browser’s default behaviour by adding e.preventDefault() to the keydown event listener.

![Wordle_PlayButtonBlur](https://github.com/user-attachments/assets/83e7306e-c319-4293-9c0f-b68a492aa0f5)

#### 3) Invalid Guesses 

Finally, I had to implement a few safeguards to prevent the player from typing at certain times:

- **Before the game had initialised** (and the word to guess had been set)
- **In rows that had already been submitted** (to prevent the player from deleting their previous guess)
- **After they had correctly guessed the word** (and the game had ended)

I did this by adding boolean checks to return immediately out of the relevant functions depending on the game state: 

![Edge Cases](https://res.cloudinary.com/dh0z1a9nd/image/upload/v1757600464/Wordle_EdgeCases_e1ncl4.png)


### Wins

* Mobile-first design: this approach resulted in a sleek, responsive UI that was perfectly adapted to smaller screens.
* Boolean checks: strictly controlling user input ensures that the gameplay is smooth and provides a great user experience.
* Keyboard input: this additional feature enhanced the game, making it more accessible and user-friendly on desktop.

## Bugs

The games works as expected and there are no bugs.


## Key Learnings

This project helped me gain a thorough understanding of DOM maniupation techniques and develop my approach to problem-solving, from writing the pseudocode during the planning stage to tackling specific challenges that came up during the build. I had to implement several fixes during user testing to prevent the player from typing when they shouldn't. Ideally, I'd have considered these edge cases during planning.   

## Future Improvements

Ideally, the game would keep a running total of the player's scores. It would also include a welcome page and a game over page so that the game itself fit more neatly on smaller screens (although it does have a responsive layout that means it can be played relatively easily on mobile devices). 

* Player scores (including guess distribution)
* Start and end screens to make it more user-friendly
* Dark mode 

