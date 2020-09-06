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

//Subpunctul a

parcels.forEach(function (parcel) {
    if(parcel.type === 0) {
        queue.push(parcel.awb);
    }
})
parcels.forEach(function (parcel) {
    if(parcel.type !== 0) {
        queue.push(parcel.awb);
    }
})

while(queue.isEmpty() === false) {
    queue.pop();
}





console.log(queue);

//End subpunctul a


//Subpunctul b
let totalSum = 0;
parcels.forEach(function( parcel) {
    if(parcel.price < 3500 && parcel.type === 0) {
        totalSum += parcel.price
    }
})

console.log(totalSum);

//End subpunctul b


//Subpunctul c
let k = 4;
let livrateToday = [];
parcels.forEach(function (parcel) {
    if(parcel.type === 1) {
        livrateToday.push(parcel.awb);
    } else if(parcel.type === 0 && parcel.price < 3500) {
        livrateToday.push(parcel.awb);
    }
})

console.log(livrateToday);


//End subpunctul c
