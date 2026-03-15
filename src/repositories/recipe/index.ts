import { RecipeRepositoryMethods } from "./interfaces/methods";
import { connection } from "../../main/config/connection-mysql";
import { Recipe } from "../../entities/recipe/interfaces/recipe";

export function recipeRepository(): RecipeRepositoryMethods {
  const database = connection();

  async function createOrUpdate(data: Recipe): Promise<void> {
    let recipeId = data.id;

    const directions = JSON.stringify(data.directions);

    if (recipeId) {
      await database.execute(
        `update recipe set name = ?, description = ?, directions = ?, rating = ?, prepTime = ?, yields = ? where id = ?`,
        [data.name, data.description ?? null, directions, data.rating ?? null, data.prepTime ?? null, data.yields ?? null, recipeId]
      );
      await database.execute(
        `delete from recipe_ingredient where idRecipe = ?`,
        [recipeId]
      );
    } else {
      const { insertId } = await database.execute<{ insertId: number }>(
        `insert into recipe (idUser, name, description, directions, rating, prepTime, yields) values (?, ?, ?, ?, ?, ?, ?)`,
        [data.idUser, data.name, data.description ?? null, directions, data.rating ?? null, data.prepTime ?? null, data.yields ?? null]
      );
      recipeId = insertId;
    }

    for (const ingredient of data.ingredients) {
      await database.execute(
        `insert into recipe_ingredient (idRecipe, idIngredient, amount) values (?, ?, ?)`,
        [recipeId, ingredient.id, ingredient.amount ?? null],
      );
    }
  }

  return {
    createOrUpdate,
  };
}
