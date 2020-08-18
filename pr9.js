let numbers = [1, 2, 3, 2, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    let elementCurent = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
        if (elementCurent === numbers[j]) {
            delete numbers[j];
        }
    }
}

console.log(numbers);