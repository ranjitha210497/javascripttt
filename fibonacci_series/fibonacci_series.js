let a = 200;
let first_term = 0, second_term = 1;
let next_term;
console.log(first_term);
console.log(second_term);
for(i=0; i<a; i++) {
    next_term= first_term + second_term;
    console.log(next_term)
    first_term = second_term;
    second_term = next_term;
}