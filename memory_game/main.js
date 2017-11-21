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

    console.log("You found a match!");
  } else {
    console.log("Sorry, try again!");

  }
};



var flipCard = function (cardId) {

  console.log("User flipped " + cards[cardId].rank);

  cardsInPlay.push(cards[cardId].rank);

    // Display the image path in the console
  console.log(cards[cardId].cardImage)

  // Display the suit in the console
  console.log(cards[cardId].suit)

  // check how many cards played
  if (cardsInPlay.length === 2) {

    checkForMatch();
  }
};

// test
flipCard(0);
flipCard(2);