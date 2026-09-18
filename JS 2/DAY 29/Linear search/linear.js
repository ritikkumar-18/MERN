// linear search

let arr=[1,2,34,-99,87,5,1]
let target=1
function linearsearchboolean(arr,target){
    for(let item of arr){

        if(item==target)
            return true
    }
    return false
}
console.log(linearsearchboolean(arr,target))

// for first occurence

function linearsearchfirstoccurence(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i
        }
    }
    return -1

}
console.log(linearsearchfirstoccurence(arr,target))



// for last occurence
function linearsearchlastoccurence(arr,target){
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]==target){
            return i
        }
    }
    return -1

}
console.log(linearsearchlastoccurence(arr,target))



let obj=[
    {
        age:32,
        name:"A"
    },
    {
        age:30,
        name:"B"
    },
    {
        age:99,
        name:"C"
    },
    {
        age:34,
        name:"D"
    }
]
let max=obj[0]
function age(obj){
for(let item of obj){
    if(item.age>max.age){
        max=item
    }
}
return{
    name:max.name
}
}
console.log(age(obj))




// first repeating number

function repeating(arr){

    for(let i=1;i<arr.length;i++){
        if(!(arr.indexOf(arr[i])===i)){
            return arr[i]

        }

    }
    return null
    

}
console.log(repeating([1,2,3,4,2,5]))



// find element greater than x
let arr1=[1,2,45,4,5,4,3]
let x=23
function linear(arr1){
    for(let item of arr1){
        if(item>x){
            return item
        }
    }
    return -1
}
console.log(linear(arr1,x))


// nearest number of the given target
let arr2 = [1, 2, 3, 4, 54, 23, 45];
let target1 = 55;
let nearest = arr2[0];
let diff = Math.abs(arr2[0] - target1);

for (let i = 1; i < arr2.length; i++) {

    let currentDiff = Math.abs(arr2[i] - target1);
    if (currentDiff < diff) {
        diff = currentDiff;
        nearest = arr2[i];
    }
}
console.log(nearest);