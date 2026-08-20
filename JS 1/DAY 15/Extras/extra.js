let arr = [1,2,3,4,5]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])

// destructuring

const[a,b,c,d] = arr
console.log(a)
console.log(b)
console.log(c)
console.log(d)


// flat function  // it removes nested arrays 
let arr1 = [[1,2,3],[4,5,6],[7,8,9,[10,11,12,[13,14,15]]]]
const newarr = arr1.flat(Infinity)
console.log(arr1)
console.log(newarr)
