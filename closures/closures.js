// Example 1
// const add = (function () {
//     let counter = 0;
//     return function () { console.log(counter); counter += 1;  return counter; }
//   })();
  
//   add();
//   add();
//   add();


// Example2
// function User(name){
//     var displayName = function(greeting){
//      console.log(greeting+' '+name);
//     }
//   return displayName;
//   }
//   var myFunc = User('Raj');console.log(myFunc);
//   myFunc('Welcome ') //Output: Welcome Raj
//   myFunc('Hello '); 



// Example3
const myName = 'Kyle';
function printName() {
    console.log(myName);
}
printName();