import { Unit } from "../../../entities/unit/interfaces/unit";

export interface UnitResult {
    id: number
    name: string
}

export interface UnitRepositoryMethods {
    createOrUpdate: (data: Unit) => Promise<void>
    getAll: () => Promise<UnitResult[]>
    getById: (id: number) => Promise<UnitResult | null>
    del: (id: number) => Promise<void>
}
