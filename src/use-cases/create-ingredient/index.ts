import { Ingredient } from "../../entities/ingredient/interfaces/ingredient";
import { ingredient } from "../../entities/ingredient";
import { createOrUpdateIngredientMethods } from "./interfaces/methods";
import { IngredientRepositoryMethods } from "../../repositories/ingredient/interface/methods";

export function createOrUpdateIngredient(
  ingredientRepository: IngredientRepositoryMethods,
): createOrUpdateIngredientMethods {
  async function run(data: Ingredient): Promise<void> {
    const ingredientOrError = ingredient(data);

    if (!ingredientOrError) return;

    await ingredientRepository.createOrUpdate(ingredientOrError.getValue());
  }

  return {
    run,
  };
}
