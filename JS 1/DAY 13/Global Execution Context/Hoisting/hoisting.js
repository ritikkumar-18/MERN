// it is that state in which variable is declared after used

console.log(a)
var a=10

// another example

var a=20
function tool(){
    console.log(a)
    var a=30
}
tool()