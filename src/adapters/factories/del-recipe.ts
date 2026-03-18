import { recipeRepository } from "../../repositories/recipe";
import { delRecipe } from "../../use-cases/del-recipe";
import { recipeDelController } from "../controllers/recipe/del";

export function makeDelRecipe() {
    const repository = recipeRepository();
    const useCase = delRecipe(repository);
    const controller = recipeDelController(useCase);

    return controller;
}
