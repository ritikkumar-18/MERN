// Print Subarrays
function printsubarray(arr){
    for(let i=0;i<=arr.length;i++){
        let temp=[]
        for(let j=i;j<=arr.length;j++){
            temp.push(arr[j])
            console.log(temp)
        }
    }
}
printsubarray([1,2,3,4,5])



// return sub array
 function returnallSubarrays(arr){
    let ans=[]
    for(let i=0;i<arr.length;i++){
        let temp=[]
        for(let j=i;j<arr.length;j++){

            // using slice inbuilt function
            // let newArr=arr.slice(i,j+1)
            // ans.push(newArr)

            // using spread operator
            // temp.push(arr[j])
            // ans.push([...temp])

            // // using JSON
            // temp.push(arr[j])
            // let str=JSON.stringify(temp)
            // let newstr=JSON.parse(str)
            // ans.push(newstr)

            // // using structuredClone
            temp.push(arr[j])
            ans.push(structuredClone(temp))


        }
        
    }
    return ans

 }

 console.log(returnallSubarrays([1,2,3,4,5]))

// retun subarrays with no inbuilt functions

function returnSubArrayWithnofunction(arr){
    let ans=[]
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            let temp=[]
            for(let k=i;k<=j;k++){
                temp.push(arr[k])
            }
            ans.push(temp)
        }
    }
    return ans
}
console.log(returnSubArrayWithnofunction([1,2,3,4,5]))