import { recipePhotoRepository } from "../../repositories/recipe-photo";
import { uploadRecipePhoto } from "../../use-cases/upload-recipe-photo";
import { recipePhotoController } from "../controllers/recipe-photo";

export function makeUploadRecipePhoto() {
    const repository = recipePhotoRepository();
    const useCase = uploadRecipePhoto(repository);
    const controller = recipePhotoController(useCase);

    return controller;
}
