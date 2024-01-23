import {Discount} from "./discount.interface";
import {Item} from "../Item";

export class BuyXPayForY implements Discount {
    private readonly sku: string;
    private readonly x: number;
    private readonly y: number;

    constructor(sku: string, x: number, y: number) {
        this.sku = sku;
        this.x = x;
        this.y = y;
    }

    calculateDiscount(items: Item[]): number {
        let checkAllItems = !this.sku;
        const totalItems = checkAllItems ? items : items.filter(item => item.sku === this.sku);
        const totalGroups = Math.floor(totalItems.length / this.x);
        const discountedItems = this.x - this.y;
        const totalDiscountedItems = discountedItems * totalGroups
        const discount = totalDiscountedItems * totalItems[0].price;
        return discount;
    }
}
