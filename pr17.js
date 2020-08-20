let candelsHeight = [4, 2, 4, 4];
let tallestCandels = [];
let max = Math.max(...candelsHeight);

for(i = 0; i < candelsHeight.length; i++) {
    
    if(candelsHeight[i] >= max) {
        tallestCandels.push(candelsHeight[i]);
    }
}

console.log(tallestCandels.length);



