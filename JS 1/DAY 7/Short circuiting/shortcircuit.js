// short circuiting logic

true && console.log("ok")
false && console.log("ok2")

true || console.log("ok3")
false || console.log("ok4")

//  short circuitng Example

var n=22
n%2==0 && console.log("Even")
true && true && console.log("ok7")


// some more examples
console.log(false && "hell0"||"world")
console.log(10 && 20)
console.log(0 || 10)
console.log(null || undefined)
console.log(null ?? "ok")
console.log(null ?? "default")
console.log(null ?? undefined ?? "React")
console.log("" || "Javascript")

