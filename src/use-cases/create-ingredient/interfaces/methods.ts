import { Ingredient } from "../../../entities/ingredient/interfaces/ingredient";

export interface createIngredientMethods {
    run: (data: Ingredient) => Promise<void>
}