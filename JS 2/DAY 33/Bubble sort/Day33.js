// Bubble sort

// for ascending order
let arr=[45,65,-1,24,0,56,43,1]
for(let i=0;i<arr.length-1;i++){
    let swapped=true
    for(let j=0;j<arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
            swapped=false
        }
    }
    if(swapped){
        break
    }
}
console.log(arr)




// for descending order

let arr1=[45,65,-1,24,0,56,43,1]
for(let i=0;i<arr1.length-1;i++){
    let swapped=true
    for(let j=0;j<arr1.length-1-i;j++){
        if(arr1[j]<arr1[j+1]){
            let temp=arr1[j]
            arr1[j]=arr1[j+1]
            arr1[j+1]=temp
            swapped=false
        }
    }
    if(swapped){
        break
    }
}
console.log(arr1)