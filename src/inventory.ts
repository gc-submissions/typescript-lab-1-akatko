import { Product } from "./products";

export interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  {
    product: {
      name: "motor",
      price: 10.00,
    },
    quantity: 10,
  },
  {
    product: {
      name: "sensor",
      price: 12.50,
    },
    quantity: 4,
  },
  {
    product: {
      name: "LED",
      price: 1.00,
    },
    quantity: 20,
  },
];

export function calcInventoryValue(arrayOfInventoryItems: InventoryItem[]) {
  let inventoryTotal = 0;
  for (let i = 0; i < arrayOfInventoryItems.length; i++) {
    inventoryTotal +=
      arrayOfInventoryItems[i].product.price *
      arrayOfInventoryItems[i].quantity;
  }
  return inventoryTotal;
}

console.log(calcInventoryValue(inventory))