import { Unit } from "../../../entities/unit/interfaces/unit"

export interface CreateUnitMethods {
    run: (data: Unit) => Promise<void>
}