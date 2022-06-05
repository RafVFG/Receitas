import { HttpResponse } from "../recipe/interfaces/http";

export function response() {
    async function badRequest(error: string): Promise<HttpResponse> {
        return {
            statusCode: 400,
            body: error        
        }
    }

    async function serverError(error: string): Promise<HttpResponse> {
        return {
            statusCode: 500,
            body: error        
        }
    }

    async function ok(data?: any): Promise<HttpResponse> {
        return {
            statusCode: 200,
            body: data        
        }
    }

    return {
        badRequest,
        serverError,
        ok
    }
}