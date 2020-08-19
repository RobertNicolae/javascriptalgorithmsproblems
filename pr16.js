let numbers = [5, 4, 3, 2, 1, 6, 7, 8, 9, 18];
let numerePare = [];
let numereImpare = [];
let newNumbers = [];

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        numerePare.push(numbers[i]);
    } else {
        numereImpare.push(numbers[i]);
    }
}



numerePare.sort((a, b) => a - b);
numereImpare.sort((a, b) => a - b);

newNumbers = [...numerePare, ...numereImpare];

console.log(newNumbers);