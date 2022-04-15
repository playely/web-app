import { IUserSubscription } from "../../subscriptions/models/subscriptions";

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
    subscriptions: IUserSubscription[];
}