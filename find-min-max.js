// Find min and max value in array

const minMax = (arr) => [Math.min(...arr), Math.max(...arr)];

console.log(minMax([10, 25, 36, 58, 21]));
console.log(((x) => x * x)(2));

const clear = (arr) => arr.filter((item) => item);

console.log(clear([0, 1, 2, 3, null, undefined, ""]));

let qwert;
console.log("some " + (qwert ? "string" : "int") + " here");

for (var n = 0; n < 10; n++) {
  console.log(n);
  continue;
  setTimeout(() => console.log(n), 0);
}

const findExtention = (fileName) => {
  const arr = fileName.split("");
  const indexOfPoint = fileName.lastIndexOf(".");
  if (indexOfPoint < 0) {
    return "Invalid nema of fail";
  }
  const extention = arr.slice(indexOfPoint + 1).join("");

  return extention;
};

console.log(findExtention("gjhgjjhgjhgjexe"));

const fn = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

console.log(fn([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 3));

const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];

Array.prototype.mySuperFunc = function () {
  // Повертаємо рядок, який складається з усіх елементів масиву, розділених "-"
  return this.join("-");
};

const arr3 = ["x", "y", "z"];

console.log(arr1.mySuperFunc()); // 1-2-3
console.log(arr2.mySuperFunc()); // a-b-c
console.log(arr3.mySuperFunc()); // x-y-z
// Як додати для всіх змінних із типом Array новий метод? Напишіть приклад робочого коду

// Пример:

console.log((3 && 4) || 5);
