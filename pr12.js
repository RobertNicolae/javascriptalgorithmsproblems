let numbers = [10, 20, 15, 7, 12];
let minMax = [];

let min = numbers[0], imin = 0;
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
        imin = i;
    }
}

let max = numbers[0], imax = 0;
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
        imax = i;
    }
}

var mapped = numbers.map(function(el, i) {
    return { index: i, value: el.imax };
  })

  mapped.sort(function(a, b) {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  });
  
  // container for the resulting order
  var result = mapped.map(function(el){
    return numbers[el.index];
  });
    





console.log(numbers);