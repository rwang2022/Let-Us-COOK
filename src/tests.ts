declare var require: any;
const { isEqual } = require('lodash'); // for Node.js
import { IngredientList } from "./IngredientList";

// TODO test more of IngredientList functions
let Pantry = new IngredientList({"apples": 5});
let ShoppingList = new IngredientList({"apples": 1, "bananas": 2});

Pantry.addList(ShoppingList);
if (!isEqual(Pantry.ingredients, {"apples": 6, "bananas": 2})) {
    console.log("test 1 failed");
}

Pantry.removeIngredient("apples", 3);
if (!isEqual(Pantry.ingredients, {"apples": 3, "bananas": 2})) {
    console.log("test 2 failed");
}

Pantry.removeIngredient("apples", 3);
if (!isEqual(Pantry.ingredients, {"bananas": 2})) {
    console.log("test 3 failed");
    Pantry.print();
}
