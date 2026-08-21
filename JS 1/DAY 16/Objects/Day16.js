// objects- it is a non-seralised and key value pairs and it uses cruly brackets to store data 

let object ={name:'Ritik', age: 22, ispresent:true,city:"Ghaziabad",contactno:"xxxxxxxx25"}
console.log(object)


// another example

let obj={
    name:"XYZ",
    age:22,
    address:{      // nested object
        city:"Ghaziabad",
        country:'India'
    },
    colors:["Green","Red","Yellow"],   // nested array in object
    sayHi:()=>{     // function in object
        console.log("Hello")
    }
}
console.log(obj)
console.log(obj.address.city)// to get exact value use this snippet ("object name" + " . " + to access what value" )
console.log(obj.colors[2]) // to get exact color name give exact index number
console.log(obj.sayHi()) // to excess function in object or
obj.sayHi()


// brakcet notation  // if we don't use " " it use that key as variable which gives not defined error
console.log(obj["name"])
console.log(obj["address"] ['city'])
console.log(obj["colors"][2])
obj["sayHi"]()

// destructuring

const{age,name,address}=obj
console.log(name,age,address)



// to enter values in empty object


obj.modal="Version 1.0"
obj['colors']='black' // if any value already exists it replace that value
console.log(obj)

// loops over an object
// here only " for in " loop used
for (let item in obj){
    console.log(obj[item])  // here obj[item] is used as variable
}

// to store values of variable in empty object
  
let score = 10
let match = 20
let win = true
let obj1 = {score, matchnumber:match, win}
console.log(obj1)

// deleting keys from object
delete obj1.score
delete obj1.score
console.log(obj1)







