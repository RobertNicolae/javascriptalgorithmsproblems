productsPrice = [2, 4, 6];
k = productsPrice[2];

let totalBill = 0;
productsPrice.forEach(function(productPrice) {
    totalBill += productPrice;
});

let halfBill = totalBill / 2;
let howMuchINeedToRefund = halfBill - (k/2);

console.log(howMuchINeedToRefund);