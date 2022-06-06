import { createRecipeMethods } from "../../../use-cases/create-recipe/interfaces/methods";
import { response } from "../interfaces/status-code";
import { HttpRequest, HttpResponse } from "./interfaces/http";
import { RecipeControlerMethods } from "./interfaces/methods";

export function recipeControler(createRecipe: createRecipeMethods): RecipeControlerMethods {
    async function handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { body } = httpRequest;
        const fieldsMissing = [];
        const res = response();

        if(!body.name) fieldsMissing.push("name");
        if(body.ingredients.length == 0) fieldsMissing.push("ingredients");
        if(body.directions.length == 0) fieldsMissing.push("directions");
        if(fieldsMissing.length > 0) return res.badRequest(`Missing params: ${fieldsMissing}`);

        const recipe = {
            name: body.name,
            ingredients: body.ingredients,
            directions: body.directions,
            rating: !body.rating ? 'null' : body.rating,
            tags: !body.tags ? 'null' : body.tags,
            prepTime: !body.prepTime ? 'null' : body.prepTime,
            yields: !body.yields ? 'null' : body.yields
        }

        try {
            await createRecipe.run(recipe)
        } catch (error) {
            res.serverError(`Internal: ${error}`);
        }
        
        return res.ok();
    } 

    return {
        handle
    }
} 