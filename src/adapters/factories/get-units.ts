import { unitRepository } from "../../repositories/unit";
import { getUnits } from "../../use-cases/get-units";
import { unitListController } from "../controllers/unit/list";

export function makeGetUnits() {
    const repository = unitRepository();
    const useCase = getUnits(repository);
    const controller = unitListController(useCase);
    return controller;
}
