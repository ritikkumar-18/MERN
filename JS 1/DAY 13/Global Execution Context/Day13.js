// Global Execution Context  It is used to check how javascript works in background 

// using var
var GEC=10
console.log(GEC)

// using function

var demo=10
function abc(){
    console.log("hello")
}
abc()
console.log(demo)


// using let and const
 
var a=10
let b=20 // let and const go to temporal dead zone if they console before intialization and var shows undefined that's another difference in all of these
const c=30  // if console.log write before intialization of let and const it gives refernce error(TDZ) and var gives undefined
console.log(a)
console.log(b)
console.log(c)

// In javscript, the temporal dead zone (TDZ) is the specific state where a varibale is completely unreachable and accessible.
// Attempting to access a variable while it is trapped in the TDZ will instanlty throw a "Reference Error"