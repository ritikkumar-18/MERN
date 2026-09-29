// reduce function

let arr1=[1,2,3,4,5]
const ans1=arr1.reduce((total,curr)=>{
    return total*curr

})
console.log(ans1)

// reduce used as filter
let arr=[1,2,3,4,5]
const ans=arr.reduce((total,curr)=>{
    if(curr%2==0){
        return [...total, curr]
    }
    else{
        return total
    }

},[])
console.log(ans)


// reduce used as map

let arr2=[1,2,3,4,5]
const ans2=arr2.reduce((total,curr)=>{
    return [...total,curr**2]
},[])
console.log(ans2)


// questions

let arr3=[10,20,30,40,50]
let a=arr3.reduce((total,curr)=>{
    return total+curr
})
console.log(a)


// another

let arr4=[2,3,4,5]
let b=arr4.reduce((total,curr)=>{
    return total*curr
})
console.log(b)

//another

let arr5=[10,20,30,40,50,60]
let c=arr5.reduce((total,curr)=>{
    return total+1
},0)
console.log(c)

//another

let arr6=[12,45,7,89,34,23]
let d=arr6.reduce((total,curr)=>{
    return curr>total?curr:total
},arr6[0])
console.log(d)

//another

let arr7=[12,45,7,89,43,23]
let e=arr7.reduce((total,curr)=>{
    return curr<total?curr:total
},arr7[0])
console.log(e)

//anther

let arr8=[1,2,3,4,5,6,7,8]
let f=arr8.reduce((total,curr)=>{
    if(curr%2==0){
        total+=curr
    }
    return total
},0)
console.log(f)

//another
let arr9=[1,2,3,4,5,5,6,6,6,7,8]
let g=arr9.reduce((total,curr)=>{
    if(curr%2!==0){
        total+=curr
    }
    return total
},0)
console.log(g)

//another
let arr10=[10,15,20,25,30,35,40]
let h=arr10.reduce((total,curr)=>{
    if(curr%2==0){
        total++
    }
    return total  
},0)
console.log(h)

//another
let arr11=[10,15,20,25,30,35,40]
let i=arr11.reduce((total,curr)=>{
    if(curr%2!==0){
        total++
    }
    return total
},0)
console.log(i)

//another
let arr12=[10,20,30,40,50]
let j=arr12.reduce((total,curr)=>{
    return total+curr
},0)
let average=j/arr12.length
console.log(average)

//another

let arr13=[-5,10,-28,0,15,-8]
let k=arr13.reduce((total,curr)=>{
    if(curr>0){
        total++
    }
    return total
},0)
console.log(k)

//another
let arr14=[-5,10,-2,8,0,-7]
let l=arr14.reduce((total,curr)=>{
    if(curr<0){
        total++
    }
    return total
},0)
console.log(l)

//another

let arr15=[0,1,0,2,3,0,4,0]
let m=arr15.reduce((total,curr)=>{
    if(curr===0){
        total++
    }
    return total
},0)
console.log(m)

//another

let arr16=["cat","elephant","dog","tiger"]
let n=arr16.reduce((total,curr)=>{
    return curr.length>total.length?curr:total
},arr16[0])
console.log(n)

//another

let arr17=["cat","kiwi","rat","dolphin"]
let o=arr17.reduce((total,curr)=>{
    return curr.length<total.length?curr:total
},arr17[0])
console.log(o)

//another
let arr18=['apple',"banana","kiwi","pomegrante"]
let p=arr18.reduce((total,curr)=>{
    if(curr.length>=5){
        total++
    }
    return total
},0)
console.log(p)

//another
let arr19=["Hell0","world","Javascript"]
let q=arr19.reduce((total,curr)=>{
    return total===""?curr:total+" "
    +curr
}," ")
console.log(q)

//another
let arr20=[1,2,3,4,5]
let r=arr20.reduce((total,curr)=>{
    total.unshift(curr)
    return total
},[])
console.log(r)