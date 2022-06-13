import { Ingredient } from "../../../entities/ingredient/interfaces/ingredient";

export interface CreateIngredientMethods {
    run: (data: Ingredient) => Promise<void>
}