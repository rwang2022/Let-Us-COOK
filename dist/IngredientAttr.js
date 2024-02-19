"use strict";
var IngredientAttr = /** @class */ (function () {
    //TODO later: implement optional attributes like allergies and religious preferences
    function IngredientAttr(count, type) {
        this.count = count;
        this.type = type;
    }
    IngredientAttr.prototype.increaseCount = function (count) {
        this.count += count;
    };
    IngredientAttr.prototype.decreaseCount = function (count) {
        this.count -= count;
    };
    IngredientAttr.prototype.doNothing = function () { };
    return IngredientAttr;
}());
