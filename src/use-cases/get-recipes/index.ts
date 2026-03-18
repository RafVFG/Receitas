import { RecipeRepositoryMethods } from "../../repositories/recipe/interfaces/methods";
import { GetRecipesMethods } from "./interfaces/methods";

export function getRecipes(recipeRepository: RecipeRepositoryMethods): GetRecipesMethods {
    async function run() {
        return recipeRepository.getAll();
    }

    return { run }
}
