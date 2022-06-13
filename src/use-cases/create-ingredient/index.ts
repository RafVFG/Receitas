import { Ingredient } from "../../entities/ingredient/interfaces/ingredient";
import { ingredient } from "../../entities/ingredient";
import { CreateIngredientMethods } from "./interfaces/methods";
import { IngredientRepositoryMethods } from "../../repositories/ingredient/interface/methods";

export function createIngredient(ingredientRepository: IngredientRepositoryMethods): CreateIngredientMethods {
    async function run(data: Ingredient): Promise<void> {
        const ingredientOrError = ingredient(data);

        if (!ingredientOrError) return; 

        ingredientRepository.create(ingredientOrError.getValue())
    };

    return {
        run
    }
}