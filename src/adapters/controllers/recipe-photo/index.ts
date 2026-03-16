import { UploadRecipePhotoMethods } from "../../../use-cases/upload-recipe-photo/interfaces/methods";
import { response } from "../interfaces/status-code";
import { HttpRequest, HttpResponse } from "./interfaces/http";
import { RecipePhotoControllerMethods } from "./interfaces/methods";

export function recipePhotoController(uploadRecipePhoto: UploadRecipePhotoMethods): RecipePhotoControllerMethods {
    async function handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const res = response();
        const idRecipe = Number(httpRequest.params?.idRecipe);
        const file = httpRequest.file;

        if (!idRecipe) return res.badRequest("Missing params: idRecipe");
        if (!file) return res.badRequest("Missing file");

        const isPrimary = httpRequest.body?.isPrimary === "true";
        const url = `/uploads/${file.filename}`;

        try {
            await uploadRecipePhoto.run(idRecipe, url, isPrimary);
        } catch (error) {
            return res.serverError(`Internal: ${error}`);
        }

        return res.ok({ url });
    }

    return {
        handle
    }
}
