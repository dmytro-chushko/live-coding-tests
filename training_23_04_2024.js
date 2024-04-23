// Задача 1. Определить сколько раз каждый элемент встречается в массиве.
// Вход const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
// Выход {kiwi: 3, apple: 2, orange: 1}

// console.log(
//   (function (arr) {
//     return arr.reduce((acc, item, _, arr) => {
//       if (
//         arr.some((el, i) => {
//           return el === item;
//         })
//       ) {
//         acc[item] = acc[item] ? acc[item] + 1 : 1;
//       }

//       return acc;
//     }, {});
//   })(['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'])
// );

// Задача 2. Создать массив который содержит только уникальные значения исходного массива.
// Вход const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
// Выход [kiwi, apple, orange]

// console.log(
//   (function (arr) {
//     return arr.reduce((acc, item) => {
//       if (!acc.some((el) => el === item)) {
//         acc.push(item);
//       }

//       return acc;
//     }, []);
//   })(['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'])
// );

// alternative
// const fruitsUniqe = Array.from(
//   new Set(['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'])
// );
// console.log(fruitsUniqe);

// Задача 3. Создать функцию, которая группирует студентов по возрасту.
// Вход
// const students = [
//   { name: 'alex', age: 20 },
//   { name: 'mike', age: 24 },
//   { name: 'masha', age: 20 },
//   { name: 'stas', age: 18 },
// ]
// Выход
// {
// '20': [{ name: 'alex', age: 20 }, { name: 'masha', age: 20 }],
// '24': [{ name: 'mike', age: 24 }],
// '18': [{ name: 'stas', age: 18 }],
// }

// console.log(
//   (function (students) {
//     return students.reduce((acc, student) => {
//       acc[student.age] = acc[student.age]
//         ? [...acc[student.age], student]
//         : [student];

//       return acc;
//     }, {});
//   })([
//     { name: 'alex', age: 20 },
//     { name: 'mike', age: 24 },
//     { name: 'masha', age: 20 },
//     { name: 'stas', age: 18 },
//   ])
// );

// Задача 4.
// Требуется написать функцию, которая отвечает следующим требованиям:

// Функция принимает 2 аргумента - массив из уникальных целых чисел и сумму в виде целого числа.
// Если сумма двух любых чисел массива из 1-го аргумента равна числу, которое приходит 2-м аргументом, функция должна вернуть новый массив из этих двух чисел в любом порядке.
// Если решения нет, вернуть пустой массив.
// Input
// const myNumbers = [3, 5, -4, 8, 11, 1, -1, 6];
// const sum = 10;
// Output
// [-1, 11] или [11, -1] - так как -1 + 11 = 10;

// console.log(
//   (function (arrOfUniqeNums, sum) {
//     const arrOfNums = arrOfUniqeNums.reduce((acc, num, _, arr) => {
//       return arr.some((el) => el !== num && el + num === sum)
//         ? [...acc, num]
//         : acc;
//     }, []);

//     return `[${arrOfNums}] - because ${arrOfNums[0]} + ${arrOfNums[1]} equals ${sum}`;
//   })([3, 5, -4, 8, 11, 1, -1, 6], 10)
// );

// Задача 5. Получить единый массив из любимых пицц каждого друга
// Input
// const friends = [
//   { name: 'alex', pizzas: ['cheese', 'pepperoni'] },
//   { name: 'mike', pizzas: ['salami', 'margarita'] },
//   { name: 'stas', pizzas: ['meat'] },
//   { name: 'anna', pizzas: ['fish'] },
// ];
// Output
// ['cheese', 'pepperoni', 'salami', 'margarita', 'meat', 'fish'];

// console.log(
//   (function (friends) {
//     return friends.reduce((acc, friend) => [...acc, ...friend.pizzas], []);
//   })([
//     { name: 'alex', pizzas: ['cheese', 'pepperoni'] },
//     { name: 'mike', pizzas: ['salami', 'margarita'] },
//     { name: 'stas', pizzas: ['meat'] },
//     { name: 'anna', pizzas: ['fish'] },
//   ])
// );

// Задача 6. Записать строку (символы строки) в обратном порядке
// Input
// const myStr = 'pizza';
// Outout
// azzip

// console.log(
//   (function (myStr) {
//     return myStr.split('').reverse().join('');
//   })('pizza')
// );

//alternative

console.log(
  (function (myStr) {
    const reversed = [];

    for (let i = myStr.length - 1; i >= 0; i--) {
      reversed.push(myStr[i]);
    }

    return reversed.join('');
  })('pizza')
);

// 7. Завершите функцию, которая принимает два аргумента и возвращает все числа, которые делятся на данный делитель. Первый аргумент - это массив чисел, а второй - делитель.
// Input
// [1, 2, 3, 4, 5, 6], 2
// Output
// [2, 4, 6]

// console.log(
//   (function (numbers, devisor) {
//     return numbers.reduce((acc, num) => {
//       return num % devisor ? acc : [...acc, num];
//     }, []);
//   })([1, 2, 3, 4, 5, 6], 2)
// );

// 8. Ваша функция принимает два аргумента:
// текущий возраст отца (лет)
// текущий возраст сына (лет)
// Подсчитайте, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше).;
// Input
// 36, 7
// Output ?

// console.log(
//   (function (futher, son) {
//     let yearRange = 0;
//     while (futher / son !== 2) {
//       futher++;
//       son++;
//       yearRange++;
//     }

//     return yearRange;
//   })(36, 7)
// );
