// Map function


let arr=[23,54,65,87,56]
const app=arr.map((item)=>{
    return 0

})
console.log(app)


// Question of maps

let arr1=[1,2,3,4,5]
const ar= arr1.map((item)=>{
    return item +item
})
console.log(ar)


// another 

let arr2=[1,2,3,4,5]
const a = arr1.map((item)=>{
    return item *item
})
console.log(a)

// another

let arr3=["rahul", "amit", "priya", "neha"]
const b=arr3.map((item)=>{
    return item.length
})
console.log(b)

//another

let arr4=["rahul", "amit", "priya", "neha"]
const c=arr4.map((item)=>{
    return item.toUpperCase()
})
console.log(c)

//another


let arr5=[1,2,3,45]
const d=arr5.map((item)=>{
    return item+10
})
console.log(d)

//another


let arr6=[10, 20, 30, 40]
const e=arr6.map((item)=>{
    return item.toString()
})
console.log(e)

//another


let arr7=[500,800,1200,1300]
const f=arr7.map((item)=>{
    return item+100

})
console.log(f)

//another


let arr8=[1000,500,2500,800]
const g=arr8.map((item)=>{
    let discount= (item*20)/100
    return item-discount
})
console.log(g)

//another


let arr9=[0,10,20,30]
const h=arr9.map((item)=>{
    let temp=(item*(9/5))+32
    return temp
})
console.log(h)

//another


let arr10=["Shubham", "Rahul", "Amit"]
const i=arr10.map((item)=>{
    return "Mr."+item
})
console.log(i)

//another


let arr11=[2,4, 6, 8]
const j=arr11.map((item)=>{
    let num=item*item
    return {
        number:item,square:num
    }
})
console.log(j)

//another


let arr12=[10,20,30,40]
const k=arr12.map((item,index)=>{
    return item+index
})
console.log(k)

//another


let arr13=["Shubham", "Rahul", "Amit"]
const l=arr13.map((item,index)=>{
    let lower=item.toLowerCase()
    return lower+"_" +index
})
console.log(l)

//another



let arr14=["Aman","Riya","Karan"]
const m=arr14.map((item)=>{
    return{
        name:item,score:0
    }
})
console.log(m)

//another



let arr15=[100,500,1000]
const n=arr15.map((item)=>{
      let gst=(item*18)/100
    return item +gst
})
console.log(n)

//another


let arr16 = [
    { id: 1, name: "Rahul", age: 22 },
    { id: 2, name: "Amit", age: 25 },
    { id: 3, name: "Priya", age: 21 }
];

const o = arr16.map((item) => {
    return item.name;
});

console.log(o);

//another

let arr17=[
{ name: "Laptop", price: 50000, quantity: 2 },
{ name: "Mouse", price: 1000, quantity: 3 },
{ name: "Keyboard", price: 2000, quantity: 1 }
]
const p=arr17.map((item)=>{
    return item.price*item.quantity
})
console.log(p)

//another

let arr18=[
{ firstName: "Rahul", lastName: "Sharma" },
{ firstName: "Amit", lastName: "Verma" },
{ firstName: "Priya", lastName: "Singh" }
]
const q=arr18.map((item)=>{
    return item.firstName+" "+item.lastName

})
console.log(q)

//another

let arr19=[
{ name: "Laptop", price: 50000, category: "Electronics" },
{ name: "Phone", price: 30000, category: "Electronics" },
{ name: "Shoes", price: 5000, category: "Fashion" }
]

const r=arr19.map((item)=>{

    let dis=(item.price*10)/100
    
    return{
        name:item.name,price:item.price-dis
    }
})
console.log(r)



//another

let arr20=["Rahul", "Amit", "Priya", "Karan"]
const s=arr20.map((item,index)=>{
    return{
        name:item,rank:index
    }
})
console.log(s)

