import { Ingredient } from "../../../entities/ingredient/interfaces/ingredient";
import { Item } from "../../../entities/recipe/interfaces/recipe";

export interface IngredientRepositoryMethods {
  createOrUpdate: (data: Ingredient) => Promise<void>;
}
