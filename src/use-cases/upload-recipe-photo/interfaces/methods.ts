export interface UploadRecipePhotoMethods {
    run: (idRecipe: number, url: string, isPrimary: boolean) => Promise<void>
}
