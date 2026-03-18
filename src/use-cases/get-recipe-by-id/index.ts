import { RecipeRepositoryMethods } from "../../repositories/recipe/interfaces/methods";
import { GetRecipeByIdMethods } from "./interfaces/methods";

export function getRecipeById(recipeRepository: RecipeRepositoryMethods): GetRecipeByIdMethods {
    async function run(id: number) {
        return recipeRepository.getById(id);
    }

    return { run }
}
