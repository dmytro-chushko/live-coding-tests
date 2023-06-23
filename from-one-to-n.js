// Return digits from 1 to n

const digitsFromOneTo = (n) => {
  // const absN = Math.abs(n);
  const arr = [n];

  for (let i = n; i !== 1; n > 0 ? i-- : i++) {
    arr.push(n > 0 ? i - 1 : i + 1);
  }

  return n > 0 ? arr.sort((a, b) => a - b).join(", ") : arr.join(", ");
};

console.log(digitsFromOneTo(-10));
