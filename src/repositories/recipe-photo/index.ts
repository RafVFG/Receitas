import { connection } from "../../main/config/connection-mysql";
import { RecipePhotoRepositoryMethods } from "./interfaces/methods";

export function recipePhotoRepository(): RecipePhotoRepositoryMethods {
    const database = connection();

    async function add(idRecipe: number, url: string, isPrimary: boolean): Promise<void> {
        if (isPrimary) {
            await database.execute(
                `update recipe_photo set isPrimary = 0 where idRecipe = ?`,
                [idRecipe]
            );
        }

        await database.execute(
            `insert into recipe_photo (idRecipe, url, isPrimary) values (?, ?, ?)`,
            [idRecipe, url, isPrimary ? 1 : 0]
        );
    }

    async function remove(id: number): Promise<void> {
        await database.execute(
            `delete from recipe_photo where id = ?`,
            [id]
        );
    }

    return {
        add,
        remove
    }
}
