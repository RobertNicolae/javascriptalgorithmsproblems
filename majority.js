let numbers = [3,3,1,1,1,3,3];
let countElement = 1;
let nrMaxCount = 1;
let maxNumber = numbers[0];


numbers.sort((a, b) => a - b);

for(i = 1; i < numbers.length; i++) {
    if (numbers[i+1] === numbers[i]){
        countElement++;
    } else if(countElement > nrMaxCount){
        nrMaxCount = countElement;
        maxNumber = numbers[i-1];  
    } if(numbers[i-1] !== numbers[i]) {
        countElement = 1;
    }
};

console.log(maxNumber);

                                                             