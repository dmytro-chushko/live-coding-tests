// Return digits from 1 to n

const digitsFromOneTo = (n) => {
  const absN = Math.abs(n);
  const arr = [absN];

  for (let i = absN; i > 1; i--) {
    arr.push(i - 1);
  }

  return arr.join(", ");
};

console.log(digitsFromOneTo(-10));
