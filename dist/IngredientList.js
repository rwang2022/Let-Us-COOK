"use strict";
/**
 * will be used for Pantry and ShoppingList, as well as being part of Recipes
 */
var IngredientList = /** @class */ (function () {
    function IngredientList() {
    }
    IngredientList.prototype.addIngredient = function (name, attr) { };
    // no need to update this.ingredients 
    // just return the sum of this and otherList
    IngredientList.prototype.addList = function (otherList) {
        return new IngredientList();
    };
    // remove if possible, do nothing otherwise. 
    // if an ingredient's count becomes zero, remove it 
    IngredientList.prototype.removeIngredient = function (name, attr) { };
    // you may assume that otherList is a subset of this
    // Pantry will call this on a Recipe.ingredients
    // and will be updated to lose those ingredients
    IngredientList.prototype.removeList = function (otherList) { };
    // otherList may contain elements that are not in this
    // that's okay, just remove elements that you CAN remove
    // ShoppingList will call this on Pantry
    IngredientList.prototype.removeListIfPossible = function (otherList) { };
    return IngredientList;
}());
