import { Ingredient } from "../../../entities/ingredient/interfaces/ingredient";

export interface IngredientRepositoryMethods {
    createOrUpdate: (data: Ingredient) => Promise<void>
}