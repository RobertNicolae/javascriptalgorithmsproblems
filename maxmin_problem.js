//https://www.hackerrank.com/challenges/angry-children/problem

let numbers = [10, 100, 300, 200, 1000, 20, 30];
let k = 3

//Sort in ascendent order
numbers.sort((a, b) => a - b);

//Initialize minDifference value with the MAX possible value for numbers in JS
let minDifference = Number.MAX_SAFE_INTEGER;

//Search for the minimum difference who respect the requirements
//We will use "two pointers technique"
for (let i = 0; i <= numbers.length - k; ++i) {
    minDifference = Math.min(minDifference, numbers[k + i - 1] - numbers[i]);
}

//Print the result
console.log(minDifference);
