import { unit } from "../../entities/unit";
import { Unit } from "../../entities/unit/interfaces/unit";
import { UnitRepositoryMethods } from "../../repositories/unit/interfaces/methods"
import { CreateOrUpdateUnitMethods } from "./interfaces/methods";

export function createOrUpdateUnit(unitRepository: UnitRepositoryMethods): CreateOrUpdateUnitMethods {
    async function run(data: Unit): Promise<void> {
        const unitOrError = unit(data);

        if (!unitOrError) return;

        await unitRepository.createOrUpdate(unitOrError.getValue())
    };

    return {
        run
    }
}