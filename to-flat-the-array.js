// flat the array [[1,2],[[3,4,5]],[[[6,7,8,9]]]]

const flatArray = (arr) => {
  if (!Array.isArray(arr)) return arr;
  const internalArray = arr.reduce((newArr, el) => {
    // if (Array.isArray(el)) {
    //   console.log(Array.isArray(el));
    return newArr.concat(flatArray(el));
    // } else {
    //   return newArr.push(el);
    // }
  }, []);

  return [...internalArray];
};

console.log(flatArray([[1, 2], [[3, 4, 5]], [[[6, 7, 8, 9]]]]));
