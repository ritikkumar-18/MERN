// spread operator  it removes brackets in arrays and spread thm=em it also used for concatenate the arrays objects strings and etc..
//for arrays

let arr=[1,2,3,4,5]
let arr2=[6,7,8,9,10]
console.log(...arr)
console.log(...arr,...arr2)

// for objects

let obj={
    a:1,
    b:2,
    c:3
}
let obj2={
    x:4,
    y:5,
    z:6
}
let val={
    ...obj,
    ...obj2
}
console.log(val)  // here spread operator add both the objects and also remove curly bracket

// for strings

let str="ABCDEFGHI"
console.log(...str) // here it spread all the characters


//shallow and deep copy using spread operator

let bank={
    name:'Ritik',
    balance:10000,
    mobile:"xxxxxxxx25"
}
 let bank2={...bank}  // it is called shallow copy and here if we do not use spread opreator it changes in both variables/objects and if we change in any variable without spread operator the changes done in both variable 
 bank2.name='Ritik 2'
 bank2.balance="xxxxxxxx15"
 bank2.balance=50000

 console.log(bank)
 console.log(bank2)

// structureclone function

let person1={
    name:"Ritik",
    age:22,
    address:{
        city:"GZB",
        country:"India"
    },
    cars:["BMW","THAR"]
}
let person2=structuredClone(person1)  // it is called deep copy and this function is used to remove the problem of nested object and array, spread opertor has limitations it doesn't change the values of nested objects and arrays to debug this problem this function used 
person2.name="RITIKKKKK"
person2.address.city="Noida"
person2.cars.push("BENZ")
console.log(person1)
console.log(person2)


