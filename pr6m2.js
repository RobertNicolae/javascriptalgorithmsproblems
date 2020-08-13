let p = 9, k = 10;
let numbers = [p];

for(i = 1; i <= k; i++){
    if(i %2 === 0){
        numbers.push(numbers[i-1] + 20);
    } else {
        numbers.push(numbers[i-1] + 10);
    }
}

console.log(numbers[k]);