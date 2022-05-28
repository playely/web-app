import { IUserSubscription } from "../../subscriptions/models/subscriptions";

export enum UserLoginMethod {
    OTP = 'otp',
    EMAIL = 'email',
}
export interface ICountry {
    name: string;
    code: string;
    numberCode: string;
}


export interface IUserInfoResponse {
    id: string;
    email: string;
    phone: string;
    country: ICountry;
    name: string;
    image: string;
    loginMethod: UserLoginMethod;
    subscriptions: IUserSubscription[];
}

export interface IUserPreferencesResponse {
    loginMethod: UserLoginMethod;
}