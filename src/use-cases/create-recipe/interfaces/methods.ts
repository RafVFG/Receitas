import { Recipe } from "../../../entities/recipe/interfaces/recipe";

export interface CreateRecipeMethods {
    run: (data: Recipe) => Promise<void>
}