import { unit } from "../../entities/unit";
import { Unit } from "../../entities/unit/interfaces/unit";
import { UnitRepositoryMethods } from "../../repositories/unit/interfaces/methods"
import { CreateUnitMethods } from "./interfaces/methods";

export function createUnit(unitRepository: UnitRepositoryMethods): CreateUnitMethods {
    async function run(data: Unit): Promise<void> {
        const unitOrError = unit(data);

        if (!unitOrError) return;

        unitRepository.create(unitOrError.getValue())
    };

    return {
        run
    }
}