import {Discount} from "./Discounts/discount.interface";
import {Inventory} from "./Inventory";
import {Item} from "./Item";


export class CheckoutController {

    private rules: Discount[];
    private readonly items: Item[];
    private inventory: Inventory;

    constructor(pricingRules: Discount[], inventory: Inventory) {
        this.rules = pricingRules;
        this.inventory = inventory;
        this.items = [];
    }

    scan(sku:string ) {
        this.inventory.removeItem(sku);
        this.items.push(this.inventory.getItemDetailsWithSku(sku));
    }

    total(): number {
        let totalPrice = this.items.reduce((prev, curr) => {
            return prev + curr.price;
        }, 0)
        console.log('totalPrice',totalPrice);
        const totalDiscount = this.rules.reduce((prev, discount) => {
            return prev + discount.calculateDiscount(this.items);
        }, 0)
        console.log('totalDiscount',totalDiscount);
        return totalPrice - totalDiscount;
    }

}


/*
* Discount -> calculateDiscount
* Pricing Rule1,Pricing Rule2
*
* scan -> add items to cart.
* total -> go through all the products check for the calculate discount.
* discount -> count of particular item or all items depending on the cart.
*
* (549.99 - 499.99) / 549.99
* 0.09091074383
* */