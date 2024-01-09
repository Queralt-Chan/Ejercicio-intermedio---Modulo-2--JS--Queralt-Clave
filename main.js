'use strict'

const playOptions = document.querySelector ('.js-options');
const playButton = document.querySelector ('.js-btn');
const playMessage = document.querySelector ('.js-message');
const stone = document.querySelector ('.js-stone');
const paper = document.querySelector ('.js-paper');
const scissor = document.querySelector ('.js-scissor');

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
  } 
function test();
 
    if (getRandomNumber <=3) {

    }

  
function handleClick (event){
    event.preventDefault ();
    const Options = playOptions.value; 
    console.log (Options);
   
}


playButton.addEventListener ('click', handleClick);




