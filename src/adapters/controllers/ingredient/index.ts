import { createOrUpdateIngredientMethods } from "../../../use-cases/create-ingredient/interfaces/methods";
import { response } from "../interfaces/status-code";
import { HttpRequest, HttpResponse } from "./interfaces/http";
import { IngredientControllerMethods } from "./interfaces/methods";

export function ingredientController(createOrUpdateIngredient: createOrUpdateIngredientMethods): IngredientControllerMethods {
    async function handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { body } = httpRequest;
        const fieldsMissing = [];
        const res = response();

        if(!body.name) fieldsMissing.push("name");
        if(!body.idUnit) fieldsMissing.push("idUnit");
        if(fieldsMissing.length > 0) return res.badRequest(`Missing params: ${fieldsMissing}`);

        const ingredient = {
            id: body.id ?? undefined,
            name: body.name,
            idUnit: body.idUnit,
            amount: body.amount ?? undefined,
        }

        try {
            await createOrUpdateIngredient.run(ingredient)
        } catch (error) {
            return res.serverError(`Internal: ${error}`);
        }

        return res.ok();
    }

    return {
        handle
    }
}
