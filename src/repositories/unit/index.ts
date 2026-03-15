import { Unit } from "../../entities/unit/interfaces/unit";
import { connection } from "../../main/config/connection-mysql";
import { UnitRepositoryMethods } from "./interfaces/methods";


export function unitRepository(): UnitRepositoryMethods {
    const database = connection();

    async function create(data: Unit): Promise<void> {
        const unit = {
            name: data.name
        };

        await database.execute(
            `insert into unit (
                name)
            values (
                '${unit.name}'
            );`
        )
    }

    return {
        create
    }
}