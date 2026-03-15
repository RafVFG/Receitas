import { Ingredient } from "../../../entities/ingredient/interfaces/ingredient";
import { Item } from "../../../entities/recipe/interfaces/recipe";

export interface createOrUpdateIngredientMethods {
  run: (data: Ingredient) => Promise<void>;
}
