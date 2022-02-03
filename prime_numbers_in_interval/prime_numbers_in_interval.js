let lowest = 12;
let highest = 56;
console.log(`The prime numbers between ${lowest} and ${highest} are`)
for(let i = lowest; i < highest; i++){
    let flag = 0;
    for(let j = 2; j < i; j++){
        if(i%j == 0){
            flag = 1;
            break;
        }
    }

    if(i> 1 && flag == 0){
        console.log(i);
    }
}