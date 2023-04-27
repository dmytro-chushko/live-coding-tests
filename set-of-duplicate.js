// Сreate a set of duplicate string characters
// "abcd" - "A-Bb-Ccc-Dddd"

const setOfDuplicate = (str) =>
  str
    .split("")
    .map((el, i) => `${el.toUpperCase()}${el.repeat(i).toLowerCase()}`)
    .join("-");

console.log(setOfDuplicate("abcd"));
