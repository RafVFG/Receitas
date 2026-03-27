import { Unit } from "../../entities/unit/interfaces/unit";
import { connection } from "../../main/config/connection-mysql";
import { UnitRepositoryMethods, UnitResult } from "./interfaces/methods";


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

    async function getAll(): Promise<UnitResult[]> {
        return database.execute<UnitResult[]>(
            `select id, name from unit order by name asc`
        );
    }

    async function getById(id: number): Promise<UnitResult | null> {
        const rows = await database.execute<UnitResult[]>(
            `select id, name from unit where id = ?`,
            [id]
        );
        return rows[0] ?? null;
    }

    async function del(id: number): Promise<void> {
        await database.execute(
            `delete from unit where id = ?`,
            [id]
        );
    }

    return {
        createOrUpdate,
        getAll,
        getById,
        del,
    }
}