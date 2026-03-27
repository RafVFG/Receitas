import { UnitRepositoryMethods } from "../../repositories/unit/interfaces/methods";
import { DelUnitMethods } from "./interfaces/methods";

export function delUnit(unitRepository: UnitRepositoryMethods): DelUnitMethods {
    async function run(id: number) {
        await unitRepository.del(id);
    }

    return { run }
}
