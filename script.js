function pizzaOven(crustType, sauceType, cheeses, toppings) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;
  return pizza;
}
function randomPizza() {
  return Math.random();
}
var Pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", [
  "pepperoni",
  "sausage",
]);
var Pizza2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mashrooms", "olives", "onions"]
);
var Pizza3 = pizzaOven(
  ["item1", "item2"],
  "item3",
  ["item4", "item5"],
  "item6"
);
var Pizza4 = pizzaOven("item", "item3", ["item4", "item5"], "item6");
console.log("Your 1st Pizza is", Pizza1);
console.log("Your 2nd Pizza is", Pizza2);
console.log("Your 3rd Pizza is", Pizza3);
console.log("Your 4th Pizza is", Pizza4);
