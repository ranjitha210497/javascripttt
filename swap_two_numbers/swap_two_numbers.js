

// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// let a, b;
// r1.question("Enter first variable", function(answer) {
//     a = answer;
// })

// r1.question("Enter second variable", function(answer) {
//     b = answer;
// })

let a = 36;
let b = 56;
let temp = a;
a = b;
b = temp;

console.log(`First variable after swapping: ${a}`);
console.log(`Second variable after swapping: ${b}`);
