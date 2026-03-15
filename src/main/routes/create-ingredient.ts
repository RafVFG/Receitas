import { Router, Request, Response } from "express";
import { IngredientControllerMethods } from "../../adapters/controllers/ingredient/interfaces/methods";
import { makeCreateOrUpdateIngredient } from "../../adapters/factories/create-ingredient";

function adaptRoute(controller: IngredientControllerMethods) {
    return async (req: Request, res: Response) => {
        const httpRequest = { body: req.body }
        const httpResponse = await controller.handle(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }
}

const createOrUpdateIngredientController = makeCreateOrUpdateIngredient();
const route = adaptRoute(createOrUpdateIngredientController);

export default (router: Router): void => {
    router.post("/create-or-update-ingredient", route)
}
