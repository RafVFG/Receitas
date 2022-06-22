export interface Item {
    id: number,
    idUnit: number,
    amaunt: string      
}

export interface Recipe {
    name: string,
    ingredients: Item[],
    directions: string[],
    rating?: number,
    tags?: string[],
    prepTime?: string,
    yields?: number
}