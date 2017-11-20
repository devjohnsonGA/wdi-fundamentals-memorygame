console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
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

  console.log("User flipped " + cards[cardId]);

  cardsInPlay.push(cards[cardId]);

  // check how many cards played
  if (cardsInPlay.length === 2) {

    checkForMatch();
  }
};

// test
flipCard(0);
flipCard(2);