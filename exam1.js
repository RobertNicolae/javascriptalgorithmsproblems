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



//End subpunctul a


//Subpunctul b



//End subpunctul b


//Subpunctul c
let k = 4;


//End subpunctul c
