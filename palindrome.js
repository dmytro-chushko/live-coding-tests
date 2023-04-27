//Write a function that checks whether a word is a palindrome

const isPalindrome = (str) => str === str.split("").reverse().join("");

console.log(isPalindrome("стол"));
