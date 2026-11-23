function countChar(stringOfCharacters, findCharacter) {
  let parts = stringOfCharacters.split(findCharacter);
  return parts.length - 1;
}

module.exports = countChar;
