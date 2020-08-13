let numbers = [1, 2, 6, 4, 5];
let difCresc = 1;
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] + difCresc === numbers[i + 1]) {
        console.log("Da");
        
    } else {
        console.log("nu");
        
    }
}