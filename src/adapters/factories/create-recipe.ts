import { recipeRepository } from "../../repositories/recipe";
import { createOrUpdateRecipe } from "../../use-cases/create-recipe";
import { recipeController } from "../controllers/recipe";

export function makeCreateOrUpdateRecipe() {
    const repository = recipeRepository();
    const useCase = createOrUpdateRecipe(repository);
    const controller = recipeController(useCase);

    return controller;
}