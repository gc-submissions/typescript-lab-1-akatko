export interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: "Burrito", price: 8 },
  { name: "Taco", price: 5 },
  { name: "Chips and Salsa", price: 5 },
];

export function calcAverageProductPrice(arrayOfProducts: Product[]) {
  let averagePrice = 0;
  let numberOfProducts = 0;
  for (let i = 0; i < arrayOfProducts.length; i++) {
    numberOfProducts++;
    averagePrice += arrayOfProducts[i].price;
  }
  return averagePrice / numberOfProducts;
}

console.log(calcAverageProductPrice(products));
