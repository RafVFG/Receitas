import { Router, Request, Response } from "express";
import { makeCreateOrUpdateIngredient } from "../../adapters/factories/create-ingredient";
import { makeGetIngredients } from "../../adapters/factories/get-ingredients";
import { makeDelIngredient } from "../../adapters/factories/del-ingredient";

function adaptRoute(controller: { handle: (req: any) => Promise<any> }) {
    return async (req: Request, res: Response) => {
        const httpRequest = { params: req.params, body: req.body };
        const httpResponse = await controller.handle(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }
}

const createOrUpdateController = makeCreateOrUpdateIngredient();
const listController = makeGetIngredients();
const delController = makeDelIngredient();

export default (router: Router): void => {
    router.post("/ingredient", adaptRoute(createOrUpdateController))
    router.get("/ingredients", adaptRoute(listController))
    router.delete("/ingredient/:id", adaptRoute(delController))
}
