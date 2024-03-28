import { info } from "./data.js";

class Card {
  constructor(data, position) {
    this.data = data;
    this.position = position;
  }
}
const MAX_VISIBLE = 5;
let cardInFocus = 0;

let allCards;

const renderCards = () => {
  // Set card position
  allCards = info.map((entry, index) => {
    let position;

    // Right side cards
    if (index < Math.ceil(MAX_VISIBLE / 2)) {
      position = index;
    }
    // Left side cards
    else if (info.length - index <= Math.floor(MAX_VISIBLE / 2)) {
      position = -(info.length - index);
    }
    // For hidden cards, position will be undefined
    return new Card(entry.data, position);
  });
};

const init = () => {
  renderCards();
  console.log("hello", allCards);
};

init();

const goForward = () => {
  cardInFocus += 1;

  console.log("index", cardInFocus);
};

const goBackward = () => {
  if (cardInFocus === 0) cardInFocus = data.length - 1;
  else cardInFocus -= 1;

  console.log("index", cardInFocus);
};
