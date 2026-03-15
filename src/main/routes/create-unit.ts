import { Router, Request, Response } from "express";
import { UnitControllerMethods } from "../../adapters/controllers/unit/interfaces/methods";
import { makeCreateOrUpdateUnit } from "../../adapters/factories/create-unit";

function adaptRoute(controller: UnitControllerMethods) {
    return async (req: Request, res: Response) => {
        const httpRequest = { body: req.body }
        const httpResponse = await controller.handle(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }
}

const createOrUpdateUnitController = makeCreateOrUpdateUnit();
const route = adaptRoute(createOrUpdateUnitController);

export default (router: Router): void => {
    router.post("/create-or-update-unit", route)
}
