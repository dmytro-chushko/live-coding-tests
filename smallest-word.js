// Find the smallest word in the sentence

const smallestWord = (str) =>
  str.split(" ").sort((a, b) => a.length - b.length)[0];

console.log(smallestWord("Peter Piper picked a peck of pickled peppers"));
