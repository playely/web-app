import { BaseResponse } from "../../base";

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse extends BaseResponse {
    token: string;
    email: string;
    name: string;
    image: string;
}

export interface UserSession {
    email: string;
    name: string;
    image: string;
}