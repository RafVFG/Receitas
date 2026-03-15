import { Router, Request, Response } from "express";
import { RecipeControlerMethods } from "../../adapters/controllers/recipe/interfaces/methods";

import { makeCreateOrUpdateRecipe } from "../../adapters/factories/create-recipe";

function adaptRoute(controller: RecipeControlerMethods) {
    return async (req: Request, res: Response) => {
        const httpRequest = {
            body: req.body
        }

        const httpResponse = await controller.handle(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }
}

const createOrUpdateRecipeController = makeCreateOrUpdateRecipe();
const route = adaptRoute(createOrUpdateRecipeController);

export default (router: Router): void => {
    router.post("/create-or-update-recipe", route)
}
