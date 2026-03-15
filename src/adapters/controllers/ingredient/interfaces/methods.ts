import { HttpRequest, HttpResponse } from "./http";

export interface IngredientControllerMethods {
    handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
