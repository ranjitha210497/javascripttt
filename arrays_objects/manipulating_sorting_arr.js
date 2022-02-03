/*
    0 - Luke
    1 - Leia
    2 - Han
    3 - Chewie
*/

var characters = ['Luke', 'Leia', 'Han', 'Chewie'];
 console.log(characters)

 characters.splice(0, 1, 'Rey')
 console.log(characters)

 characters.splice(1, 2, 'Kylo')
 console.log(characters)

 characters.splice(1, 1, 'C3P0', 'R2D2')
 console.log(characters)

 function myFunction(str)
{
let extracted = str.slice(-3);
return extracted;
}

var res = myFunction('abscdefg');
console.log(res)