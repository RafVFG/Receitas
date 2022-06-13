import { Recipe } from "../../entities/recipe/interfaces/recipe";
import { recipe } from "../../entities/recipe";
import { CreateRecipeMethods } from "./interfaces/methods";
import { RecipeRepositoryMethods } from "../../repositories/recipe/interfaces/methods";

export function createRecipe(recipeRepository: RecipeRepositoryMethods): CreateRecipeMethods {
  async function run(data: Recipe): Promise<void> {
    const recipeOrError = recipe(data);

    if (!recipeOrError) return;

    recipeRepository.create(recipeOrError.getValue())
  };

  return {
    run
  }
}
