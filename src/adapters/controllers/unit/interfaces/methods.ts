import { HttpRequest, HttpResponse } from "./http";

export interface UnitControllerMethods {
    handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
