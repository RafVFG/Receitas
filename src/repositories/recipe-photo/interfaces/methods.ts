export interface RecipePhotoRepositoryMethods {
    add: (idRecipe: number, url: string, isPrimary: boolean) => Promise<void>
    remove: (id: number) => Promise<void>
}
