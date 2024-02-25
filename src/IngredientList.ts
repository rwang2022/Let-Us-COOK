/**
 * will be used for Pantry and ShoppingList, as well as being part of Recipes
 */
class IngredientList {
    // ingredients is a dictionary that maps names to attributes
    // e.g. "apples": {count=5, type=IngredientType.fruit}
    ingredients: { [key: string]: number }

    constructor() { }
    
    addIngredient(name: string, count: number) {
        // name is already in this.ingredients
        if (this.ingredients[name]) this.ingredients[name] += count;

        // name is NOT in this.ingredients
        else this.ingredients[name] = count;
    }

    addList(otherList: IngredientList): IngredientList {
        return new IngredientList();
    }

    // remove if possible, do nothing otherwise. 
    // if an ingredient's count becomes zero, remove it 
    removeIngredient(name: string, count: number) {}
    
    // remove elements from otherList that you CAN remove
    removeList(otherList: IngredientList) {}
}