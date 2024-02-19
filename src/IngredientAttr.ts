class IngredientAttr {
    count: number;
    type: IngredientType;
    //TODO later: implement optional attributes like allergies and religious preferences

    constructor(count: number, type: IngredientType) {
        this.count = count;
        this.type = type;
    }

    increaseCount(count: number): void {
        this.count += count;
    }

    decreaseCount(count: number): void {
        this.count -= count;
    }
    
    doNothing(): void {}
}
