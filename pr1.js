
let toateNumereleSuntP
are = true;
let numbers = [2, 4, 2, 8, 10];
for(i = 0; i < numbers.length; i++) {
     if(numbers[i] %2 !== 0) {
         toateNumereleSuntPare = false;
         break;
     }
} 

if(toateNumereleSuntPare === true) {
    console.log("DA");
} else {
    console.log("NU");
}