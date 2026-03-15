import { Unit } from "../../../entities/unit/interfaces/unit";

export interface UnitRepositoryMethods {
    createOrUpdate: (data: Unit) => Promise<void>
}