interface Ingredient {
    id: number,
    amount: string
}

export interface Recipe {
    id?: number,
    name: string,
    ingredients: Ingredient[],
    directions: string[],
    rating?: number,
    tags?: string[],
    prepTime?: string,
    yields?: number
}