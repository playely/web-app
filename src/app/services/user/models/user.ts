export interface ICountry {
    name: string;
    code: string;
    numberCode: string;
}

export interface IUserSubscription {
    id: string;
    name: string;
    validUntil: Date;
    purchased: Date;
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