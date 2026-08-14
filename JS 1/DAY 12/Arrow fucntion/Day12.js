// Arrow function
const sayHello=() =>{
    console.log("Hello arrow")
}
 sayHello()

// with parameters

const myfn=(name)=>{
console.log("Hello", name)
}
myfn("Ritik")

// with return
const myfn2=()=>{
    console.log("ok")
    return true
}
console.log(myfn2())

// if only one line is in fucntion then we can write like this

const fn=()=> console.log("ok")  // here we do not use curly bracket
fn()

const fn2= n => console.log(n)
fn2(10)


const fn3=a=>a**3
console.log(fn3(4))



