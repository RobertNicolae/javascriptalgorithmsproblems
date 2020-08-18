let numbers = [7, 9, 4, 2, 1, 6, 5];

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        delete numbers[i];
    }
}

console.log(numbers);