import { GetIngredientsMethods } from "../../../use-cases/get-ingredients/interfaces/methods";
import { response } from "../interfaces/status-code";
import { HttpRequest, HttpResponse } from "./interfaces/http";

export function ingredientListController(getIngredients: GetIngredientsMethods) {
    async function handle(_httpRequest: HttpRequest): Promise<HttpResponse> {
        const res = response();
        try {
            const ingredients = await getIngredients.run();
            return res.ok(ingredients);
        } catch (error) {
            return res.serverError(`Internal: ${error}`);
        }
    }
    return { handle }
}
