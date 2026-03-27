import { DelIngredientMethods } from "../../../use-cases/del-ingredient/interfaces/methods";
import { response } from "../interfaces/status-code";
import { HttpRequest, HttpResponse } from "./interfaces/http";

export function ingredientDelController(delIngredient: DelIngredientMethods) {
    async function handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const res = response();
        const id = Number(httpRequest.params?.id);

        if (!id) return res.badRequest("Missing params: id");

        try {
            await delIngredient.run(id);
            return res.ok();
        } catch (error) {
            return res.serverError(`Internal: ${error}`);
        }
    }
    return { handle }
}
