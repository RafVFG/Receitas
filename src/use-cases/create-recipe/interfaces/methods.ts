import { Recipe } from "../../../entities/recipe/interfaces/recipe";

export interface createRecipeMethods {
    run: (data: Recipe) => Promise<void>
}