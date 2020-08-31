function pushInQueue(queue, x) {
    queue.push(x);
}

function popQueue(queue) {
    let x = queue[0];

    queue = queue.slice(1, queue.length);

    return x;
}

let coada = [];
pushInQueue(coada, 6);
pushInQueue(coada, 0);
pushInQueue(coada, 9);

let x = popQueue(coada) + 2;

console.log(x);
