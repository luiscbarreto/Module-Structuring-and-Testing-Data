function repeat(str, count) {
  if (count < 0) return "Negative counts are not valid";
  if (count === 0) return "";
  else return str.repeat(count);
}

module.exports = repeat;
