import { Router, Request, Response } from "express";
import { upload } from "../config/upload";
import { makeUploadRecipePhoto } from "../../adapters/factories/upload-recipe-photo";
import { RecipePhotoControllerMethods } from "../../adapters/controllers/recipe-photo/interfaces/methods";

function adaptRoute(controller: RecipePhotoControllerMethods) {
    return async (req: Request, res: Response) => {
        const httpRequest = {
            params: req.params,
            body: req.body,
            file: req.file
        }
        const httpResponse = await controller.handle(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }
}

const uploadPhotoController = makeUploadRecipePhoto();
const route = adaptRoute(uploadPhotoController);

export default (router: Router): void => {
    router.post("/recipe/:idRecipe/photo", upload.single("photo"), route)
}
