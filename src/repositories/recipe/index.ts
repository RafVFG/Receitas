import { RecipeRepositoryMethods } from "./interfaces/methods";
import { connection } from "../../main/config/connection-mysql";
import { Recipe } from "../../entities/recipe/interfaces/recipe";

export function recipeRepository(): RecipeRepositoryMethods {
    const database = connection();

    async function createOrUpdate(data: Recipe): Promise<void> {
        let recipeId = data.id;

<<<<<<< HEAD
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
=======
        const { insertId } = await database.execute(
            `insert into recipe (
                name,
                rating,
                prepTime,
                yields)
             values (
                '${recipe.name}',
                ${recipe.rating},
                '${recipe.prepTipe}',
                ${recipe.yields}
            )`
        );
        
        const recipeIngredients = data.ingredients.map((ingredient) => {
            return `(${insertId}, ${ingredient.id}, ${ingredient.idUnit}, '${ingredient.amaunt}')`
        });

        await database.execute(
            `insert into recipe_ingredient (
                idRecipe,
                idIngredient,
                idUnit,
                amaunt)
                values ${recipeIngredients}`
        )   
>>>>>>> b0bc5de09db8a618b5e322225ebe98ba07544583
    };

    return {
        createOrUpdate
    }
}
