import { Ingredient } from "../../../entities/ingredient/interfaces/ingredient";

export interface IngredientResult {
    id: number
    name: string
    idUnit: number
    amount: string | null
}

export interface IngredientRepositoryMethods {
    createOrUpdate: (data: Ingredient) => Promise<void>
    getAll: () => Promise<IngredientResult[]>
    getById: (id: number) => Promise<IngredientResult | null>
    del: (id: number) => Promise<void>
}
