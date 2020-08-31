let n = 7;

let primeNumbers = [];
let countNrPrime = 0;

primeNumbers[1] = false;
for (let i = 2; i <= n; i++) {
    if (primeNumbers[i] === undefined) {
        primeNumbers[i] = true;
        countNrPrime++;
        for (let j = 2; i * j <= n; j++) {
            primeNumbers[i * j] = false;
        }
    }
}

console.log(countNrPrime);