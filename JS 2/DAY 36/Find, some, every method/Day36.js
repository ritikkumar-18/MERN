// find method  it returns the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

let arr=[1,2,3,4,5,6,7,8,9];
let result=arr.find((value)=>{
    return value>5;
})
console.log(result);


// every method it tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

let arr1=[1,2,3,4,5,6,7,8,9]; 
const result1=arr1.every((value,index)=>{
    return value>0;
})
console.log(result1);

// some method it tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

let arr2=[1,2,3,4,5,6,7,8,9];
const result2=arr2.some((value,index)=>{
    return value<0;
}   )
console.log(result2);


//question
// double number using map
let arr3=[1,2,3,4,5,6,7,8,9];
const val=arr3.map((value,index)=>{
    return value*2 
})
console.log(val);

// keep only even numebr using filter
let arr4=[1,2,3,4,5,6,7,8,9];
const val1=arr4.filter((value,index)=>{
    return value%2==0
})
console.log(val1);

// add all number using reduce
let arr5=[1,2,3,4,5,6,7,8,9];
const val2=arr5.reduce((value,index)=>{
    return value+index
},0)
console.log(val2)


// return the first number greater than 5 using find
let arr6=[1,2,3,4,5,6,7,8,9];
const val3=arr6.find((value,index)=>{
    return value>5
})
console.log(val3);

// check whether array has any negative number using some
let arr7=[1,2,3,4,5,6,7,8,9];
const val4=arr7.some((value,index)=>{
    return value<0
})
console.log(val4);

//check whether stirng is empty or not using every
let str=["hello","world",""];
const val5=str.every((value,index)=>{
    return value!=""
})
console.log(val5);

//count how many time each item appears in the array using reduce
let arr8=["apple","banana","apple","orange","banana","apple"];
const val6=arr8.reduce((value,item)=>{
    if(value[item]){
        value[item]++;
    }else{
        value[item]=1;
    }
    return value;
},{})
console.log(val6)

// check whether all numbers are sorted in ascending order using every

let arr9=[1,2,3,4,5,6,7,8,9];
const val7=arr9.every((value,index)=>{
    if(index==0){
        return true;
    }   
    return value>=arr9[index-1];
})
console.log(val7);

// square only the odd number
let arr10=[1,2,3,4,5,6,7,8,9];
const val8=arr10.filter((item)=>item%2!==0).map((item)=>item**2);
console.log(val8); 

// add up the price of in stock products using fitler and reduce

let arr11=[
{ name: "Pen", price: 10, inStock: true },
{ name: "Book", price: 50, inStock: false },
{ name: "Bag", price: 30, inStock: true }
]
const val9=arr11.filter((item)=>item.inStock).reduce((value,item)=>value+item.price,0);
console.log(val9);

// price* quantity of in stock products using reduce and map
let arr12=[
{ name: "Pen", price: 100, quantity: 2 },
{ name: "Book", price: 50, quantity: 3 },]
const val10=arr12.map((item)=>item.price*item.quantity).reduce((value,item)=>value+item,0);
console.log(val10);

// Check whether everyone passed (>= 40) and whether anyone scored 100 using some and every method
let arr13=[30,40,50,60,70,80,90,100];
let ans={
    allpassed:arr13.every((item)=>item>=40),
    anyPerfect:arr13.some((item)=>item==100)
}
console.log(ans);

// build the full names of active users using filter and map
let arr14=[
    { firstName: "John", lastName: "Doe", isActive: true },
    { firstName: "Jane", lastName: "Smith", isActive: false },
    {firstName: "Bob", lastName: "Johnson", isActive: true }
]
const val11=arr14.filter((item)=>item.isActive).map((item)=>`${item.firstName} ${item.lastName}`);
console.log(val11);

// find order #2 and return the names of its items using find and map
let arr15=[
    { orderId: 1, items: ["apple", "banana"] },
    { orderId: 2, items: ["orange", "grape"] },
]
const val12=arr15.find((item)=>item.orderId==2).items.map((item)=>item);
console.log(val12)

// Find the first product with a "sale" tag using find and some
let arr16=[{ name: "Shirt", tags: ["new", "cotton"] },
{ name: "Shoes", tags: ["sale", "leather"] },
{ name: "Cap", tags: ["sale"] }
]
const val13=arr16.find((item)=>item.tags.some((tag)=>tag=="sale"));
console.log(val13);

// Convert strings to numbers and drop the invalid ones using map and filter
let arr17=["10", "20", "abc", "30", "xyz"];
const val14=arr17.map((item)=>Number(item)).filter((item)=>!isNaN(item));
console.log(val14)

// multiply together only positive number
let arr18=[1, -2, 3, -4, 5];
const val15=arr18.filter((item)=>item>0).reduce((value,item)=>value*item,1);
console.log(val15)


// returns the name of adult age(age>=18) in uppercase using filter and map
let arr19=[
    { name: "Alice", age: 17 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 15 },
    { name: "David", age: 22 }
]
const val16=arr19.filter((item)=>item.age>=18).map((item)=>item.name.toUpperCase())
console.log(val16)

// count the total characters across all the words using reduce and map
let arr20=["hello", "world", "javascript"];
const val17=arr20.map((item)=>item.length).reduce((value,item)=>value+item);
console.log(val17)


// find the first row where every number is positive using find and every
let arr21=[
    [1, 2, 3],
    [-1, 4, 5],
]
const val18=arr21.find((row)=>row.every((num)=>num>0));
console.log(val18)
