// function generateMaze(size) {
//   const maze = [];

//   // Створення початкового лабіринту зі стінами
//   for (let i = 0; i < size; i++) {
//     maze[i] = [];
//     for (let j = 0; j < size; j++) {
//       maze[i][j] = "W"; // W - стіна
//     }
//   }

//   // Функція для рекурсивного поділу лабіринту
//   function divideMaze(x, y, width, height) {
//     if (width < 2 || height < 2) {
//       return; // Розмір занадто малий для поділу
//     }

//     // Вибираємо випадкову точку для вертикального або горизонтального проходу
//     const divideVertically = Math.random() < 0.5;
//     const divideX =
//       x + (divideVertically ? 0 : Math.floor(Math.random() * (width - 2))) + 1;
//     const divideY =
//       y + (divideVertically ? Math.floor(Math.random() * (height - 2)) : 0) + 1;

//     // Будуємо проход
//     for (let i = y; i < y + height; i++) {
//       for (let j = x; j < x + width; j++) {
//         if (
//           (divideVertically && j === divideX) ||
//           (!divideVertically && i === divideY)
//         ) {
//           maze[i][j] = "P"; // P - прохід
//         }
//       }
//     }

//     // Рекурсивно поділяємо обидві частини лабіринту
//     divideMaze(
//       x,
//       y,
//       divideVertically ? width : divideX - x,
//       divideVertically ? divideY - y : height
//     );
//     divideMaze(
//       divideVertically ? x : divideX,
//       divideVertically ? divideY : y,
//       divideVertically ? width : x + width - divideX,
//       divideVertically ? y + height - divideY : height
//     );
//   }

//   // Виклик функції для побудови лабіринту з початковими параметрами
//   divideMaze(0, 0, size, size);

//   // Визначення вихідних координат в одному з кутів
//   const exitX = Math.floor(Math.random() * size);
//   const exitY = Math.floor(Math.random() * size);
//   maze[exitX][exitY] = "E"; // E - вихід

//   // Визначення випадкових координат для двох позначених крапок
//   const dot1X = Math.floor(Math.random() * size);
//   const dot1Y = Math.floor(Math.random() * size);
//   let dot2X, dot2Y;
//   do {
//     dot2X = Math.floor(Math.random() * size);
//     dot2Y = Math.floor(Math.random() * size);
//   } while (dot2X === dot1X && dot2Y === dot1Y);
//   maze[dot1X][dot1Y] = "D1"; // D1 - перша позначена крапка
//   maze[dot2X][dot2Y] = "D2"; // D2 - друга позначена крапка

//   return maze;
// }

// const mazeSize = 10; // Розмір лабіринту
// const maze = generateMaze(mazeSize);
// console.log(maze);

[
  ["W", "P", "P", "W", "W", "W", "W", "W", "W", "P"],
  ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P"],
  ["W", "P", "P", "W", "W", "W", "W", "W", "W", "P"],
  ["W", "P", "P", "W", "W", "W", "W", "W", "P", "D2"],
  ["W", "P", "P", "W", "W", "W", "W", "W", "W", "P"],
  ["W", "P", "W", "W", "W", "P", "W", "W", "W", "P"],
  ["P", "P", "P", "P", "P", "P", "W", "W", "W", "P"],
  ["W", "D1", "E", "W", "W", "P", "W", "W", "W", "P"],
  ["P", "P", "P", "P", "P", "P", "W", "W", "W", "P"],
  ["P", "P", "W", "W", "W", "P", "W", "W", "P", "P"],
];

// function generateMaze(size) {
//   const maze = [];

//   // Створення початкового лабіринту зі стінами
//   for (let i = 0; i < size; i++) {
//     maze[i] = [];
//     for (let j = 0; j < size; j++) {
//       maze[i][j] = "W"; // W - стіна
//     }
//   }

//   // Функція для рекурсивного поділу лабіринту
//   function divideMaze(x, y, width, height) {
//     if (width < 3 || height < 3) {
//       return;
//     }

//     // Вибір випадкового напрямку для поділу
//     const horizontal = Math.random() < 0.5;

//     // Вибір випадкового розрізу для поділу
//     const wallX =
//       x + (horizontal ? 0 : Math.floor(Math.random() * (width - 2))) + 1;
//     const wallY =
//       y + (horizontal ? Math.floor(Math.random() * (height - 2)) : 0) + 1;

