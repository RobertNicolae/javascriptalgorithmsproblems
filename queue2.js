let peopleTemperature = [36, 37.2, 36.9, 39.1, 38.5, 38, 37.5];

x = 38.5;
let isolate = [];

function pushToQueue(queue, numar) {
    queue.push(numar);
}

function popFromQueue(queue) {
    queue.shift();
}

function frontShow(queue) {
    return queue[0];
}

function isEmpty(queue) {
    return queue.length === 0;
}


while (isEmpty(peopleTemperature) === false) {
    if(parseFloat(frontShow(peopleTemperature)) < parseFloat(x)) {
        popFromQueue(peopleTemperature);
    } else {
        isolate.push(frontShow(peopleTemperature));
    }
}

console.log(isolate.length);
