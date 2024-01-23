export class Item {
    private readonly _sku: string;
    private readonly _name: string;
    private readonly _price: number;


    constructor(sku: string, name: string, price: number) {
        this._sku = sku;
        this._name = name;
        this._price = price;
    }

    get sku(): string {
        return this._sku;
    }

    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price;
    }
}