import { RecipeResult } from "../../../repositories/recipe/interfaces/methods";

export interface GetRecipesMethods {
    run: (filters?: { ingredient?: string }) => Promise<RecipeResult[]>
}
