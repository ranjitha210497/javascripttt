var characters = ['Luke', 'Leia', 'Han', 'Chewie'];

console.log(characters)
console.log(characters.length)


characters.push('anakin')
characters.push('Obiwan')
console.log(characters)
console.log(characters[characters.length - 1])

characters.pop();

console.log(characters)
console.log(characters.length)
console.log(characters[characters.length - 1])

characters.unshift('C3P0')
console.log("charscters",characters)


let rem = characters.shift()
console.log("charscters",characters)