let actiuniPerZi = [7, 1, 12, 3, 5, 1, 4, 2];
const sumaInceput = 100;

let depozitActual = sumaInceput;
for(let i = 1; i <actiuniPerZi.length; i++) {
    if(actiuniPerZi[i] > actiuniPerZi[i-1]) {
        let numarActiuniCumparatIeri = Math.floor(depozitActual / actiuniPerZi[i-1]);
        let restBani = depozitActual % actiuniPerZi[i-1];
        let valoareActiuniVanduteAzi = numarActiuniCumparatIeri * actiuniPerZi[i];
        depozitActual = valoareActiuniVanduteAzi + restBani;
    }
}

console.log(depozitActual - sumaInceput);