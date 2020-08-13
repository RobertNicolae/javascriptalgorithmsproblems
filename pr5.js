
let numbers = [7, 6, 1, 2, 8];
let indicePrimulPar = 0;
let indiceUltimulPar = 0;


// Caut indicele din numbers al primului numar par 

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        indicePrimulPar = i;
        break;
    }
}

// Caut indicele din numbers al ultimului numar par

for (i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] % 2 === 0) {
        indiceUltimulPar = i;
        break;

    }
}

// Calculez suma dintre primul si ultimul numar par, inclusiv
// In variabila suma voi retine consecutiv valorile calculate. Pentru inceput se va initializa cu 0.
let suma = 0;
for (i = indicePrimulPar; i <= indiceUltimulPar; i++){
    suma += numbers[i]
}



    console.log(suma);