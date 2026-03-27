import { IngredientRepositoryMethods } from "../../repositories/ingredient/interface/methods";
import { GetIngredientsMethods } from "./interfaces/methods";

export function getIngredients(ingredientRepository: IngredientRepositoryMethods): GetIngredientsMethods {
    async function run() {
        return ingredientRepository.getAll();
    }

    return { run }
}
