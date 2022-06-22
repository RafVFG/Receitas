import { Ingredient } from "../../../entities/ingredient/interfaces/ingredient";
import { Item } from "../../../entities/recipe/interfaces/recipe";

export interface IngredientRepositoryMethods {
    create: (data: string) => Promise<number>
}