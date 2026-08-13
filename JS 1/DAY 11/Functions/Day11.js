// functions

function sayHello()
{
    console.log("hello Function");
}
sayHello();


// declaring parameters (a,b)

function add(a,b) // here (a,b) are parameters (variables are parameters)
{
    console.log(a+b)
}
add(10,10) // and here (10,10) are arguements (values are arguments)


// return  (if we simply write return it return undefined)

function multiply(x,y){
    return x*y  // and it return multiplication of x and y 
}
console.log(multiply(19,8)) 


// fuctional expression  (in which we can restore a function in a variable)

var a = function abc(name){
    console.log("ABC,",name)
    return true
}
a("DEF")