//loops in arrays

let arr=[1,2,3,4,5,6,67,7,8]
// in straight order using for loop
 for(let i=0;i<arr.length;i++){
     console.log(arr[i])
 }

 // in reverse order
for (let j=arr.length-1;j>=0;j--){
    console.log(arr[j])
}

// in while loops

// in straight order
let i=0
while(i<arr.length){
    console.log(arr[i])
    i++
}

// in reverse order
let j= arr.length - 1
while(j>=0){
    console.log(arr[j])
    j--
}


// for of loop

for(let item of arr){
    console.log(item)
}