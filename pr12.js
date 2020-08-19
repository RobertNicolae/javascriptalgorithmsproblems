let numbers = [10, 20, 15, 7, 12];
let minMax = [];

let min = numbers[0], imin = 0;
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
        imin = i;
    }
}

let max = numbers[0], imax = 0;
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
        imax = i;
    }
}


for(let i = imax; i <= imin; i++) {
    minMax.push(numbers[i]);
}

minMax.sort((a, b) => a - b);
console.log(minMax);