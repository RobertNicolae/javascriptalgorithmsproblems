let numbers = [1, -41, 8, -3, 4, 8, 0];

let negative = [];
let nule = [];
let pozitive = [];

numbers.forEach(function(number){
    if(number > 0) {
        pozitive.push(number);
    } else if(number < 0) {
        negative.push(number);
    } else {
        nule.push(number);
    }
});

negative.sort((a, b) => (b - a));
pozitive.sort((a, b) => (b - a));

numbers = [...negative, ...nule, ...pozitive];

console.log(numbers);