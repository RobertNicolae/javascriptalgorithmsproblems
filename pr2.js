let numbers = [8, 7, 9, 2, 5];
let min = numbers[0], imin = 0;
for(i = 0; i < numbers.length; i++){
    if(numbers[i] < min) {
        min = numbers[i];
        imin = i;
    }
}

let max = numbers[0], imax = 0;
for(i = 0; i < numbers.length; i++){
    if(numbers[i] > max) {
        max = numbers[i];
        imax = i;
    }
}

console.log(imin, imax);