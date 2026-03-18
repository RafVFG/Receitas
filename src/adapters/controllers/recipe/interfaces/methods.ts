import { HttpRequest, HttpResponse } from "./http";

export interface RecipeControlerMethods {
    handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}

export interface RecipeListControllerMethods {
    handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}

export interface RecipeShowControllerMethods {
    handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}

export interface RecipeDelControllerMethods {
    handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
