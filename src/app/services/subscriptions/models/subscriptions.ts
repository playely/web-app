
export interface IUserSubscription {
    id: string;
    name: string;
    validUntil: Date;
    purchased: Date;
    price: number;
    currency: string;
    nextBilling?: Date;
    status: boolean;
}