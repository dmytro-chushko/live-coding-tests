// flat the array [[1,2],[[3,4,5]],[[[6,7,8,9]]]]

const flatArray = (arr) => {
  if (!Array.isArray(arr)) return arr;

  return arr.reduce((newArr, el) => {
    return newArr.concat(flatArray(el));
  }, []);
};

console.log(
  flatArray([
    [1, 2],
    [[3, 4, 5]],
    [
      [
        [
          [6, 7],
          [8, 9],
        ],
      ],
    ],
  ])
);
