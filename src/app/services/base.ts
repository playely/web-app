export interface BaseRequest {

}

export interface BaseResponse {
    error?: BaseError;
}

export interface BaseError {
    errorMessage: string;
    errorCode: string;
}