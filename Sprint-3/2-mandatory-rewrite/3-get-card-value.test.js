const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceOfSpades = getCardValue("A♠");
  expect(aceOfSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 5 for Five of hearts", () => {
  const fiveOfHearts = getCardValue("5♥");
  expect(fiveOfHearts).toEqual(5);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for J of spades", () => {
  const jOfSpades = getCardValue("J♠");
  expect(jOfSpades).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for Ace of hearts", () => {
  const aceOfHearts = getCardValue("A♥");
  expect(aceOfHearts).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should return Invalid card rank. for N of hearts", () => {
  const invalidCard = getCardValue("N♥");
  expect(invalidCard).toEqual("Invalid card rank.");
});
