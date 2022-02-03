// var num = 1;
// console.log(num); //1

// var x;
// console.log(x); //undefined

// x = 5;
// console.log(x); //5

// var number;
// console.log(number); //undefined

// var name = "xyz";
// console.log(name); //xyz

// var count = 10;
// console.log(count); //10

// var flag = false;
// console.log(flag); //false

// var rate = 1.2;
// console.log(rate); //1.2

// var x= 3;
// var y = 1.1;
// console.log((x + y) * (x - y))

// var z = 9;
// console.log(Math.sqrt(z))

// var mid = 25;
// var high = 50;
// var current = 13;
// var low = 1;
// if(current < mid){
//     mid = (current - low) / 2
// }
// console.log(mid)


// var sum = 0;
// var number = 1;
// while(number < 11){
//     sum += number;
//     ++number;
// }
// console.log(number);


// var sum = 0;
// for (var number = 1; number < 11; number++) {
//     sum += number;
// }
// console.log(sum);


function factorial(number) {
    var product = 1;
    for(var i = number; i >= 1; i--) {
        product *= i;
    }
    return product;
}
console.log(factorial(3));