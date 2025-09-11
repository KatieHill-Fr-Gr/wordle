# WORDLE
by Katie Hill

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
     alt="JavaScript" width="40" height="40"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" 
     alt="CSS3" width="40" height="40"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" 
     alt="HTML" width="40" height="40"/>

## About

This was the first project on the GA Software Engineering Bootcamp. The task was to build a browser-based game and I chose to create a Wordle clone using the New York Times Wordle as inspiration: https://www.nytimes.com/games/wordle/index.html

The idea is to guess a five-letter word by selecting letters from the on-screen keyboard. You can either click on the letter you want or type it on your device. If a letter matches the correct word, the box will turn green. If the letter matches another letter in the word, the box will turn purple. You get 6 guesses before the game is over. If you want to play again, just click play and the game will reset (you’re not limited to one game per day like other Wordle games).

You can play the game here: https://katiehill-fr-gr.github.io/wordle/

## Brief

The brief was to build a minimum viable product (MVP) that met the following criteria:

* Render the game in the browser using DOM manipulation techniques.
* Include win/loss logic and render win/loss messages in HTML. 
* Include separate HTML, CSS, JavaScript, and JavaScript data files organized in an appropriate directory structure.
* Include all required features specific to your game:
   - On-screen keyboard displayed
   - Guessed letters styled based on their status
   - Animated tiles on letter reveal
* The game must be deployed online so that the rest of the world can play it.


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

* Timeframe: 4 days to build, 1 day to test/debug

For frontend development, I work best with a visual in front of me (which is why I always like to start with a UX design in Figma rather than a more basic wireframe). For this reason, I created  the layout and style sheet first before moving on to the game’s core functionalities. 

I then followed the flow of the game, starting with the game initialisation or setUp() function and the user input functions (selecting and deleting letters). Once these were in place, I tackled the comparison logic (checking the guessed word against the correct word and matching up the letters). With the basic functionality in place, I focused on making the game as user-friendly as possible with flash messages, box-flip animations, and the option to type the letters on the user’s keyboard. 



### Challenges

Writing the functions to check for matching letters was quite straightforward. However, making sure each letter was only highlighted once based on its status was quite difficult. To solve this, I added two new variables to keep a count of a) the matched letters in each guess and b) the number of a times a letter appeared in the correct word. I then added these to the two functions using boolean gates to keep the functions as short and readable as possible:

![Multiple Letter Solution](https://res.cloudinary.com/dh0z1a9nd/image/upload/v1757599133/Wordle_MultipleLettersSolution_yahsd6.png)

Another challenge was adding the keydown event listener to allow the player to type their guess using their own keyboard instead of clicking the one on the screen. This additional feature made the game much more accessible and user-friendly but involved adding several conditions to the event listener to ignore all other keys on the keyboard except the letter, delete/backspace and enter keys. I also had to use the blur() method to prevent the play button remaining the focus and e.preventDefault() to prevent the browser's default behaviour from interfering with the key presses:

![Keydown Event Listener](https://res.cloudinary.com/dh0z1a9nd/image/upload/v1757600187/Wordle_KeydownEventListener_pzuzpx.png)

Finally, many edge cases came up during UAT and I had to implement fixes for these (to prevent the player from deleting their previous guess, from typing letters before the correct word was set, and from typing letters after they had guessed correctly). I did this by adding booleans (winner, gameStart, gameEnd, alreadyGuessed etc.) to return immediately out of the relevant functions if these conditions were met:  

![Edge Cases](https://res.cloudinary.com/dh0z1a9nd/image/upload/v1757600464/Wordle_EdgeCases_e1ncl4.png)


## Key Learnings

I spent a lot of time planning how to store the correct words and compare them to the user input. In hindsight, I would have spent more time thinking about the edge cases at the start of the project (how to move through the rows and limit when and where the player could type) to avoid having to do so many fixes during UAT.

## Future Improvements

Ideally, the game would keep a running total of the player's scores. It would also include a welcome page/game over page to make the layout easier to fit onto one screen for smaller devices (although it does have a responsive layout that means it can be played relatively easily on tablets and mobile phones). 

* Player scores (including guess distribution)
* Start and end screens to make it more user-friendly
* Dark mode 

