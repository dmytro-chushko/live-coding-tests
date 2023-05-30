const findMin = (arr) => {
  let min = arr[0];

  for (let i = 0; i <= arr.length; i++) {
    if (i === 0) {
      continue;
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  console.log(min);
};

findMin([5, 4, 3, 23, 2, 25, 8, 35]);

const findMinWithReduce = (arr) =>
  arr.reduce((min, el) => {
    if (el < min) {
      min = el;
    }

    return min;
  });

console.log(findMinWithReduce([5, 4, 3, 23, 2, 25, 8, 35]));
