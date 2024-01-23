import {Item} from "../Item";

export interface Discount {
    calculateDiscount(items: Item[]): number;
}