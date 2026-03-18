import { RecipeResult } from "../../../repositories/recipe/interfaces/methods";

export interface GetRecipesMethods {
    run: () => Promise<RecipeResult[]>
}
