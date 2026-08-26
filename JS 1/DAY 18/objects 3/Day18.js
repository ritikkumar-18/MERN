// some others methods of objects

const obj={
    name:"R",
    age:22,
    number:12345678,
    city:"GZB",
    county:"India"
}
 
//keys
for(let item of Object.keys(obj)){  // this return the object's keys using loop
    console.log(item)
}

//values
for(let item of Object.values(obj)){  // this retun the object's values using loop
    console.log(item)
}

//entries
for(let[k,v] of Object.entries(obj)){  // this return the object's keys and values using loop and also using destructuring here it returns direct keys and their values
    console.log(k,v)
}


const keys=Object.keys(obj) // this return the object's keys in the form of arrays
const values=Object.values(obj) // this return the object's values in the form of arrays
const entries=Object.entries(obj) // this return the object's key and values in the form of 2D array

console.log(keys)
console.log(values)
console.log(entries)