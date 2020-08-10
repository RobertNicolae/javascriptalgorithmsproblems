let numbers = [15000, 150, 120, 750];
let munte = [];
if(numbers[0] < numbers[1] || numbers[0] > numbers[1]){
    munte.push(true);
} else {
    munte.push(false);
}
for(i = 1; i < numbers.length - 1; i++) {
    if(numbers[i] < numbers[i-1] && numbers[i] < numbers[i+1]) {
        munte.push(true);
    } else if(numbers[i] > numbers[i-1] && numbers[i] > numbers[i+1]) {
        munte.push(true);
    } else {
        munte.push(false);
    }
}

if(numbers[numbers.length - 1] < numbers[numbers.length - 2] || numbers[numbers.length - 1] > numbers[numbers.length - 2]){
    munte.push(true);
} else {
    munte.push(false);
}

console.log(munte);