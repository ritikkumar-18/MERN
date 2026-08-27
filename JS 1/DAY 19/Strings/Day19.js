// strings

let str='hello world'
console.log(str.at(0)) // returns the stings's element present at index 0
console.log(str.charAt(1)) // returns the stings's element present at index 1
console.log(str.length) // gives total length of string 
console.log(str.concat(" asdfgdf")) // concate the stings 
console.log(str + " hello")  // also use to caoncate the strings
console.log(str.endsWith('ld')) // return the true or false if the given string is present in last of declared string
console.log(str.startsWith("hell")) // return the true or false if the given string is present in start of declared string
console.log(str.includes("o")) // return the true or false if the given character is present in declared string
console.log(str.indexOf("l",4)) // returns the index of given character and give index from where to search that element
console.log(str.slice(3)) // returns the strings after the index no. 3
console.log(str.repeat(4))  // repeat string 4 times
console.log(str.replace("e","y"))  // it replace only single character in string
console.log(str.replaceAll("e","y"))  // it replace all character in string

let msg='   how are you    '

console.log(msg.trimStart()) // it removes spaces from starting
console.log(msg.trimEnd()) // it removes spaces from ending