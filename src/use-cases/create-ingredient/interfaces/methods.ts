import { Ingredient } from "../../../entities/ingredient/interfaces/ingredient";
import { Item } from "../../../entities/recipe/interfaces/recipe";

export interface CreateIngredientMethods {
    run: (data: Ingredient) => Promise<Item[] | null>
}