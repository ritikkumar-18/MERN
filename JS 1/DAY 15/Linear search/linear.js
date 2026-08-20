// Linear Search
// for first occurence

let arr3 = [1,2,-10,7,89,87]
let t = 7
function linear(){
    for(let i=0;i<arr3.length;i++){
        if(arr3[i]==t){
            return i
        }

    }
    return -1
}
console.log(linear(arr3,t))

// for last occurance linear search

let arr4 = [1,2,3,4,5,5,6,7,7,7,]
let target = 7
function linearLastOccurance(){
    for(let i=arr4.length-1;i>=0;i--){
        if(arr4[i]==target){
            return i
        }
    }
    return -1
}
console.log(linearLastOccurance(arr4,target))


// for all occurance in linear search

let arr5 = [1,2,3,5,6,6,6,6,7,8,9,7,65]
let target2 = 6
let newarr = []
function linearAllOccurance(){
for (let i=0;i<arr5.length;i++){
    if(arr5[i]==target2){
        newarr.push(arr5[i])
    }
}
return newarr
}
console.log(linearAllOccurance())

