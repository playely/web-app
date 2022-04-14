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
    id: string;
}

export interface UserSession {
    id: string;
    email: string;
    name: string;
    image: string;
}