class Queue {
    constructor() {
        this._elements = [];
    }

    front() {
        return this._elements[0];
    }

    push(element) {
        this._elements.push(element);
    }

    pop() {
        this._elements.shift();
    }

    isEmpty() {
        return this._elements.length === 0;
    }
}

let parcels = [
    {
        awb: "235GTR435BV4",
        price: 6000,
        type: 1
    },
    {
        awb: "5435TR435BV4",
        price: 3470,
        type: 0
    },
    {
        awb: "2342RTR435BV4",
        price: 8900,
        type: 0
    },
    {
        awb: "235GTC2342BV4",
        price: 1425,
        type: 1
    },
    {
        awb: "935GTR435MP7",
        price: 785,
        type: 0
    }
];

let queue = new Queue();

parcels.sort((a, b) => a.type - b.type);
parcels.forEach((parcel) => {
    queue.push(parcel);
});

while (!queue.isEmpty()) {
    console.log(queue.front().awb);
    queue.pop();
}

let totalSum = 0;
parcels.forEach((parcel) => {
    if (parcel.type === 0 && parcel.price < 3500) {
        totalSum += parcel.price;
    }
});
console.log(totalSum);

let k = 4;

parcels.sort((a, b) => {
    if (a.type === 1 && a.type === b.type) {
        return b.price - a.price;
    } else if (a.type === 0 && a.type === b.type) {
        return a.price - b.price;
    }
    return b.type - a.type;
});

while (k) {
    console.log(parcels.shift().awb);

    k--;
}