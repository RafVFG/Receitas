import { recipeRepository } from "../../repositories/recipe";
import { getRecipes } from "../../use-cases/get-recipes";
import { recipeListController } from "../controllers/recipe/list";

export function makeGetRecipes() {
    const repository = recipeRepository();
    const useCase = getRecipes(repository);
    const controller = recipeListController(useCase);

    return controller;
}
