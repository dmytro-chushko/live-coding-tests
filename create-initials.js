// Create initials from name

const createInitials = (name) =>
  name
    .split(" ")
    .map((el) => `${el.slice(0, 1).toUpperCase()}.`)
    .join("");

console.log(createInitials("elon mask"));
