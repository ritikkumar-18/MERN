// sort inbuilt function 

const arr=[12,34,3,4,56,5,-5,67,66]
arr.sort((a,b)=>{
    return a-b // ascending order
})

// arr.sort((a,b)=>{
//     return b-a  // descending order
// })
console.log(arr)

// to sort array in object

let arr1=[{
    name:"A",
    age:32
},
{
    name:"B",
    age:3,
},
{
name:"c",
age:34
}
]

arr1.sort((a,b)=>{
    return a.age-b.age
})

console.log(arr1)



// sort string in alphabetical order

let str=["banana", "apple", "mango", "cherry"]
str.sort()
console.log(str)

// sort names by length and alphabetically

let str1=["Raj", "Amit", "Ram", "Karan", "Bob"]
str1.sort((a,b)=>{
    if(a.length-b.length==0){
        return a.localeCompare(b)
    }
    return a.length-b.length
})
console.log(str1)

// more question

let students = [
    {name: "Rahul", age: 20},
    {name: "Amit", age: 18},
    {name: "Priya", age: 20},
    {name: "Raj", age: 18}
];

students.sort((a, b) => {
    if (a.age== b.age) {
        return a.name.localeCompare(b.name);
    }

    return a.age-b.age
});

console.log(students);

// more question
let salary=[{name:"Rahul",salary:50000}, {name:"Amit",salary:70000}, {name:"Priya",salary:70000},
{name:"Raj",salary:50000}]
salary.sort((a,b)=>{
    if(a.salary==b.salary){
        return a.name.localeCompare(b.name)
    }
    return b.salary-a.salary
})
console.log(salary)


// more question 

let price=[{name:"A",price:500,rating:4.2}, {name:"B",price:300,rating:4.5},
{name:"C",price:500,rating:4.8}, {name:"D",price:300,rating:4.1}]
price.sort((a,b)=>{
    if(a.price==b.price){
    return b.rating-a.rating
    }
    return a.price-b.price
})
console.log(price)


// more question

let marks=[{name:"A",marks:90,age:21}, {name:"B",marks:90,age:19}, {name:"C",marks:85,age:20}]
marks.sort((a,b)=>{
    if(a.marks==b.marks){
        return a.age-b.age    }
    return b.marks-a.marks

})
console.log(marks)


// more question

let arr2 = [4, 4, 2, 2, 2, 3, 3, 1];

let freq = {};

for (let num of arr2) {
    freq[num] = (freq[num] || 0) + 1;
}

arr2.sort((a, b) => {
    if (freq[a] == freq[b]) {
         return a - b; 
    }
    return freq[b] - freq[a]; 
});

console.log(arr2);


//  more questions

let words=["cat", "elephant", "dog", "tiger", "ant"]
words.sort((a,b)=>{
    if(a.length==b.length){
        return a.localeCompare(b)
    }
    return b.length-a.length
})
console.log(words)


// more questions

let score=[{name:"A",score:100,level:5}, {name:"B",score:100,level:7},
{name:"C",score:90,level:8}, {name:"D",score:100,level:7}]
score.sort((a,b)=>{
     if(a.score==b.score){
        if(a.level==b.level){
            return a.name.localeCompare(b.name)
        }
        return b.level-a.level
     }
     return b.score-a.score
})
console.log(score)


// more questions

let movies=[{title:"A",rating:8.5,year:2022}, {title:"B",rating:9.0,year:2020},
{title:"C",rating:8.5,year:2019}]
movies.sort((a,b)=>{
    if(a.rating==b.rating){
        return a.year-b.year
    }
    return b.rating-a.rating
})
console.log(movies)
