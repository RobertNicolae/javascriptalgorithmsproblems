let numbers = [1, 2, 2, 1, 3];
let countNr = 1;
let minCount = 1;
let minNumber = numbers[0];

numbers.sort((a, b) => a - b);


for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] === numbers[i-1]) {
        countNr++;
    } else if (countNr === minCount) {
        minCount = countNr;
        minNumber = numbers[i-1];
    } if (numbers[i] !== numbers[i-1]) {
        countNr = 1;
    }
}

console.log(minNumber);

