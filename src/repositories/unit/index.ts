import { Unit } from "../../entities/unit/interfaces/unit";
import { connection } from "../../main/config/connection-mysql";
import { UnitRepositoryMethods } from "./interfaces/methods";


export function unitRepository(): UnitRepositoryMethods {
    const database = connection();

    async function createOrUpdate(data: Unit): Promise<void> {
        if (data.id) {
            await database.execute(
                `update unit set name = ? where id = ?`,
                [data.name, data.id]
            );
        } else {
            await database.execute(
                `insert into unit (name) values (?)`,
                [data.name]
            );
        }
    }

    return {
        createOrUpdate
    }
}