import { IngredientResult } from "../../../repositories/ingredient/interface/methods";

export interface GetIngredientsMethods {
    run: () => Promise<IngredientResult[]>
}
