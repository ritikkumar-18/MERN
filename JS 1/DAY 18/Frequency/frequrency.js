// frequency of an element 

// using object on number

let arr=[1,2,3,4,1,2,1,3,4,1,4,3]
let obj={}
for(let item of arr){
    if(obj[item]){
        obj[item]++
    }
    else{
        obj[item]=1
    
    }

// or (using shortcircuiting)
     // obj[item]=obj[item]+1 || 1
 }
console.log(obj)


// using method on stirng

let str="abcdabcaba"
let obj1={}
for(let item of str){
    obj1[item]=obj1[item]+1 || 1
}
console.log(obj1)


// questions
const students=[
    {name:"IJK",marks:85,age:20},
    {name:"MNO",marks:76,age:19},
    {name:"XYZ",marks:89,age:21},
    {name:"ABC",marks:91,age:17}
]

function solve(arr){
    let sum=0
    let passed=[]
    let topper=arr[0]
    let youngest=arr[0]
    for(let item of arr){
        sum+=item.marks
        if(item.marks>70){
            passed.push(item.name)
        }
        if(item.age<youngest.age){
            youngest=item
        }
        if(item.marks>topper.marks){
            topper=item
        }
    }
    return{
        average:sum/arr.length,
        youngest:youngest.name,
        passed,
        topper:topper.name,
        total:arr.length
    }
    

}
console.log(solve(students))

// another question

const employees = [
  { name: "Aman", salary: 45000, age: 25, department: "IT" },
  { name: "Riya", salary: 65000, age: 28, department: "HR" },
  { name: "Karan", salary: 55000, age: 24, department: "IT" },
  { name: "Neha", salary: 75000, age: 30, department: "Finance" }
];

function company(arr){
    let sum=0
    let youngest=arr[0]
    let highest=arr[0]
    let depart=[]


    for(let item of arr){
        sum+=item.salary
        if(item.salary>highest.salary){
            highest=item
        }
        if(item.age<youngest.age){
            youngest=item
        }
        if(item.department==="IT"){
            depart.push(item.name)
        }

    }
    return{
        average:sum/arr.length,
        total:arr.length,
        highest:highest.name,
        youngest:youngest.name,
        depart:depart
    }
}
console.log(company(employees))