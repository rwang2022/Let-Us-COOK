/**
 * will be used for Pantry and ShoppingList, as well as being part of Recipes
 */
class IngredientList {
    // ingredients is a dictionary that maps names to attributes
    // e.g. "apples": {count=5, type=IngredientType.fruit}
    ingredients: { [key: string]: IngredientAttr }

    constructor() { } 
    
    addIngredient(name: string, attr: IngredientAttr) {
        // name is already in this.ingredients
        if (this.ingredients[name]) this.ingredients[name].count += attr.count;

        // name is NOT in this.ingredients
        else this.ingredients[name] = attr;
    }

    // no need to update this.ingredients 
    // just return the sum of this and otherList
    addList(otherList: IngredientList): IngredientList {
        return new IngredientList();
    }

    // remove if possible, do nothing otherwise. 
    // if an ingredient's count becomes zero, remove it 
    removeIngredient(name: string, attr: IngredientAttr) {}
    
    // you may assume that otherList is a subset of this
    // Pantry will call this on a Recipe.ingredients
    // and will be updated to lose those ingredients
    removeList(otherList: IngredientList) {}

    // otherList may contain elements that are not in this
    // that's okay, just remove elements that you CAN remove
    // ShoppingList will call this on Pantry
    removeListIfPossible(otherList: IngredientList) {}
}