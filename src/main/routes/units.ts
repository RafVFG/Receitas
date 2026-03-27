import { Router, Request, Response } from "express";
import { makeCreateOrUpdateUnit } from "../../adapters/factories/create-unit";
import { makeGetUnits } from "../../adapters/factories/get-units";
import { makeDelUnit } from "../../adapters/factories/del-unit";

function adaptRoute(controller: { handle: (req: any) => Promise<any> }) {
    return async (req: Request, res: Response) => {
        const httpRequest = { params: req.params, body: req.body };
        const httpResponse = await controller.handle(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }
}

const createOrUpdateController = makeCreateOrUpdateUnit();
const listController = makeGetUnits();
const delController = makeDelUnit();

export default (router: Router): void => {
    router.post("/unit", adaptRoute(createOrUpdateController))
    router.get("/units", adaptRoute(listController))
    router.delete("/unit/:id", adaptRoute(delController))
}
