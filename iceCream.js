let flavours = [1, 4, 5, 3, 2];
let m = 4;
let a,b;


for (i = 0; i < flavours.length; i++) {
    for(j = i + 1; j < flavours.length; j++) {
        if(flavours[i] + flavours[j] === m) {
            a = i;
            b = j;
            break;
        }
    }   if(a !== undefined && b !== undefined ) {
        break;

    }
}

console.log(a, b);