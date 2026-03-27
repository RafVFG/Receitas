import { IngredientRepositoryMethods } from "../../repositories/ingredient/interface/methods";
import { DelIngredientMethods } from "./interfaces/methods";

export function delIngredient(ingredientRepository: IngredientRepositoryMethods): DelIngredientMethods {
    async function run(id: number) {
        await ingredientRepository.del(id);
    }

    return { run }
}
