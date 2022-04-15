import { Injectable } from '@angular/core';
import { IUserSubscription } from './models/subscriptions';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  constructor() { }

  /**
   * Get all subscriptions of the user
   * @returns 
   */
  getSUbscriptions(): Promise<IUserSubscription[]> {
    return Promise.resolve([
      {
        name: 'Plan Estandar (3 meses)',
        id: '1',
        validUntil: new Date(),
        purchased: new Date(),
        price: 119.90,
        currency: 'Q.',
        nextInvoice: new Date(),
        status: true,
      },
      {
        name: 'Plan Estandar (3 meses)',
        id: '2',
        validUntil: new Date(),
        purchased: new Date(),
        price: 119.90,
        currency: 'Q.',
        nextInvoice: new Date(),
        status: false,
      },
      {
        name: 'Plan Estandar (3 meses)',
        id: '3',
        validUntil: new Date(),
        purchased: new Date(),
        price: 119.90,
        currency: 'Q.',
        nextInvoice: new Date(),
        status: false,
      },
      {
        name: 'Plan Estandar (3 meses)',
        id: '4',
        validUntil: new Date(),
        purchased: new Date(),
        price: 119.90,
        currency: 'Q.',
        nextInvoice: new Date(),
        status: true,
      },
      {
        name: 'Plan Estandar (3 meses)',
        id: '5',
        validUntil: new Date(),
        purchased: new Date(),
        price: 119.90,
        currency: 'Q.',
        nextInvoice: new Date(),
        status: false,
      },
      {
        name: 'Plan Estandar (3 meses)',
        id: '6',
        validUntil: new Date(),
        purchased: new Date(),
        price: 119.90,
        currency: 'Q.',
        nextInvoice: new Date(),
        status: false,
      },
      {
        name: 'Plan Estandar (3 meses)',
        id: '7',
        validUntil: new Date(),
        purchased: new Date(),
        price: 119.90,
        currency: 'Q.',
        nextInvoice: new Date(),
        status: true,
      },
      {
        name: 'Plan Estandar (3 meses)',
        id: '8',
        validUntil: new Date(),
        purchased: new Date(),
        price: 119.90,
        currency: 'Q.',
        nextInvoice: new Date(),
        status: false,
      },
      {
        name: 'Plan Estandar (3 meses)',
        id: '9',
        validUntil: new Date(),
        purchased: new Date(),
        price: 119.90,
        currency: 'Q.',
        nextInvoice: new Date(),
        status: false,
      },
      {
        name: 'Plan Estandar (3 meses)',
        id: '10',
        validUntil: new Date(),
        purchased: new Date(),
        price: 119.90,
        currency: 'Q.',
        nextInvoice: new Date(),
        status: false,
      }
    ]);
  }
}
