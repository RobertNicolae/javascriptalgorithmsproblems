function checkIfArrayHasDistinctNumbers(numbersList) {
    for (let i = 0; i < numbersList.length; i++) {
        let currentNumberToCheck = numbersList[i];

        // Daca am gasit un numar egal cu currentNumberToCheck, de la pozitia i + 1, returnez false
        // Daca este gasit un element de la pozitia i+1 pana la final, se va returna indexul lui de catre indexOf
        // Daca nu mai este gasit un element, se va returna -1 de catre indexOf
        let indexOfDuplicateNumber = numbersList.indexOf(currentNumberToCheck, i + 1);
        if (indexOfDuplicateNumber !== -1) {
            return false;
        }
    }

    return true;
}

function checkIfNumberHasDistinctDigits(number) {
    let digitsList = [];
    while (number !== 0) {
        digitsList.push(number % 10); //adaug in digitsList ultima cifra din number
        number = Math.floor(number / 10); //sterg ultima cifra din number
    }

    return checkIfArrayHasDistinctNumbers(digitsList);
}

let numbers = [84, 60, 102, 24, 6];

let allNumbersHaveDistinctDigits = true;
for (let i = 0; i < numbers.length; i++) {
    if (checkIfNumberHasDistinctDigits(numbers[i]) === false) {
        allNumbersHaveDistinctDigits = false;
        break;
    }
}

if (allNumbersHaveDistinctDigits) {
    console.log("YES");
} else {
    console.log("NO");
}