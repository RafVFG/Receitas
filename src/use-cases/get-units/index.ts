import { UnitRepositoryMethods } from "../../repositories/unit/interfaces/methods";
import { GetUnitsMethods } from "./interfaces/methods";

export function getUnits(unitRepository: UnitRepositoryMethods): GetUnitsMethods {
    async function run() {
        return unitRepository.getAll();
    }

    return { run }
}
