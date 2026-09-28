// Insertion sort
// for ascending order

 let arr=[23,4,-5,0,5,99,1,-6]
 function insertionsort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j>0;j--){
         let isSwapped=false
            if(arr[j]<arr[j-1]){
                let temp=arr[j]
                arr[j]=arr[j-1]
                arr[j-1]=temp
                isSwapped=true
            }
            if(isSwapped==false){
                break
            }
        }
    }
    return arr
 }

console.log(insertionsort(arr))