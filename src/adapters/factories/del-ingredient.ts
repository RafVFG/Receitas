import { IngredientRepository } from "../../repositories/ingredient";
import { delIngredient } from "../../use-cases/del-ingredient";
import { ingredientDelController } from "../controllers/ingredient/del";

export function makeDelIngredient() {
    const repository = IngredientRepository();
    const useCase = delIngredient(repository);
    const controller = ingredientDelController(useCase);
    return controller;
}
