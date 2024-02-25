class Recipe extends IngredientList {
    name: string;
    ingredients: { [key: string]: number }; // {name : count}
    instructions: string;
    
    constructor(name: string) {
        super();
        this.name = name;
    }
}