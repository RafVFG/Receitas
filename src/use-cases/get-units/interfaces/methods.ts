import { UnitResult } from "../../../repositories/unit/interfaces/methods";

export interface GetUnitsMethods {
    run: () => Promise<UnitResult[]>
}
