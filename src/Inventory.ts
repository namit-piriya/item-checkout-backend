import {Item} from "./Item";

export class Inventory {
    private itemInventory: Map<string, number>;
    private itemDirectory: Map<string, Item>;

    constructor() {
        this.itemDirectory = new Map();
        this.itemInventory = new Map();
    }

    addItemToInventory(item: Item) {
        this.itemDirectory.set(item.sku, item);
    }

    addItemQuantity(sku: string, quantity: number) {
        let skuCount = this.itemInventory.get(sku) || 0;
        this.itemInventory.set(sku, skuCount + quantity);
    }

    removeItem(sku: string) {
        let skuCount = this.itemInventory.get(sku) || 0;
        if (skuCount == 0) {
            return;
        }
        this.itemInventory.set(sku, skuCount - 1);
    }

    getItemDetailsWithSku(sku:string): Item {
        return this.itemDirectory.get(sku);
    }

}