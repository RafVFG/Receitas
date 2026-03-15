import { Ingredient } from "../../entities/ingredient/interfaces/ingredient";
import { connection } from "../../main/config/connection-mysql";
import { IngredientRepositoryMethods } from "./interface/methods";


export function IngredientRepository(): IngredientRepositoryMethods {
    const database = connection();

    async function createOrUpdate(data: Ingredient): Promise<void> {
        if (data.id) {
            await database.execute(
                `update ingredient set name = ?, idUnit = ?, amount = ? where id = ?`,
                [data.name, data.idUnit, data.amount ?? null, data.id]
            );
        } else {
            await database.execute(
                `insert into ingredient (name, idUnit, amount) values (?, ?, ?)`,
                [data.name, data.idUnit, data.amount ?? null]
            );
        }
    }

    return {
        createOrUpdate
    }
}