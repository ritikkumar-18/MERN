// Swapping

// using third variable
var a = 10
var b = 20
var temp = a
a = b
b = temp
console.log(a)
console.log(b)

// without using third variable
var a1 = 10
var b1 = 20
a1 = a1 + b1
b1 = a1 - b1
a1 = a1 - b1
console.log(a1)
console.log(b1)

// Reverse an array without using inbuilt fucntion

let arr1 = [1,2,3,4,5,6]
let temp1 = [ ]
for(let i=arr1.length-1;i>=0;i--){
    temp1.push(arr1[i])
}
console.log(temp1)


// using two pointer
 let arr2 = [1,2,3,4,5]
 let start = 0
 let end = arr2.length-1
 while(start<end){
    let temp2=arr2[start]
    arr2[start]=arr2[end]
    arr2[end]=temp2
    start++
    end--
 }
 console.log(arr2)


