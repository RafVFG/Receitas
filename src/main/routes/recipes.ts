import { Router, Request, Response } from "express";
import { makeGetRecipes } from "../../adapters/factories/get-recipes";
import { makeGetRecipeById } from "../../adapters/factories/get-recipe-by-id";
import { makeDelRecipe } from "../../adapters/factories/del-recipe";

function adaptRoute(controller: { handle: (req: any) => Promise<any> }) {
    return async (req: Request, res: Response) => {
        const httpRequest = { params: req.params, body: req.body, query: req.query };
        const httpResponse = await controller.handle(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }
}

const listController = makeGetRecipes();
const showController = makeGetRecipeById();
const delController = makeDelRecipe();

export default (router: Router): void => {
    router.get("/recipes", adaptRoute(listController))
    router.get("/recipe/:id", adaptRoute(showController))
    router.delete("/recipe/:id", adaptRoute(delController))
}
