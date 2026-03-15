import { Unit } from "../../../entities/unit/interfaces/unit"

export interface CreateOrUpdateUnitMethods {
    run: (data: Unit) => Promise<void>
}