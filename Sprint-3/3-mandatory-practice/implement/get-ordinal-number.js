function getOrdinalNumber(num) {
  const lastDigit = String(num).slice(-1);
  const lastTwoDigits = num % 100;
  if (num >= 10 && num <= 14) return `${num}th`;
  if (lastTwoDigits >= 10 && lastTwoDigits <= 14) return `${num}th`;
  if (lastDigit === "1") return `${num}st`;
  if (lastDigit === "2") return `${num}nd`;
  if (lastDigit === "3") return `${num}rd`;
  else return `${num}th`;
}

module.exports = getOrdinalNumber;
