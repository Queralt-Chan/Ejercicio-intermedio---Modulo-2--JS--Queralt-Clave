'use strict'

const playOptions = document.querySelector ('.js-options');
const playButton = document.querySelector ('.js-btn')
const playMessage = document.querySelector ('.js-message')

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
  } 

  
function handleClick (event){
    event.preventDefault ();
    const Options = playOptions.value; 
    console.log (Options);
   
}


playButton.addEventListener ('click', handleClick);




