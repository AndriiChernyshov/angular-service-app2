import { Injectable } from '@angular/core';

@Injectable()
export class PriceService {

  constructor() { }

  public calculateTotalPrice(basePrice: number, state: string){
    const tax = Math.random();

    return basePrice + tax;
  }
}
