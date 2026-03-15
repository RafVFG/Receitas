import { unitRepository } from "../../repositories/unit";
import { createOrUpdateUnit } from "../../use-cases/create-unit";
import { unitController } from "../controllers/unit";

export function makeCreateOrUpdateUnit() {
    const repository = unitRepository();
    const useCase = createOrUpdateUnit(repository);
    const controller = unitController(useCase);

    return controller;
}
