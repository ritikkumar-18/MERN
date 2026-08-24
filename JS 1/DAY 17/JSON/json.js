// JSON

let arr1=[1,2,3,4,5]
let obj4={
    name:"R",
    age:22
}
// for arrays
let jsonarr=JSON.stringify(arr1)   // to convert in json in string
let original=JSON.parse(jsonarr)  // to convert in array
// for objects
let jsonobj=JSON.stringify(obj4)
let originaljson=JSON.parse(jsonobj)

console.log(arr1)
console.log(jsonarr)
console.log(original)
console.log(obj4)
console.log(jsonobj)
console.log(originaljson)

