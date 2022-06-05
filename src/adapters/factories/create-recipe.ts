import { recipeRepository } from "../../repositories/recipe";
import { createRecipe } from "../../use-cases/create-recipe";
import { recipeControler } from "../controllers/recipe";

export function makeCreateRecipe() {
    const repository = recipeRepository();
    const useCase = createRecipe(repository);
    const controller = recipeControler(useCase);

    return controller;
}