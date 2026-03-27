import { Ingredient } from "../../../entities/ingredient/interfaces/ingredient";

export interface createOrUpdateIngredientMethods {
  run: (data: Ingredient) => Promise<void>;
}
