import { DelRecipeMethods } from "../../../use-cases/del-recipe/interfaces/methods";
import { response } from "../interfaces/status-code";
import { HttpRequest, HttpResponse } from "./interfaces/http";
import { RecipeDelControllerMethods } from "./interfaces/methods";

export function recipeDelController(delRecipe: DelRecipeMethods): RecipeDelControllerMethods {
    async function handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const res = response();
        const id = Number(httpRequest.params?.id);

        if (!id) return res.badRequest("Missing params: id");

        try {
            await delRecipe.run(id);
            return res.ok();
        } catch (error) {
            return res.serverError(`Internal: ${error}`);
        }
    }

    return { handle }
}
