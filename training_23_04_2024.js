// Задача 1. Определить сколько раз каждый элемент встречается в массиве.
// Вход const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
// Выход {kiwi: 3, apple: 2, orange: 1}

const { client_encoding } = require('pg/lib/defaults');

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

// console.log(
//   (function (myStr) {
//     const reversed = [];

//     for (let i = myStr.length - 1; i >= 0; i--) {
//       reversed.push(myStr[i]);
//     }

//     return reversed.join('');
//   })('pizza')
// );

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

// 9. * Описание задачи: Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.
//   * Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]
//   * @param {Array} array - Массив с примитивными значениями
//   * @param {?} args - лист значений для удаления
//   * @returns {Array}
// */
// const without = (array, ...args) => {
//  throw new Error('Напишите здесь свое решение');
// }

// console.log(
//   (function (array, ...args) {
//     return array.filter((item) => !args.some((el) => el === item));
//   })([1, 2, 3, 1, 2], 1, 2)
// );

// 10/   * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
//   * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
//   * @param {Array<string | number>} array - Массив с примитивными значениями
//   * @returns {Array}
// */
// const unique = (array) => {
//  throw new Error('Напишите здесь свое решение');
// }

// console.log(
//   (function (array) {
//     return Array.from(new Set(array));
//   })([1, 2, 3, 1, 2])
// );

// alternative

// console.log(
//   (function (array) {
//     return array.filter((item, i) => array.indexOf(item) === i);
//   })([1, 2, 3, 1, 2])
// );

// 11. * Описание задачи: Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
//   * Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
//   * @param {Array} firstArray - Массив с примитивными значениями
//   * @param {Array} secondArray - Массив с примитивными значениями
//   * @returns {boolean}
// */
// const isEqual = (firstArray, secondArray) => {
//   throw new Error('Напишите здесь свое решение');
// }

// console.log(
//   (function (firstArray, secondArray) {
//     return (
//       firstArray.every((item, i) => secondArray[i] === item) &&
//       firstArray.length === secondArray.length
//     );
//   })([1, 2, 3, 4], [1, 2, 3, 4, 5])
// );

// 12. * Описание задачи: Напишите функцию, которая преобразует глубокий массив в одномерный.
//   * Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
//   * @param {Array} array - Глубокий массив
//   * @returns {Array}
// */
// const flatten = (array) => {
//  throw new Error('Напишите здесь свое решение');
// }

// console.log(
//   (function flatten(array) {
//     return array.reduce(
//       (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
//       []
//     );
//   })([1, 2, [3, 4, [5]]])
// );

// 13. * Описание задачи: Напишите функцию, которая разделяет массив на части заданного размера.
//   * Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
//   * @param {Array} array - Массив элементов
//   * @param {number} size - Размер чанков
//   * @returns {Array}
// */
// const chunk = (array, size) => {
//  throw new Error('Напишите здесь свое решение');
// }

// console.log(
//   (function (array, chunk) {
//     return array.reduce((acc, _, i) => {
//       if ((i + 1) % chunk === 0) {
//         acc.push(array.slice(i + 1 - chunk, i + 1));
//       }
//       if (array.length - i === array.length % chunk) {
//         acc.push(array.slice(i));
//       }

//       return acc;
//     }, []);
//   })([1, 2, 3, 4, 5], 5)
// );

// // alternative

// console.log(
//   (function (array, size) {
//     const chunkedArr = [];
//     let index = 0;
//     while (index < array.length) {
//       chunkedArr.push(array.slice(index, size + index));
//       index += size;
//     }
//     return chunkedArr;
//   })([1, 2, 3, 4, 5], 2)
// );

// 14. * Описание задачи: Напишите функцию, которая создаст массив из уникальных значений, которые есть в каждом из предоставленных массивов.
//   * Ожидаемый результат: ([1, 2], [2, 3]) => [2]
//   * @param {?} arrays - Массив примитивных значений
//   * @returns {Array}
// */
// const intersection = (...arrays) => {
//  throw new Error('Напишите здесь свое решение');
// }

// console.log(
//   (function (...arrays) {
//     return arrays.reduce((acc, array) => {
//       array.forEach(
//         (el) =>
//           arrays.every((arr) => arr.includes(el)) &&
//           !acc.includes(el) &&
//           acc.push(el)
//       );

//       return acc;
//     }, []);
//   })(['b', 'e', 'c'], ['b', 'b', 'e'], ['b', 'c', 'e'])
// );

// 15. Реализуйте функцию getNumberExplanation(), которая принимает на вход число и возвращает объяснение этого числа. Если для числа нет объяснения, то возвращается just a number. Объяснения есть только для следующих чисел:

// 666 - devil number
// 42 - answer for everything
// 7 - prime number

// console.log(
//   (function (number) {
//     const variants = {
//       42: 'answer for everything',
//       666: 'devils number',
//       7: 'prime number',
//     };

//     return variants[number] ? variants[number] : 'just a number';
//   })(8)
// );

// // alternative

// console.log(
//   (function (number) {
//     switch (number) {
//       case 42:
//         return 'answer for everything';
//       case 666:
//         return 'devils number';
//       case 7:
//         return 'prime number';
//       default:
//         return 'just a number';
//     }
//   })(8)
// );
