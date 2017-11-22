var cards = [
  {
    card: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    card: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    card: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    card: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];

// check for a match
var checkForMatch = function () {
  // check if match 

  if (cardsInPlay[0] === cardsInPlay[1]) {

    alert("You found a match!");
  } else {
    alert("Sorry, try again!");
  }
};


var flipCard = function () {
  // Get the data-id of card
  cardId = this.getAttribute('data-id');
  console.log(cardId);

  // Add card to array of cards 
  cardsInPlay.push(cards[cardId].card);

  // Display the card's image
  this.setAttribute('src', cards[cardId].cardImage);

  // Check to see how many cards have been played
  if (cardsInPlay.length === 2) {
  
    checkForMatch();
    
    cardsInPlay = [];
  }
};

// Function that will create your board
var createBoard = function () {
  // Loop through your cards array 
  for (var i = 0; i < cards.length; i++) {
    // Create an img element 
    var cardElement = document.createElement("img");

    // Set attribute to display the card
    cardElement.setAttribute("src", "images/back.png");

    cardElement.setAttribute('data-id', i);

    // Add an event listener  
    // the function flipCard will be executed
    cardElement.addEventListener('click', flipCard);

    // Append the card to the board
    document.getElementById('game-board').appendChild(cardElement);

  }

};

// Call the createBoard function 
createBoard();

