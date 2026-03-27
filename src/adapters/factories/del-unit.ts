import { unitRepository } from "../../repositories/unit";
import { delUnit } from "../../use-cases/del-unit";
import { unitDelController } from "../controllers/unit/del";

export function makeDelUnit() {
    const repository = unitRepository();
    const useCase = delUnit(repository);
    const controller = unitDelController(useCase);
    return controller;
}
