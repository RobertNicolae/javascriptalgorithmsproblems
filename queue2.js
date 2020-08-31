let peopleTemperature = [36, 37.2, 36.9, 39.1, 38.5, 38, 37.5];
let isolatePeople = [];
x = 38.5;

function pushToQueue(queue, numar) {
    queue.push(numar);
}

function popFromQueue(queue) {
    queue.pop(queue);
}

function frontShow(queue) {
    return queue[0];
}

function isEmpty(queue) {
    return queue.length === 0;
}

for(let i = 0; i < peopleTemperature.length; i++) {
    if (peopleTemperature[i] > x) {
        pushToQueue(isolatePeople);
    }
}

console.log(isolatePeople.length);