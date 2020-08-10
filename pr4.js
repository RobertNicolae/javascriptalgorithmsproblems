function procentDiscount(originalPrice, discountPrice) {
    return 100 * (1 - discountPrice / originalPrice);
}

let beforeDiscount = [8, 15, 200];
let afterDiscount = [4, 6, 180];
let bestPercent = procentDiscount(beforeDiscount[0], afterDiscount[0]);
let indice = 0;

for (i = 0; i < beforeDiscount.length; i++) {
    let actualProductPercent = procentDiscount(beforeDiscount[i], afterDiscount[i])
    if (bestPercent < actualProductPercent) {
        bestPercent = actualProductPercent;
        indice = i;
    }
}

console.log(indice);