let sum=0;
let gameStarted = false;
let gameEnded = false;
let cardsEl = document.querySelector("#cards-el");
let statementEl = document.querySelector("#statement-el");
let sumEl = document.getElementById("sum-el");

function generateRandomCard(){
    return Math.floor(13*(Math.random()))+ 1;
}

function decide(){
    if(sum<21){
        statementEl.innerText = "Do you want to take another card?";
    } else if(sum==21){
        statementEl.innerText = "You have a Blackjack!!";
        gameEnded = true;
    }
    else{
        statementEl.innerText = "You have lost!";
        gameEnded = true;
    }
    sumEl.innerText = "Sum: " + sum; 
}


function startGame(){
    if(gameEnded){
        gameStarted = false;
        sum=0;
        cardsEl.innerText = "Cards:";
        gameEnded = false;
    }
    if(!gameStarted){
    gameStarted = true;
    let firstCard = generateRandomCard();
    let secondCard = generateRandomCard();
    sum+= firstCard + secondCard;
    cardsEl.innerText += " " + firstCard + " " + secondCard;
    decide();
    }
}
function newCard(){
    if(gameStarted && !gameEnded){
    let newCardDrawn = generateRandomCard();
    sum+= newCardDrawn;
    cardsEl.innerText += " " + newCardDrawn;
    decide();
    }
}