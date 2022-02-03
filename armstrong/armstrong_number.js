let original = 136;
let a = original;
let b = 0;
let remainder;
let numbers = [];
let length = 1
while(a > 10) {
    remainder = a % 10;
    numbers.push(remainder);
    length++;
    a = parseInt(a / 10);
}
for(let i =0;i<numbers.length;i++) {
    b+=numbers[i]**length;
}
b = b+a;

if(original == b) {
    console.log(`${original} is armstrong number`);
}
else console.log(`${original} is not armstrong number`);