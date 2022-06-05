import { HttpRequest, HttpResponse } from "./http";

export interface RecipeControlerMethods {
    handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}