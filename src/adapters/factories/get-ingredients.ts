import { IngredientRepository } from "../../repositories/ingredient";
import { getIngredients } from "../../use-cases/get-ingredients";
import { ingredientListController } from "../controllers/ingredient/list";

export function makeGetIngredients() {
    const repository = IngredientRepository();
    const useCase = getIngredients(repository);
    const controller = ingredientListController(useCase);
    return controller;
}
