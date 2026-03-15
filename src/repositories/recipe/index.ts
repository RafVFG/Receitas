import { Recipe } from "../../entities/recipe/interfaces/recipe";
import { RecipeRepositoryMethods } from "./interfaces/methods";
import { connection } from "../../main/config/connection-mysql";

export function recipeRepository(): RecipeRepositoryMethods {
    const database = connection();

    async function createOrUpdate(data: Recipe): Promise<void> {
        let recipeId = data.id;

        if (recipeId) {
            await database.execute(
                `update recipe set name = ?, rating = ?, prepTime = ?, yields = ? where id = ?`,
                [data.name, data.rating ?? null, data.prepTime ?? null, data.yields ?? null, recipeId]
            );
            await database.execute(
                `delete from recipe_ingredient where idRecipe = ?`,
                [recipeId]
            );
        } else {
            const { insertId } = await database.execute<{ insertId: number }>(
                `insert into recipe (name, rating, prepTime, yields) values (?, ?, ?, ?)`,
                [data.name, data.rating ?? null, data.prepTime ?? null, data.yields ?? null]
            );
            recipeId = insertId;
        }

        for (const ingredient of data.ingredients) {
            await database.execute(
                `insert into recipe_ingredient (idRecipe, idIngredient, amount) values (?, ?, ?)`,
                [recipeId, ingredient.id, ingredient.amount ?? null]
            );
        }
    };

    return {
        createOrUpdate
    }
}
