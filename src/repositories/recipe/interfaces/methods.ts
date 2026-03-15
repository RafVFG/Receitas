import { Recipe } from "../../../entities/recipe/interfaces/recipe";

export interface RecipeRepositoryMethods {
    createOrUpdate: (data: Recipe) => Promise<void>
}