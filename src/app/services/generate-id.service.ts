import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateIdService {
  constructor() { }

  generateRandomId(length:number) {
    let result           = [];
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( let i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * characters.length)));
   }
   return result.join('');
  }
}