//     // Створення проходу вибраною стіною
//     for (
//       let i = horizontal ? x : wallX;
//       i < (horizontal ? x + width : x + width - 1);
//       i++
//     ) {
//       maze[i][wallY] = "P"; // P - прохід
//     }

//     for (
//       let j = !horizontal ? y : wallY;
//       j < (!horizontal ? y + height : y + height - 1);
//       j++
//     ) {
//       maze[wallX][j] = "P"; // P - прохід
//     }

//     // Рекурсивно викликаємо поділ для двох нових областей
//     divideMaze(
//       x,
//       y,
//       horizontal ? width : wallX - x,
//       horizontal ? wallY - y : height
//     );
//     divideMaze(
//       horizontal ? x : wallX,
//       horizontal ? wallY : y,
//       horizontal ? width : x + width - wallX,
//       horizontal ? y + height - wallY : height
//     );
//   }

//   // Рекурсивний поділ лабіринту
//   divideMaze(0, 0, size, size);

//   // Вибір випадкового кута для виходу
//   const exitSide = Math.floor(Math.random() * 4); // 0 - верх, 1 - право, 2 - низ, 3 - ліво
//   let exitX, exitY;

//   switch (exitSide) {
//     case 0: // верх
//       exitX = 0;
//       exitY = Math.floor(Math.random() * size)*2;
//       break;
//     case 1: // право
//       exitX = Math.floor(Math.random() * size)*2;
//       exitY = size - 1;
//       break;
//     case 2: // низ
//       exitX = size - 1;
//       exitY = Math.floor(Math.random() * size)*2;
//       break;
//     case 3: // ліво
//       exitX = Math.floor(Math.random() * size)*2;
//       exitY = 0;
//       break;
//     default:
//       exitX = 0;
//       exitY = 0;
//   }

//   maze[exitX][exitY] = "E"; // E - вихід

//   // Визначення випадкових координат для двох позначених крапок, що рівновіддалені від виходу
//   const exitDistance = Math.floor(size / 2);
//   let dot1X, dot1Y, dot2X, dot2Y;

//   do {
//     dot1X = Math.floor(Math.random() * size);
//     dot1Y = Math.floor(Math.random() * size);
//     dot2X = Math.floor(Math.random() * size);
//     dot2Y = Math.floor(Math.random() * size);
//   } while (
//     Math.abs(dot1X - exitX) + Math.abs(dot1Y - exitY) !==
//       Math.abs(dot2X - exitX) + Math.abs(dot2Y - exitY) &&
//     Math.abs(dot1X - exitX) + Math.abs(dot1Y - exitY) !== exitDistance &&
//     Math.abs(dot2X - exitX) + Math.abs(dot2Y - exitY) !== exitDistance
//   );

//   maze[dot1X][dot1Y] = "D1"; // D1 - перша позначена крапка
//   maze[dot2X][dot2Y] = "D2"; // D2 - друга позначена крапка

//   return maze;
// }

// const mazeSize = 10; // Розмір лабіринту
// const maze = generateMaze(mazeSize);
// console.log(maze);

[
  ["W", "D1", "P", "W", "P", "P", "W", "P", "W", "W"],
  ["W", "W", "P", "P", "P", "P", "P", "P", "P", "P"],
  ["W", "W", "P", "W", "P", "P", "W", "P", "P", "W"],
  ["W", "W", "P", "W", "D2", "P", "W", "P", "P", "W"],
  ["W", "W", "P", "W", "P", "P", "W", "P", "P", "P"],
  ["W", "W", "P", "W", "P", "P", "W", "P", "P", "W"],
  ["W", "W", "P", "W", "P", "P", "W", "P", "P", "W"],
  ["W", "W", "P", "W", "P", "P", "W", "P", "P", "W"],
  ["W", "W", "P", "W", "P", "P", "W", "P", "P", "W"],
  ["E", "W", "P", "W", "P", "P", "W", "P", "P", "W"],
];
function createMatrix(columns, rows) {
  const matrix = [];

  for (let y = 0; y < rows; y++) {
    const row = [];

    for (let x = 0; x < columns; x++) {
      row.push(false);
    }

    matrix.push(row);
  }

  return matrix;
}

console.log(createMatrix(5, 5));

[
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
];
