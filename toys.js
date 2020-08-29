let prices = [7, 2, 5, 1, 2];
let moneyToSpend = 7;
prices.sort((a, b) => a - b);
let maximCanAfford = [];

for(let i = 0; i < prices.length; i++) {
    if(moneyToSpend > prices[i]) {
        moneyToSpend -= prices[i];
        maximCanAfford.push(prices[i]);
    } 
}


console.log(maximCanAfford.length);

