import {CheckoutController} from "./CheckoutController";
import {Discount} from "./Discounts/discount.interface";
import {BuyXPayForY} from "./Discounts/BuyXPayForY";
import {PriceDrop} from "./Discounts/PriceDrop";
import {Inventory} from "./Inventory";
import {Item} from "./Item";

const inventory = new Inventory();

const items = [
    {
        sku: "ipd",
        name: "Super IPad",
        price: 549.99
    },
    {
        sku: "mbp",
        name: "Mackbook Pro",
        price: 1399.99
    },
    {
        sku: "atv",
        name: "Apple TV",
        price: 109.50
    },
    {
        sku: "vga",
        name: "VGA Adapter",
        price: 30
    }
];

items.forEach(item => {
    inventory.addItemToInventory(new Item(item.sku, item.name, item.price))
})

items.forEach(item => inventory.addItemQuantity(item.sku, 10));

const appliedDiscounts: Discount[] = [new BuyXPayForY('atv', 3, 2),
    new PriceDrop(499.99, 4, 'ipd')]


const checkoutController = new CheckoutController(appliedDiscounts, inventory);

checkoutController.scan("atv");
checkoutController.scan("atv");
checkoutController.scan("atv");
checkoutController.scan("ipd");
checkoutController.scan("ipd");
checkoutController.scan("ipd");
checkoutController.scan("ipd");
checkoutController.scan("ipd");
checkoutController.scan("vga");

console.log('price with discount', checkoutController.total());



