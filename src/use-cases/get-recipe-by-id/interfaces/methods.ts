import { RecipeResult } from "../../../repositories/recipe/interfaces/methods";

export interface GetRecipeByIdMethods {
    run: (id: number) => Promise<RecipeResult | null>
}
