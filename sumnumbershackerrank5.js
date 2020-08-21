let numbers = [1, 3, 5, 7, 9];
let sums = [];

let totalNumbersSum = 0;
numbers.forEach(function (number) {
    totalNumbersSum += number;
});

numbers.forEach(function (number) {
    sums.push(totalNumbersSum - number);
})

let minSum = Math.min(...sums);
let maxSum = Math.max(...sums);

console.log(minSum, maxSum);