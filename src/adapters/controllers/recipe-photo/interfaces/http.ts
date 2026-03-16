export interface HttpRequest {
    params?: any
    body?: any
    file?: Express.Multer.File
}

export interface HttpResponse {
    statusCode: number,
    body?: any
}
