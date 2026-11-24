function getCardValue(card) {
  if (card[0] === "A") return 11;
  if (card[0] === "5") return 5;
  if (card[0] === "J") return 10;
  if (card[0] === "N") return "Invalid card rank.";
}
module.exports = getCardValue;
