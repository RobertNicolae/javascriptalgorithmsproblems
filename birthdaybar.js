function getSumOfArray(myArray) {
    let sum = 0;
    myArray.forEach(function (piece) {
        sum += piece;
    });

    return sum;
}

let bar = [1, 2, 1, 3, 2];
let pieceBar = [];
const d = 3;
const m = 2;

let noWays = 0;

for (let k = 0; k < bar.length - (m - 1); k++) {
    pieceBar.push(bar[k]);
    for (let i = k + 1; i <= k + (m - 1); i++) {
        pieceBar.push(bar[i]);
    }

    let sum = getSumOfArray(pieceBar);
    if (sum === d) {
        noWays++;
    }
    pieceBar = [];
}

console.log(noWays);
