let a = 46;
let isPrime = true
for(let i =2; i<a; i++) {
    if(a%i == 0){
        isPrime = false;
        break;
    }
}

if(isPrime) {
    console.log(`${a} is prime`);
}
else  console.log(`${a} is not prime`);