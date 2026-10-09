// map 

let map=new Map()
map.set('a',1)
map.set('b',2)
map.set('c',3)
map.set('d',4)
console.log(map)

const map1=new Map([['a',1],['b',2],['c',3],['d',4]])
console.log(map1)

const map2=new Map()
map.set("a",1)
map.set("b",2)
if(map.has("a")){
    console.log("a is present")
}

const obj={
    name:"John",
    age:30,
    city:"New York"
}

if(obj.hasOwnProperty("name")){
    console.log("name is present")
}


let map3=new Map()
map3.set("a",1)
map3.set("b",2)
map3.set("c",3)
map3.set("d",4)
for(let item of map3.entries()){
    console.log(item)
}
for(let item of map3.keys()){
    console.log(item)
}   
for(let item of map3.values()){ 
    console.log(item)
}
for(let [key,value] of map3.entries()){
    console.log(key,value)
}

// map3.delete("a")
// map3.clear()
// console.log(map3)




// set
 let set=new Set()
 set.add(1)
 set.add(2)
 set.add(3)
 set.add(4)
 console.log(set)
 console.log(set.has(1))
 console.log(set.has(5))
set.delete(1)


 let set1=new Set([1,2,3,4])
 console.log(set1)