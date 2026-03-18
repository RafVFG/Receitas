import { RecipeRepositoryMethods, RecipeResult } from "./interfaces/methods";
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

  async function getAll(): Promise<RecipeResult[]> {
    const recipes = await database.execute<RecipeResult[]>(
      `select r.*,
        (select json_arrayagg(json_object('id', i.id, 'name', i.name, 'amount', ri.amount))
         from recipe_ingredient ri join ingredient i on i.id = ri.idIngredient
         where ri.idRecipe = r.id) as ingredients,
        (select json_arrayagg(json_object('id', p.id, 'url', p.url, 'isPrimary', p.isPrimary))
         from recipe_photo p where p.idRecipe = r.id) as photos
       from recipe r
       order by r.created_at desc`
    );
    return recipes;
  }

  async function getById(id: number): Promise<RecipeResult | null> {
    const rows = await database.execute<RecipeResult[]>(
      `select r.*,
        (select json_arrayagg(json_object('id', i.id, 'name', i.name, 'amount', ri.amount))
         from recipe_ingredient ri join ingredient i on i.id = ri.idIngredient
         where ri.idRecipe = r.id) as ingredients,
        (select json_arrayagg(json_object('id', p.id, 'url', p.url, 'isPrimary', p.isPrimary))
         from recipe_photo p where p.idRecipe = r.id) as photos
       from recipe r where r.id = ?`,
      [id]
    );
    return rows[0] ?? null;
  }

  async function remove(id: number): Promise<void> {
    await database.execute(
      `delete from recipe where id = ?`,
      [id]
    );
  }

  return {
    createOrUpdate,
    getAll,
    getById,
    remove,
  };
}
