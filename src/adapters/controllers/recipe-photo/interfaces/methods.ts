import { HttpRequest, HttpResponse } from "./http";

export interface RecipePhotoControllerMethods {
    handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
