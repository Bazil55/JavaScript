// =============================================================================
// 1. Order calculator
// Description: Calculates subtotal, 7% VAT, and final total based on price and quantity.
// AI Log: Prompted AI to create an order calculator determining subtotal, 7% VAT, and total.
// =============================================================================
const unitPrice = 150;
const quantity = 4;

const subtotal = unitPrice * quantity;
const vat = subtotal * 0.07;
const totalOrderPrice = subtotal + vat;

console.log("=== 1. Order Calculator ===");
console.log(`Unit Price: ${unitPrice} THB`);
console.log(`Quantity: ${quantity}`);
console.log(`Subtotal: ${subtotal} THB`);
console.log(`VAT (7%): ${vat.toFixed(2)} THB`);
console.log(`Total: ${totalOrderPrice.toFixed(2)} THB`);


// =============================================================================
// 2. Delivery rule
// Description: Determines the delivery fee using if / else if / else, covering all edge cases.
// AI Log: Prompted AI to implement delivery fee logic handling all distance cases.
// =============================================================================
const distanceKm = 12;
let deliveryFee = 0;

if (distanceKm < 0) {
  console.log("Invalid distance value");
} else if (distanceKm === 0) {
  deliveryFee = 0; // Free pickup / no delivery needed
} else if (distanceKm <= 5) {
  deliveryFee = 25;
} else if (distanceKm <= 15) {
  deliveryFee = 50;
} else {
  deliveryFee = 100;
}

console.log("\n=== 2. Delivery Rule ===");
console.log(`Distance: ${distanceKm} km -> Delivery Fee: ${deliveryFee} THB`);


// =============================================================================
// 3. Cart total
// Description: Iterates through an array of item prices using a loop to sum up the total.
// AI Log: Prompted AI to calculate the total price by looping over an array of item numbers.
// =============================================================================
const cartPrices = [120, 250, 45, 99, 310];
let totalCartSum = 0;

for (let i = 0; i < cartPrices.length; i++) {
  totalCartSum += cartPrices[i];
}

console.log("\n=== 3. Cart Total ===");
console.log(`Prices in Cart: [${cartPrices.join(", ")}]`);
console.log(`Cart Total: ${totalCartSum} THB`);


// =============================================================================
// 4. Discount function
// Description: Reusable function to calculate price after applying a percentage discount.
// AI Log: Prompted AI to define and demonstrate a reusable percentage discount function.
// =============================================================================
function applyDiscount(originalPrice, discountPercent) {
  if (discountPercent < 0 || discountPercent > 100) {
    return originalPrice;
  }
  const discountAmount = (originalPrice * discountPercent) / 100;
  return originalPrice - discountAmount;
}

console.log("\n=== 4. Discount Function ===");
// Reused call #1
const purchase1 = applyDiscount(1000, 10);
console.log(`1000 with 10% discount: ${purchase1} THB`);

// Reused call #2
const purchase2 = applyDiscount(500, 25);
console.log(`500 with 25% discount: ${purchase2} THB`);


// =============================================================================
// 5. Product object
// Description: Builds an array of product objects and prints each item's name and price.
// AI Log: Prompted AI to construct an array of product objects and iterate to print details.
// =============================================================================
const productCatalog = [
  { name: "Mechanical Keyboard", price: 2190 },
  { name: "Wireless Mouse", price: 890 },
  { name: "Desk Mat", price: 350 },
  { name: "USB-C Hub", price: 1150 }
];

console.log("\n=== 5. Product Object ===");
productCatalog.forEach(product => {
  console.log(`Item: ${product.name.padEnd(20)} | Price: ${product.price} THB`);
});
