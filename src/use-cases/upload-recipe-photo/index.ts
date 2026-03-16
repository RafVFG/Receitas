import { RecipePhotoRepositoryMethods } from "../../repositories/recipe-photo/interfaces/methods";
import { UploadRecipePhotoMethods } from "./interfaces/methods";

export function uploadRecipePhoto(recipePhotoRepository: RecipePhotoRepositoryMethods): UploadRecipePhotoMethods {
    async function run(idRecipe: number, url: string, isPrimary: boolean): Promise<void> {
        await recipePhotoRepository.add(idRecipe, url, isPrimary);
    }

    return {
        run
    }
}
