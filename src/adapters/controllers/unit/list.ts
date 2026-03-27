import { GetUnitsMethods } from "../../../use-cases/get-units/interfaces/methods";
import { response } from "../interfaces/status-code";
import { HttpRequest, HttpResponse } from "./interfaces/http";

export function unitListController(getUnits: GetUnitsMethods) {
    async function handle(_httpRequest: HttpRequest): Promise<HttpResponse> {
        const res = response();
        try {
            const units = await getUnits.run();
            return res.ok(units);
        } catch (error) {
            return res.serverError(`Internal: ${error}`);
        }
    }
    return { handle }
}
