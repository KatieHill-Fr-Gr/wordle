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

This was the first project on my General Assembly Software Engineering Bootcamp. Our brief was to build a browser-based game in HTML, CSS and JavaScript using DOM manipulation techniques. Although the game is relatively simple to play (guess the letters of a five-letter word), the game logic and multiple edge cases presented some interesting challenges during the build. Tackling the guess evaluation logic was more complicated than simply meeting win/loss conditions and handling repeated letters was also tricky. 

You can play the game here: https://katiehill-fr-gr.github.io/wordle/



## Planning

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" 
     alt="Figma" width="40" height="40"/>

First, I wrote user stories which I used as a basis for designing my game: 

* The player wants to see how quickly they can guess a word
* The player wants to see a landing page with instructions on how to play:
  - They have to guess a five-letter word
  - They get 6 tries with an empty box for each letter
  - If they guess correctly, they get a congratulations message
  - If they don't guess it, they get a message saying bad luck, try again
* The player wants to see the keyboard and boxes clearly (labelled + clickable) 
* The player wants visual feedback on:
  - Correct/incorrect guesses
  - When the game is over
  - What the correct answer was
  - If they can play again

Then I created a basic UI design in Figma (including the chosen font and colour scheme): 

![Figma Design](https://res.cloudinary.com/dh0z1a9nd/image/upload/v1757583851/Wordle_a6c739.jpg)


Finally, I wrote the pseudocode in order to plan out the game logic. My aim here was just to get an idea of the main functions, variables, and datasets I would need. I considered the best way to store the words to guess (as an array of strings or separated into individual letters in nested arrays) and also listed the cached element references and event listeners based on the expected user interactions.

![Functions Pseudocode](https://res.cloudinary.com/dh0z1a9nd/image/upload/v1757597978/Wordle_pseudocode_variables_wrcewz.png)
![Functions Pseudocode](https://res.cloudinary.com/dh0z1a9nd/image/upload/v1757594381/Wordle_pseudocode_functions_vflgsn.png)


## Build

#### 1) Mobile-Responsive Layout

The first task was to create the basic layout in HTML and CSS based on the Figma design. I made this mobile-responsive.

#### 2) Core Logic

I then focused on the the game’s core functionalities, starting with the game initialisation or setUp() function and the user input functions (selecting and deleting letters). 
Once these were in place, I tackled the comparison logic (checking the guessed word against the correct word and matching up the letters). 


#### 3) User Feedback

Make the game as user-friendly as possible with flash messages and box-flip animations when the correct/incorrect letters are revealed.


#### 3) Keyboard Input

I added a keydown event listener to allow the player to type their guesses using the keyboard on their device. This involved adding several conditions to ignore all other keys on the keyboard except the letter, delete/backspace and enter keys: 

![Keydown Event Listener](https://res.cloudinary.com/dh0z1a9nd/image/upload/v1757600187/Wordle_KeydownEventListener_pzuzpx.png)


### Challenges

#### 1) Tracking Letter Frequencies

Making sure each letter was only highlighted once was tricky. For example, if the word to guess contained one “e” and the user’s guess contained two “e”s, only one of the “e”s should be counted. To solve this, I added two new variables to the CheckForDiffPosition() function: 

- frequencyInWord to track the number of times a letter appeared
- alreadyMatched to check if it had been matched already

![Multiple Letter Solution](https://res.cloudinary.com/dh0z1a9nd/image/upload/v1757599133/Wordle_MultipleLettersSolution_yahsd6.png)

I also added a variable to the CheckForMatch() function to keep track of matched letters: 

![Wordle_guessMatchCount](https://github.com/user-attachments/assets/4bd3a1f8-179a-4bdb-a9c4-54b90d76b68e)

In both cases, I used boolean gates to keep the functions as short and readable as possible.

#### 2) Keyboard Input

The key presses bubbled up the DOM and triggered some of the clickable elements on the page (the “Play” button in particular). To prevent this unexpected behaviour, I used the blur() method to stop the “Play” button remaining the focus and also added e.preventDefault() to prevent the browser’s default behaviour.  


#### 3) Invalid Guesses

Finally, many edge cases came up during UAT and I had to implement fixes for these (to prevent the player from deleting their previous guess, from typing letters before the correct word was set, and from typing letters after they had guessed correctly). I did this by adding booleans (winner, gameStart, gameEnd, alreadyGuessed etc.) to return immediately out of the relevant functions if these conditions were met:  

![Edge Cases](https://res.cloudinary.com/dh0z1a9nd/image/upload/v1757600464/Wordle_EdgeCases_e1ncl4.png)


### Wins

- 
- Keyboard input: this additional feature was very successful and made the game more accessible and user-friendly on desktop.


## Key Learnings

I spent a lot of time planning how to store the correct words and compare them to the user input. In hindsight, I would have spent more time thinking about the edge cases at the start of the project (how to move through the rows and limit when and where the player could type) to avoid having to do so many fixes during UAT.

## Future Improvements

Ideally, the game would keep a running total of the player's scores. It would also include a welcome page/game over page to make the layout easier to fit onto one screen for smaller devices (although it does have a responsive layout that means it can be played relatively easily on tablets and mobile phones). 

* Player scores (including guess distribution)
* Start and end screens to make it more user-friendly
* Dark mode 

