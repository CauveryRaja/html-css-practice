import { info } from "./data.js";

class Card {
  constructor(data, position) {
    this.data = data;
    this.position = position;
  }
}
const MAX_VISIBLE = 6;
let cardInFocus = 0;

let allCards = [];

const createCards = () => {
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

const renderCards = () => {
  const carouselElm = document.getElementsByClassName("carousel")[0];

  allCards.forEach((item) => {
    if (item.position !== 0 && item.position === undefined) return;
    const card = document.createElement("div");
    const content = document.createElement("span");
    content.textContent = item.data;
    card.appendChild(content);

    card.classList.add("card");
    card.style.transform = `translateX(${item.position * 100}px)`;
    card.style.zIndex = Math.floor(MAX_VISIBLE/2) - Math.abs(item.position)

    carouselElm.appendChild(card);
  });
};

const init = () => {
  createCards();
  console.log("hello", allCards);
  renderCards();
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
