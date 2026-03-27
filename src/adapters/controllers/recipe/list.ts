import { GetRecipesMethods } from "../../../use-cases/get-recipes/interfaces/methods";
import { response } from "../interfaces/status-code";
import { HttpRequest, HttpResponse } from "./interfaces/http";
import { RecipeListControllerMethods } from "./interfaces/methods";

export function recipeListController(getRecipes: GetRecipesMethods): RecipeListControllerMethods {
    async function handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const res = response();

        try {
            const filters = { ingredient: httpRequest.query?.ingredient as string | undefined };
            const recipes = await getRecipes.run(filters);
            return res.ok(recipes);
        } catch (error) {
            return res.serverError(`Internal: ${error}`);
        }
    }

    return { handle }
}
