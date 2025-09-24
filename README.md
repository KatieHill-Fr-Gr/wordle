WORDLE
by Katie Hill

Technologies: HTML, CSS, JavaScript, DOM
Deployment link: https://katiehill-fr-gr.github.io/wordle/
Timeframe: 5 days to build, 2 days for UAT/additional features
Contributors: None 

== Description ==

This was the first project on the GA Software Engineering Bootcamp. The task was to build a browser-based game and I chose to create a Wordle clone using the New York Times Wordle as inspiration: https://www.nytimes.com/games/wordle/index.html

The idea is to guess a five-letter word by selecting letters from the on-screen keyboard. You can either click on the letter you want or type it on your device. If a letter matches the correct word, the box will turn green. If the letter matches another letter in the word, the box will turn purple. You get 6 guesses before the game is over. If you want to play again, just click play and the game will reset (you’re not limited to one game per day like other Wordle games).

== Brief ==

The brief was to build a minimum viable product (MVP) that met the following criteria:

* Render the game in the browser using DOM manipulation techniques
* Include win/loss logic and render win/loss messages in HTML. 
* Include separate HTML, CSS, JavaScript, and JavaScript data files organized in an appropriate directory structure.
* Include all required features specific to your game:
   - On-screen keyboard displayed
   - Guessed letters styled based on their status
   - Animated tiles on letter reveal
* The game must be deployed online so that the rest of the world can play it.


== Installation ==

This repository includes the HTML, CSS and JavaScript files. You can access the game functions in the file “app.js” and the data used in the separate “data.js” file. 


== Planning == 

First, I wrote user stories which I used a basis for designing my game: 

Then I mocked up the user interface in Figma (on desktop and mobile):

Finally, I wrote the pseudocode in order to plan out the game logic:


== Build == 

I followed the flow of the game, so I started by coding the game initalisation (setUP()) function and then the user input (selecting and deleting keys). 

I then started on the comparison logic (comparing the guessed word with the correct word and matching up the letters). 

== Challenges == 

Writing the functions to check for matching letters was quite straightforward. However, making sure each letter was only highlighted once based on its status was quite difficult. To solve this, I added two new variables to keep a count of a) the matched letters in each guess and b) the number of a times a letter appeared in the correct word. I then added these to the two functions using boolean gates to keep the functions as short and readable as possible:

Another challenge was adding the keydown event listener to allow the player to type their guess using their own keyboard instead of clicking the one on the screen. This additional feature made the game much more accessible and user-friendly but involved adding several conditions to the event listener to ignore all other keys on the keyboard except the letters, delete/backspace, and enter keys. I also had to use the blur() method to prevent the play button remaining the focus and e.preventDefault() to prevent the browser's default behaviour from interfering with the key presses:

Finally, many edge cases came up during UAT and I had to implement fixes for these (to prevent the player from deleting their previous guess, from typing letters before the correct word was set, and from typing letters after they had guessed correctly). I did this by adding booleans (winner, gameStart, gameEnd, alreadyGuessed etc.) to return immediately out of the relevant functions if these conditions were true (or false depending):  

== Key Learnings == 

I spent a lot of time planning how to store the correct word to guess and the user input (data types). I would have spent more time on thinking about the edge cases at the beginning (how to move through the rows and limit where the player could type) to avoid having to do so many fixes during UAT.

== Future Improvements == 

* Score (including guess distribution)
* Start and end screens to make it more user-friendly

