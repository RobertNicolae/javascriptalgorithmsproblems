let numbers = [8, 2, 9, 4, 5, 7];
let newNumbers = [];
let firstHalf = [];
let secondHalf = [];


for(let i = 0; i < Math.floor(numbers.length / 2); i++) {
    firstHalf.push(numbers[i]);
}

for(let i = Math.floor(numbers.length / 2); i < numbers.length; i++) {
    secondHalf.push(numbers[i]);
}


firstHalf.sort((a,b) => a - b);
secondHalf.sort((a,b) => b - a);

newNumbers.push(firstHalf, secondHalf);
console.log(newNumbers);




