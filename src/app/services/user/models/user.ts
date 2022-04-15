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
    price: number;
    currency: string;
    nextInvoice?: Date;
    status: boolean;
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