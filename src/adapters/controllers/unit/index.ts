import { CreateOrUpdateUnitMethods } from "../../../use-cases/create-unit/interfaces/methods";
import { response } from "../interfaces/status-code";
import { HttpRequest, HttpResponse } from "./interfaces/http";
import { UnitControllerMethods } from "./interfaces/methods";

export function unitController(createOrUpdateUnit: CreateOrUpdateUnitMethods): UnitControllerMethods {
    async function handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { body } = httpRequest;
        const res = response();

        if(!body.name) return res.badRequest(`Missing params: name`);

        const unit = {
            id: body.id ?? undefined,
            name: body.name,
        }

        try {
            await createOrUpdateUnit.run(unit)
        } catch (error) {
            return res.serverError(`Internal: ${error}`);
        }

        return res.ok();
    }

    return {
        handle
    }
}
