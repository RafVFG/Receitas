import { Recipe } from "../../entities/recipe/interfaces/recipe";
import { recipe } from "../../entities/recipe";
import { createOrUpdateRecipeMethods } from "./interfaces/methods";
import { RecipeRepositoryMethods } from "../../repositories/recipe/interfaces/methods";

export function createOrUpdateRecipe(
  recipeRepository: RecipeRepositoryMethods,
): createOrUpdateRecipeMethods {
  async function run(data: Recipe): Promise<void> {
    const recipeOrError = recipe(data);

    if (!recipeOrError) return;

    await recipeRepository.createOrUpdate(recipeOrError.getValue());
  }

  return {
    run,
  };
}
