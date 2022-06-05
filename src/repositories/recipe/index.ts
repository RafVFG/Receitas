import { Recipe } from "../../entities/recipe/interfaces/recipe";
import { RecipeRepositoryMethods } from "./interfaces/methods";

export function recipeRepository(): RecipeRepositoryMethods {
    async function create(data: Recipe): Promise<void> {
        console.log(data)
    }
    
    return {
        create
    }
}
