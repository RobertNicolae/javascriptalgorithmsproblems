
let coada = [3, 3];

function pushToQueue(queue, numar) {
    queue.push(numar);
}

//pushToQueue(coada, 2);


function popFromQueue(queue) {
    queue.pop(queue);
}

//popFromQueue(coada);

function frontShow(queue) {
    return queue[0];
}

console.log(frontShow(coada));

function isEmpty(queue) {
    return queue.length === 0;
}

if (isEmpty(coada)) {
    console.log("DA");
} else {
    console.log("nu");
}

//console.log(coada);

