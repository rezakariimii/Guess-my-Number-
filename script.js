`use strict`

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20
let highScore = 0;
const BtnCheck = document.querySelector(`.check`);
const BtnAgain = document.querySelector(`.again`);
const InputGuess = document.querySelector(`.guess`);
const labelMessage = document.querySelector(`.message`);
const labelScore = document.querySelector(`.score`);
const labelHighScore = document.querySelector(`.highscore`);
const randomNumber = document.querySelector(`.number`);
const body = document.querySelector(`body`);

const displayMessage = (message) => {
    labelMessage.textContent = message
}

BtnCheck.addEventListener(`click`,function(){
    const guess = Number(InputGuess.value)
    if(guess !== secretNumber){
        if(score > 1){
        displayMessage(guess > secretNumber ? `📈Too high...` : `📉Too low...`)
        score--;
        labelScore.textContent = score
        }else {
            labelMessage.textContent = `💥 you lost game...`
        }
    }
    if(!guess){
        displayMessage(`🚫 No Number...`)
    }
    if(guess === secretNumber){
        displayMessage(`🎉Correct number!`)
        randomNumber.textContent = secretNumber;
        body.style.backgroundColor = `#60b347`;
        randomNumber.style.width = `30rem`;
        if(score > highScore){
            highScore = score
        labelHighScore.textContent = highScore
        }
    }

})

BtnAgain.addEventListener(`click`,function(){
    secretNumber = Math.trunc(Math.random()*20) + 1
    score = 20;
    labelScore.textContent = score
    body.style.backgroundColor = `#222`;
    randomNumber.style.width = `15rem`;
    displayMessage(`Start guessing...`)
    randomNumber.textContent = `?`;
    InputGuess.value = ``

})