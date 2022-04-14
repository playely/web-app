import { Injectable } from '@angular/core';
import { StorageKeys } from './storage-items';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  /**
   * Save value in local storage 
   *
   * @param name 
   * @param value 
   */
  setLocalItem(name: StorageKeys, value: any): void {
    localStorage.setItem(name, value);
  }

  /**
   * Get value from local storage 
   *
   * @param name of item
   * @returns value of item
   */
  getLocalItem(name: StorageKeys): any {
    return localStorage.getItem(name);
  }

  /**
   * Remove item from local storage 
   *
   * @param name of item
   */
  removeLocalItem(name: StorageKeys): void {
    localStorage.removeItem(name);
  }

  /**
   * Get local storage length
   *
   * @returns length
   */
  lengthLocal(): number {
    return localStorage.length;
  }

  /**
   * Clear local storage values
   */
  clearLocal(): void {
    localStorage.clear();
  }

}
