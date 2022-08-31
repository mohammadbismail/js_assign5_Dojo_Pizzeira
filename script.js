function pizzaOven(one, two, three, four) {
  var pizza = {};
  pizza.crustType = one;
  pizza.sauceType = two;
  pizza.cheeses = three;
  pizza.toppings = four;


  return pizza;
}

var ahmed = {
  crustTyp: "cheese",
  sauceType: "two",
  cheeses: three,
  toppings: four,
};

// function randomPizza() {
//  return Math.random();
// }
var Pizza1 = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"]
);

Pizza1 = {
  crustType: "deep dish",
  sauceType: "traditional",
  cheeses: ["mozeearella"],
  toppings: ["pepperoni", "sausage"],
};

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
