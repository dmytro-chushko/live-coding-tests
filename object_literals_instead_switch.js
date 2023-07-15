function getDrink(type) {
  const drinks = {
    coke: "Coke",
    pepsi: "Pepsi",
    lemonade: "Lemonade",
    default: "Default item",
  };
  return "The drink I chose was " + (drinks[type] || drinks["default"]);
}

var drink = getDrink("coke");
// The drink I chose was Coke
console.log(drink);

function getDrink(type) {
  return (
    "The drink I chose was " +
    {
      coke: "Coke",
      pepsi: "Pepsi",
      lemonade: "Lemonade",
    }[type]
  );
}

function getDrink(type) {
  const drinks = {
    coke: function () {
      return "Coke";
    },
    pepsi: function () {
      return "Pepsi";
    },
    lemonade: function () {
      return "Lemonade";
    },
  };
  return drinks[type]();
}

// let's call it
var drink = getDrink("coke");
console.log(drink);

function getSnack(type) {
  var snack;
  function isDrink() {
    return (snack = "Drink");
  }
  function isFood() {
    return (snack = "Food");
  }
  var snacks = {
    coke: isDrink,
    pepsi: isDrink,
    cookies: isFood,
    crisps: isFood,
  };
  return snacks[type]();
}

var snack = getSnack("coke");
console.log(snack); // 'Drink'

//https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals
