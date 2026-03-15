import { Unit } from "../../../entities/unit/interfaces/unit";

export interface UnitRepositoryMethods {
    create: (data: Unit) => Promise<void>
}