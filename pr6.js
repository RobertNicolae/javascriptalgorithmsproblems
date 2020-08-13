/**
 * a[k] = a[0] + 30 x k/2 , pt orice k par 
    a[t] = a[0] + 10 + 30 x t/2
 */

function calculeazaNumar(p, k){
    let numar = p + 30*Math.floor(k/2);
    return (k %2 === 0) ? numar : numar + 10;
}

 let p = 9;
 let k = 10;

 console.log(calculeazaNumar(p, k));