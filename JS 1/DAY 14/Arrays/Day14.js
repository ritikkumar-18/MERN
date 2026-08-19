// // Arrays

let arr =[1,2,3,4,5,]
console.log(arr)
 console.log(arr.length) // to find array's length
 console.log(arr[3]) // to print value that present at that index number

// // array's methods
// // push method
 arr.push(17)  // it add element in last of the array
 console.log(arr)

// //pop method
 arr.pop()  // it removes last element from the array
 console.log(arr)

// // shift method
 arr.shift()   // it removes element from starting of the array
 console.log(arr)

//  // unshift method
 arr.unshift(-1,-2,-3) // it add elements in starting of the array
 console.log(arr)

 // slice method
 let ans=arr.slice(3,7)  // it creates a copy of the array and takes starting and ending point and it also takes negative index but array doesn't take negative index
 let anss=arr.slice(-2)
 console.log(anss)

// splice method
let spl=arr.splice(2,3)  // it deletes from array while taking starting point and a delete count (it starts count from last index which is starting point and till to count deletes all elements )
console.log(spl)
 console.log(arr)

// array concatenation method
const cat=arr.concat([7,8,9,10,8,9,5,8]) // it concat two arrays
const cat1=arr.includes(34) // it checks this element is present in array or not 
const cat2=arr.indexOf(3)  // it checks the index of the number
const cat3=arr.lastIndexOf(2) // it checks last index of the number
const cat4=['Ritik','Kumar'].join(" ") // it joins between two elements
const cat5=arr.join('-')
arr.reverse()  // to reverse the array 


console.log(cat)
console.log(cat1)
console.log(cat2)
console.log(cat3)
console.log(cat4)
console.log(cat5)
console.log(arr)



