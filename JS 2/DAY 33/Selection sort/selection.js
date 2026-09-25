// selection sort


// for ascending order

let arr=[23,43,0,-1,34,2,9,-45]
for(let i=0;i<arr.length-1;i++){
    let min=i
    for(let j=i;j<arr.length;j++){
        if(arr[j]<arr[min]){
            min=j
        }
    }
    if(i!=min){
    let temp=arr[i]
    arr[i]=arr[min]
    arr[min]=temp
    }
}
console.log(arr)


// for descending order

let arr1=[23,43,0,-1,34,2,9,-45]
for(let i=0;i<arr1.length-1;i++){
    let min=i
    for(let j=i;j<arr1.length;j++){
        if(arr1[j]>arr1[min]){
            min=j
        }
    }
    if(i!==min){
    let temp=arr1[i]
    arr1[i]=arr1[min]
    arr1[min]=temp
    }
}
console.log(arr1)