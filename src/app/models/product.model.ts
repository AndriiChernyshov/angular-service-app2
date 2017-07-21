import { PriceService } from '../services/price.service';

export class Product{
    service: PriceService;
    basePrice: number

    constructor(basePrice: number){
        this.service = new PriceService();
        this.basePrice = basePrice;
    }

    public totalPrice(state: string) : number{
        return this.service.calculateTotalPrice(this.basePrice, state);
    }
}