var zero = 0;
// Array of positive numbers

var positiveNumbers = [1, 2, 3];

// Array of negative numbers

var negativeNumbers = [-3, -2, -1];

// Concat function for combining arrays

var numbers = negativeNumbers.concat(zero, positiveNumbers); //printing the number line
console.log(numbers); //Output 1

var isEven = function(x) {
    // returns true if x is a multiple of 2
    var x = x;
    console.log(x);
    return (x%2 == 0) ? true : false
}

var numbers1 = [1,2,3,4,5,6,7,8,9,10];
console.log("isEven", numbers1.every(isEven));

numbers1.forEach(function(x) {
    var x = x;
    console.log(x, x%2 == 0)
})

// Sorting the elements in Array we use sort method
var numbers2 = [7, 9, 1, 3];
console.log(numbers2.sort());

function compare(a,b) {
    if(a < b) {
        return -1;
    }
    if(a > b) {
        return 1;
    }
    return 0;
}
console.log(compare(4,9));
console.log(numbers2.sort(compare));