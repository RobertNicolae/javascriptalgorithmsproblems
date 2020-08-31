/**
 * Lista de angajati pana sa fie oferite promovarile
 *
 */
let angajati = [
    {
        nume: "Balanoiu Robert",
        experienta: 1,
        salariu: 4500,
        zileConcediu: 21
    },
    {
        nume: "Ionescu Cristian",
        experienta: 6,
        salariu: 30000,
        zileConcediu: 143
    },
    {
        nume: "Cioca Nicolae",
        experienta: 4,
        salariu: 2100,
        zileConcediu: 6
    },
    {
        nume: "Ion Paul",
        experienta: 6,
        salariu: 7900,
        zileConcediu: 30
    },
    {
        nume: "Balanoiu Nicolae",
        experienta: 3,
        salariu: 7000,
        zileConcediu: 24
    }
];

/**
 * Functie ce calculeaza valoarea unui procent dintr-un numar
 *
 * @param number
 * @param percent
 * @returns {number}
 */
let getPercentValue = (number, percent) => (percent / 100 * number);

/**
 * Functie ce realizeaza modificarile necesare primului caz din cerinta (promovare junior)
 *
 * @param angajat
 */
let modificareCazJunior = (angajat) => {
    angajat.salariu += getPercentValue(angajat.salariu, 15);
};

/**
 * Functie ce realizeaza modificarile necesare celui de-al doilea caz din cerinta (promovare middle)
 *
 * @param angajat
 */
let modificareCazMiddle = (angajat) => {
    angajat.salariu += getPercentValue(angajat.salariu, 23);
    angajat.zileConcediu += Math.ceil(angajat.zileConcediu / 4);
};

/**
 * Functie ce realizeaza modificarile necesare celui de-al treilea caz din cerinta (promovare senior)
 *
 * @param angajat
 */
let modificareCazSenior = (angajat) => {
    if (angajat.salariu < 10000) {
        angajat.salariu += getPercentValue(angajat.salariu, 10);
    } else {
        angajat.salariu += getPercentValue(angajat.salariu, 5);
        angajat.zileConcediu += 2;
    }
};

/**
 * Functia care alege, pentru un angajat trimis ca parametru, pentru ce caz va primi o promovare
 * in functie de anii lui de experienta, conform cerintei
 *
 * @param angajat
 */
let promoveazaAngajat = (angajat) => {
    if (angajat.experienta === 1) {
        modificareCazJunior(angajat);
    }
    if (angajat.experienta >= 2 && angajat.experienta <= 5) {
        modificareCazMiddle(angajat);
    }
    if (angajat.experienta > 5) {
        modificareCazSenior(angajat);
    }
}

/**
 * Pentru fiecare angajat, se ofera o promovare
 *
 */
angajati.forEach(function (angajat) {
    promoveazaAngajat(angajat);
});

/**
 * Se afiseaza lista de angajati cu promovarile efectuate
 *
 */
console.log(angajati);