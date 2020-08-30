// Define variables

//title screen variables
let headerText = document.getElementById("header-text");
let btnStartGame = document.getElementById("btnStart")
let btnGameInstruct = document.getElementById("btnInstruct");
let titleContainer = document.getElementById("title-container");

//main game varaiables
let mainGame = document.getElementById("game-container");

//control buttons variables
let controls = document.getElementById("controls");
let dealButton = document.getElementById("btnDeal");
let hitButton = document.getElementById("btnHit");
let stayButton = document.getElementById("btnStay");

//table variables 
let scoreTable = document.getElementById("score-table");

let instructionsPopUp = document.getElementById("instructions-box");
let footer = document.getElementById('footer');

//define card values 
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack',
  'Ten', 'Nine', 'Eight', 'Seven', 'Six',
  'Five', 'Four', 'Three', 'Two', 'One'
];

// hidden elements
mainGame.style.display = 'none';
footer.style.display = 'none';


//titleContainer.style.display = 'none';

//reset game properties
let startGame = false;
let gameOver = false; 
let playerWon = false;
let dealerCards = [];
let playerCards = [];
let dealerScore = 0;
let playerScore = 0;

//When the Start Game button is clicked this will take user to main game page
btnStartGame.addEventListener('click', function() {
    titleContainer.style.display = 'none';
    mainGame.style.display = 'block';
    footer.style.display = 'block';
})

//When the Deal button is clicked, this will initalise the game
dealButton.addEventListener('click', function() {
    deck = creatNewDeck();
})

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btnGameInstruct.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Function to create a new deck
function createNewDeck () {
    //Create a new array for the deck
    let deck = [];
    //Loop through the suits array
    for (let i = 0; i < suits.length; i++) {
        //Loop through the values array
        for(let j = 0; j < values.length; j++) {
            //Define card to be the suits and values
            let card = {
                suit: suits[i],
                value: values[j]
            }
            //Push the card results to create a new deck array
            deck.push(card);
        }
    }
    //Call function to create a new deck when a new game starts
    return deck;
}

//defining the card numerical values
function cardValues(card) {
    switch(card.value){
        case 'Ace': return 1;
        case 'Two': return 2;
        case 'Three': return 3;
        case 'Four': return 4;
        case 'Five': return 5;
        case 'Six': return 6;
        case 'Seven': return 7;
        case 'Eight': return 8;
        case 'Nine': return 9;
        defult: return 10;
    }
}
