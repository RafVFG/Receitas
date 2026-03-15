import { IngredientRepository } from "../../repositories/ingredient";
import { createOrUpdateIngredient } from "../../use-cases/create-ingredient";
import { ingredientController } from "../controllers/ingredient";

export function makeCreateOrUpdateIngredient() {
    const repository = IngredientRepository();
    const useCase = createOrUpdateIngredient(repository);
    const controller = ingredientController(useCase);

    return controller;
}
