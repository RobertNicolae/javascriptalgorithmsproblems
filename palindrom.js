function reverseString(str) {
    return str.split("").reverse().join("");
}
function ePalindrom(a, b) {
    return a === reverseString(b);
}

let cuvant = "capacc";

let primaJumatate = "";
let aDouaJumatate = "";

for(let i = 0; i <= Math.floor(cuvant.length / 2); i++) {
    primaJumatate += cuvant[i];
}

for(let i = Math.floor(cuvant.length / 2); i < cuvant.length; i++) {
    aDouaJumatate += cuvant[i];
}

console.log(ePalindrom(primaJumatate, aDouaJumatate));