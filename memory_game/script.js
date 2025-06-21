const board = document.querySelector(".game-board");

const emojis = ['🍕','🍔','🍟','🌮','🍩','🍣','🍿','🍪'];
let cards = [...emojis, ...emojis]; // Duplicate for pairs

let flippedCards = [];
let matchedCount = 0;

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function createBoard() {
  shuffle(cards);
  board.innerHTML = '';
  cards.forEach((emoji, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.emoji = emoji;
    card.dataset.index = index;
    card.addEventListener("click", flipCard);
    board.appendChild(card);
  });
}

function flipCard() {
  if (this.classList.contains("flipped") || this.classList.contains("matched") || flippedCards.length === 2) return;

  this.classList.add("flipped");
  this.textContent = this.dataset.emoji;
  flippedCards.push(this);

  if (flippedCards.length === 2) {
    checkMatch();
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.dataset.emoji === card2.dataset.emoji) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    matchedCount += 1;
    if (matchedCount === emojis.length) {
      setTimeout(() => alert("🎉 You matched all pairs!"), 500);
    }
  } else {
    setTimeout(() => {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
      card1.textContent = '';
      card2.textContent = '';
    }, 800);
  }
  flippedCards = [];
}

createBoard();
