import { recipeRepository } from "../../repositories/recipe";
import { getRecipeById } from "../../use-cases/get-recipe-by-id";
import { recipeShowController } from "../controllers/recipe/show";

export function makeGetRecipeById() {
    const repository = recipeRepository();
    const useCase = getRecipeById(repository);
    const controller = recipeShowController(useCase);

    return controller;
}
