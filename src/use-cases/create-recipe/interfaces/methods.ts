import { Recipe } from "../../../entities/recipe/interfaces/recipe";

export interface createOrUpdateRecipeMethods {
    run: (data: Recipe) => Promise<void>
}