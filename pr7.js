let numbers = [12, 10, 15, 6, 7, 10, 19, 14];
let indicePrimulImpar = 0;
let indiceUltimuImpar = 0;
let suma = 0;

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0 ) {
        indicePrimulImpar = i;
        break;
    }
}
for (i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] % 2 !== 0) {
        indiceUltimuImpar = i;
        break;
    }
}

for (i = indicePrimulImpar; i <= indiceUltimuImpar; i++) {
    suma += numbers[i];
}

console.log(suma);