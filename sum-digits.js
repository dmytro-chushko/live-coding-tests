// Sum digits in number

const sumDigits = (number) =>
  Math.abs(number)
    .toString()
    .split("")
    .reduce((sum, digit) => +sum + +digit, 0);

console.log(sumDigits(-98));
