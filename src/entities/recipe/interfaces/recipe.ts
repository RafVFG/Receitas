interface Ingredient {
    id: number,
    amaunt: string      
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