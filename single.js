let numbers = [0, 1, 99, 1, 0, 1];
let countNr = 1;
let minCount = numbers.length;
let minNumber = numbers[0];

numbers.sort((a, b) => a - b);


for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] === numbers[i - 1]) {
        countNr++;
    } else if (countNr < minCount) {
        minCount = countNr;
        minNumber = numbers[i - 1];
    }

    if (numbers[i] !== numbers[i - 1]) {
        countNr = 1;
    }
}

if (countNr < minCount) {
    minCount = countNr;
    minNumber = numbers[numbers.length - 1];
}

console.log(minNumber);

