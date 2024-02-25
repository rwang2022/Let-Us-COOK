"use strict";
/**
 * will be used for Pantry and ShoppingList, as well as being part of Recipes
 */
var IngredientList = /** @class */ (function () {
    function IngredientList(ingredients) {
        if (ingredients === void 0) { ingredients = {}; }
        this.ingredients = ingredients;
    }
    IngredientList.prototype.print = function () {
        for (var name_1 in this.ingredients) {
            console.log(name_1 + ":" + this.ingredients[name_1]);
        }
        console.log();
    };
    IngredientList.prototype.addIngredient = function (name, count) {
        // name is already in this.ingredients
        if (name in this.ingredients)
            this.ingredients[name] += count;
        // name is NOT in this.ingredients
        else
            this.ingredients[name] = count;
    };
    IngredientList.prototype.addList = function (otherList) {
        for (var key in otherList.ingredients) {
            this.addIngredient(key, otherList.ingredients[key]);
        }
    };
    IngredientList.prototype.removeIngredient = function (name, count) {
        // name is already in this.ingredient
        if (this.ingredients[name] > count)
            this.ingredients[name] -= count;
        // if count becomes zero remove it 
        if (this.ingredients[name] === 0)
            delete this.ingredients[name];
    };
    // remove elements from otherList that you CAN remove
    IngredientList.prototype.removeList = function (otherList) {
        for (var name_2 in otherList.ingredients) {
            this.removeIngredient(name_2, otherList.ingredients[name_2]);
        }
    };
    return IngredientList;
}());
var Pantry = new IngredientList({ "apples": 5 });
Pantry.print();
var ShoppingList = new IngredientList({ "apples": 1, "bananas": 2 });
ShoppingList.print();
Pantry.addList(ShoppingList);
Pantry.print();
