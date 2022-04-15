import { Injectable } from '@angular/core';
import { IUserInfoResponse, IUserSubscription } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  getUserInfo(): Promise<IUserInfoResponse> {
    return Promise.resolve({
      email: 'test@text.com',
      image: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
      name: 'John Smith',
      token: 'dfwefwefwefwefewfwefewfwe',
      id: '123423232',
      phone: '53365889',
      country: {
        code: 'GT',
        name: 'Guatemala',
        numberCode: '502'
      },
      subscriptions: [],
    });
  }

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
