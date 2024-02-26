"use strict";
exports.__esModule = true;
var isEqual = require('lodash').isEqual; // for Node.js
var IngredientList_1 = require("./IngredientList");
// TODO test more of IngredientList functions
var Pantry = new IngredientList_1.IngredientList({ "apples": 5 });
var ShoppingList = new IngredientList_1.IngredientList({ "apples": 1, "bananas": 2 });
Pantry.addList(ShoppingList);
if (!isEqual(Pantry.ingredients, { "apples": 6, "bananas": 2 })) {
    console.log("test 1 failed");
}
Pantry.removeIngredient("apples", 3);
if (!isEqual(Pantry.ingredients, { "apples": 3, "bananas": 2 })) {
    console.log("test 2 failed");
}
Pantry.removeIngredient("apples", 3);
if (!isEqual(Pantry.ingredients, { "bananas": 2 })) {
    console.log("test 3 failed");
    Pantry.print();
}
