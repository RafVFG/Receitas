interface Ingredient {
    name: string,
    unit: string,
    amaunt: number       
}

export interface Recipe {
    name: string,
    ingredients: Ingredient[],
    directions: string[],
    rating?: number,
    tags?: string[],
    prepTime?: string,
    yields?: number
}