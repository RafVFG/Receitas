import { RecipeRepositoryMethods } from "../../repositories/recipe/interfaces/methods";
import { DelRecipeMethods } from "./interfaces/methods";

export function delRecipe(recipeRepository: RecipeRepositoryMethods): DelRecipeMethods {
    async function run(id: number) {
        await recipeRepository.remove(id);
    }

    return { run }
}
