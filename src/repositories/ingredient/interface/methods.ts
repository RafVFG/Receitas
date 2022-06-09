import { Ingredient } from "../../../entities/ingredient/interfaces/ingredient";

export interface IngredientRepositoryMethods {
    create: (data: Ingredient) => Promise<void>
}