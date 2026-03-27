import { Ingredient } from "../../entities/ingredient/interfaces/ingredient";
import { connection } from "../../main/config/connection-mysql";
import { IngredientRepositoryMethods, IngredientResult } from "./interface/methods";

export function IngredientRepository(): IngredientRepositoryMethods {
  const database = connection();

  async function createOrUpdate(data: Ingredient): Promise<void> {
    if (data.id) {
      await database.execute(
        `update ingredient set name = ?, idUnit = ?, amount = ? where id = ?`,
        [data.name, data.idUnit ?? null, data.amount ?? null, data.id],
      );
    } else {
      await database.execute(
        `insert into ingredient (name, idUnit, amount) values (?, ?, ?)`,
        [data.name, data.idUnit ?? null, data.amount ?? null],
      );
    }
  }

  async function getAll(): Promise<IngredientResult[]> {
    return database.execute<IngredientResult[]>(
      `select id, name, idUnit, amount from ingredient order by name asc`
    );
  }

  async function getById(id: number): Promise<IngredientResult | null> {
    const rows = await database.execute<IngredientResult[]>(
      `select id, name, idUnit, amount from ingredient where id = ?`,
      [id]
    );
    return rows[0] ?? null;
  }

  async function del(id: number): Promise<void> {
    await database.execute(
      `delete from ingredient where id = ?`,
      [id]
    );
  }

  return {
    createOrUpdate,
    getAll,
    getById,
    del,
  };
}
