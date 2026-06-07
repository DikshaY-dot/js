let randomNUM=parseInt(Math.random()*100+1);

const button = document.querySelector('#subt');
const userInput= document.getElementById('guessField');
const guesslot = document.querySelector('.guesses');
const remaining= document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startover=document.querySelector('.resultParas');

const p=document.createElement('p')

let prevguess=[]
let numguess=1;

let playgame=true;

if(playgame){
    button.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
   if(isNaN(guess)){
    alert('please enter a valid number')
   }
   else if(guess>100){
    alert('please enter a number less than or equal to 100')
   }
   else if(guess<1){
    alert('please enter a number greater than 1')
   }
   else{
    prevguess.push(guess)
    if(numguess===11){
        displayGuess(guess)
        displayMassage(`game over and the random number was ${randomNUM}`)
        endGame()
    }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
   }


}

function checkGuess(guess){
    if(guess===randomNUM){
        displayMassage(`you guessed it right`)
        endGame()
    }
    else if(guess>randomNUM){
        displayMassage(`number is high`)
    }
    else{
        displayMassage( `number is low`)
    }
}

function displayGuess(guess){
    userInput.value=''
    guesslot.textContent+=`${guess}, `
    numguess++;
    remaining.innerHTML=`${11-numguess}`
}

function displayMassage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
   userInput.value=''
   userInput.setAttribute('disabled','')
   p.classList.add('button')
   p.innerHTML='<h2 id="newGame">Start new Game</h2>'
   startover.appendChild(p)
   playgame=false
   newGame()
}

function newGame(){
  const newGamebutton= document.querySelector('#newGame')
  newGamebutton.addEventListener('click',function(e){
    randomNUM=parseInt(Math.random()*100+1);
    prevguess=[]
    numguess=1
    
    guesslot.innerHTML=''
    remaining.innerHTML=`${11-numguess}`
    lowOrHi.innerHTML=''
    
    userInput.removeAttribute('disabled');
    startover.removeChild(p);


    playgame=true;
  },{once:true});
}

