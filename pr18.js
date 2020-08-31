let birdTypes = [1, 2, 3, 2, 3, 6];
let minimArr = [];
birdTypes.sort((a, b) => a - b);

for(let i = 0; birdTypes.length; i++) {
    
    if(birdTypes[i] === birdTypes[i+1]) {
        minimArr.push(birdTypes[i]);
    }

}

console.log(birdTypes);


