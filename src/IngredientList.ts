/**
 * will be used for Pantry and ShoppingList, as well as being part of Recipes
 */
export class IngredientList {
    // ingredients is a dictionary that maps names to counts
    ingredients: { [key: string]: number }

    constructor(ingredients: { [key: string]: number } = {}) {
        this.ingredients = ingredients;
    }

    print() {
        for (let name in this.ingredients) {
            console.log(name + ":" + this.ingredients[name]);
        }
        console.log();
    }

    addIngredient(name: string, count: number) {
        // name is already in this.ingredients
        if (name in this.ingredients) this.ingredients[name] += count;

        // name is NOT in this.ingredients
        else this.ingredients[name] = count;
    }

    addList(otherList: IngredientList) {
        for (let key in otherList.ingredients) {
            this.addIngredient(key, otherList.ingredients[key]);
        }
    }

    removeIngredient(name: string, count: number) {
        // name is already in this.ingredient
        if (this.ingredients[name] >= count) this.ingredients[name] -= count;
        // if count becomes zero remove it 
        if (this.ingredients[name] === 0) delete this.ingredients[name];
    }

    // remove elements from otherList that you CAN remove
    removeList(otherList: IngredientList) {
        for (let name in otherList.ingredients) {
            this.removeIngredient(name, otherList.ingredients[name]);
        }
    }
}
