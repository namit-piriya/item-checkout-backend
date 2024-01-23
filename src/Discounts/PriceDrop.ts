import {Discount} from "./discount.interface";
import {Item} from "../Item";

export class PriceDrop implements Discount {

    private readonly sku: string;
    private readonly finalPrice: number;
    private readonly minCount: number;

    constructor(finalPrice: number, minCount: number, sku = null) {
        this.finalPrice = finalPrice
        this.minCount = minCount
        this.sku = sku;
    }

    calculateDiscount(items: Item[]): number {
        let checkAllItems = !this.sku;
        const totalItems = checkAllItems ? items : items.filter(item => item.sku === this.sku);
        const eligibleDiscount = totalItems.length >= this.minCount;
        if (!eligibleDiscount) {
            return 0;
        }
        const perItemDiscount = totalItems[0].price - this.finalPrice;
        return totalItems.length * perItemDiscount;
    }

}