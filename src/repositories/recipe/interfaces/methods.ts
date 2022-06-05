import { Recipe } from "../../../entities/recipe/interfaces/recipe";

export interface RecipeRepositoryMethods {
    create: (data: Recipe) => Promise<void>
}