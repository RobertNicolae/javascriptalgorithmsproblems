let numbers = [12, 7, 6, 10, 5];

let numerePare = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        numerePare.push(numbers[i]);
    }
}

let toateNumerelePareSuntOrdonate = true;
for (let i = 0; i < numerePare.length - 1; i++) {
    if (numerePare[i] > numerePare[i + 1]) {
        toateNumerelePareSuntOrdonate = false;
        break;
    }
}

if (toateNumerelePareSuntOrdonate) {
    console.log("DA");
} else {
    console.log("NU");
}
