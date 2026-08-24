// more methods in objects

// 3 ways to protect object

const obj={
    name:'r',age:22,colors:["Green","Red"]
}
// freeze 
// Object.freeze(obj) // it stops users to do anything in objects and keys and their values

//seal
// Object.seal(obj) // it only updates the data and do not add or delete anything

//preventExtensions
// Object.preventExtensions(obj)  // it updates the values but do not add anything

delete obj.age
obj.name='d'
obj.city="GZb"
obj.colors[2]='Black'
console.log(obj)

