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


// example no.0
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

// example no.1

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



// example no.2

const products = [
  { name: "Laptop", price: 60000, stock: 5, category: "Electronics" },
  { name: "Phone", price: 30000, stock: 0, category: "Electronics" },
  { name: "Chair", price: 5000, stock: 12, category: "Furniture" },
  { name: "Table", price: 10000, stock: 3, category: "Furniture" }
];

function electronicsitem(arr){
    let sum=0
    let expensive=arr[0]
    let stock=[]
    let available=[]
    for(let item of arr){
        sum+=item.price
        if(item.price>expensive.price)
        {
            expensive=item

        }
        if(item.stock===0){
            stock.push(item.name)
        }
        if(item.stock!==0){
            available.push(item.name)
        }
    }
    return {
        average:sum/arr.length,
        expensiveitem:expensive.name,
        stock :stock,
        available:available,
        total:arr.length
    }
}
console.log(electronicsitem(products))


 // example no.3

const movies = [
    { title: "Inception", rating: 8.8, year: 2010, genre: "Sci-Fi" },
    { title: "Avatar", rating: 7.8, year: 2009, genre: "Sci-Fi" },
    { title: "Titanic", rating: 7.9, year: 1997, genre: "Romance" },
    { title: "Interstellar", rating: 8.7, year: 2014, genre: "Sci-Fi" }
];

function analyzeMovies(arr) {
    let sum = 0;
    let highest = arr[0];
    let sciFi = [];
    let recentMovies = [];

    for (let item of arr) {

        sum += item.rating;

        if (item.rating > highest.rating) {
            highest = item;
        }

        if (item.genre === "Sci-Fi") {
            sciFi.push(item.title);
        }

        if (item.year > 2010) {
            recentMovies.push(item.title);
        }
    }

    return {
        highestRated: highest.title,
        averageRating: sum / arr.length,
        sciFiMovies: sciFi,
        recentMovies: recentMovies,
        totalMovies: arr.length
    };
}

console.log(analyzeMovies(movies));

// example no.4

const cart = [
  { name: "Laptop", price: 60000, quantity: 1 },
  { name: "Mouse", price: 1000, quantity: 2 },
  { name: "Keyboard", price: 2000, quantity: 1 },
  { name: "Monitor", price: 15000, quantity: 2 }
];

function shopping(arr){
    let sum=0
    let mostExpensiveitem=arr[0]
    let bulkitem=[]
    let totalItems=0
    for(let item  of arr){
        sum+=item.price*item.quantity
        totalItems += item.quantity;
        if(item.price>mostExpensiveitem.price){
            mostExpensiveitem=item
        }
            if(item.quantity>1){
                bulkitem.push(item.name)
            }


    }
    return {
        totalCost:sum,
        totalItems:totalItems,
        mostExpensiveitem:mostExpensiveitem.name,
        bulkitem:bulkitem,
        uniqueProducts:arr.length

    }
}
console.log(shopping(cart))


// example no.5

const orders = [
  { id: 101, customer: "Aman", amount: 2500, status: "delivered" },
  { id: 102, customer: "Riya", amount: 4500, status: "pending" },
  { id: 103, customer: "Karan", amount: 1200, status: "delivered" },
  { id: 104, customer: "Neha", amount: 7000, status: "cancelled" }
];

function analyzeOrders(arr){
    let totalRevenue=0
    let largestOrder=arr[0]
    let pending=[]
    let delivered=[]
    let cancelled=[]
    for(let item of arr){
        if(item.status=="delivered"){
            totalRevenue+=item.amount
        }
        if(item.amount>largestOrder.amount){
            largestOrder=item
        }
        if(item.status=="pending"){
            pending.push(item.id)
        }
        if(item.status=="delivered"){
            delivered.push(item.id)
        }
        if(item.status=="cancelled"){
            cancelled.push(item.id)
        }


    }
    return {
        totalRevenue:totalRevenue,
        largestOrder:largestOrder.customer,
        delivedID:delivered,
        pendingID:pending,
        cancelledID:cancelled
    }


}
console.log(analyzeOrders(orders))


// example no.6

const players = [
  { name: "Virat", runs: 1200, matches: 20, age: 34 },
  { name: "Rohit", runs: 1000, matches: 18, age: 36 },
  { name: "Gill", runs: 1400, matches: 22, age: 24 },
  { name: "Pant", runs: 800, matches: 15, age: 26 }
];

function analyzePlayers(players){
    let topscorer=players[0]
    let totalRuns=0
    let youngplayer=[]
    let bestAverage=players[0]
     for(let item of players){
        totalRuns+=item.runs
        if(item.runs>topscorer.runs){
            topscorer=item
        }
        if(item.age<30){
            youngplayer.push(item.name)
        }
        if(item.runs / item.matches > bestAverage.runs / bestAverage.matches){
          bestAverage = item;
}



     } 
     return {
        totalRuns:totalRuns,
        topscorer:topscorer.name,
        average:totalRuns/players.length,
        youngestPlayer:youngplayer,
        bestAverage:bestAverage.name


     }

}
console.log(analyzePlayers(players))


// example no.7

const accounts = [
  { name: "Aman", balance: 50000, type: "savings" },
  { name: "Riya", balance: 120000, type: "current" },
  { name: "Karan", balance: 30000, type: "savings" },
  { name: "Neha", balance: 80000, type: "savings" }
];

function analyzeAccounts(accounts){
    let richestcustomer=accounts[0]
    let totalBalance=0
    let savingsCustomers=[]
    let highbalanceCustomers=[]

    for (let item of accounts){
        totalBalance+=item.balance
        if(item.balance>richestcustomer.balance){
            richestcustomer=item
        }
        if(item.type=="savings"){
            savingsCustomers.push(item.name)
        }
        if(item.balance>70000){
            highbalanceCustomers.push(item.name)
        }
    }
    return {
        totalBalance:totalBalance,
        richestcustomer:richestcustomer.name,
        average:totalBalance/accounts.length,
        savingsCustomers:savingsCustomers,
        highbalanceCustomers:highbalanceCustomers

    }
}
console.log(analyzeAccounts(accounts))

// example no.8

const customers = [
  { name: "Aman", orders: 5, spent: 12000, city: "Delhi" },
  { name: "Riya", orders: 8, spent: 25000, city: "Mumbai" },
  { name: "Karan", orders: 2, spent: 5000, city: "Delhi" },
  { name: "Neha", orders: 10, spent: 30000, city: "Bangalore" }
];

function analyzeCustomers(customers){
    let topCustomer=customers[0]
    let totalSpent=0
    let DelhiCustomers=[]
    let loyalCustomers=[]

    for(let item of customers){
        totalSpent+=item.spent
        if(item.spent>topCustomer.spent){
            topCustomer=item
        }
        if(item.city==="Delhi"){
            DelhiCustomers.push(item.name)
        }
        if(item.orders>=5){
            loyalCustomers.push(item.name)
        }
    }
    return{
        totalSpent:totalSpent,
        topCustomer:topCustomer.name,
        average:totalSpent/customers.length,
        DelhiCustomers:DelhiCustomers,
        loyalCustomers:loyalCustomers
    }

}
console.log(analyzeCustomers(customers))


// example no.9

const posts = [
  { id: 1, author: "Aman", likes: 120, comments: 20, shares: 10 },
  { id: 2, author: "Riya", likes: 500, comments: 80, shares: 50 },
  { id: 3, author: "Karan", likes: 250, comments: 40, shares: 30 },
  { id: 4, author: "Neha", likes: 80, comments: 10, shares: 5 }
];

function  analyzePosts(posts){
    let mostLikedPost=posts[0]
    let totalLikes=0
    let totalComments=0
    let popularIDs=[]
    let mostEngagingPost=posts[0]

    for(let item of posts){
        totalLikes+=item.likes
        totalComments+=item.comments
        if(item.likes>mostLikedPost.likes){
            mostLikedPost=item
        }
        if(item.likes>200){
            popularIDs.push(item.id)
        }
        if(item.likes + item.comments + item.shares>mostEngagingPost.likes + mostEngagingPost.comments + mostEngagingPost.shares){
            mostEngagingPost=item
        }

    }
    return {
        totalLikes:totalLikes,
        totalcomments:totalComments,
        mostLikedPost:mostLikedPost.author,
        popularIDs:popularIDs,
        mostEngagingPost:mostEngagingPost.author



    }
}
console.log(analyzePosts(posts))




// to find duplicate elements in array without using include method

// let arr = [1, 2, 4, 5, 8, 2, 4, 5];

// function duplicate(arr) {

//     let dupli = [];

//     for (let i = 0; i < arr.length; i++) {

//         for (let j = i + 1; j < arr.length; j++) {

//             if (arr[i] === arr[j]) {

//                 let alreadyThere = false;

//                 // Check whether arr[i] is already in dupli
//                 for (let k = 0; k < dupli.length; k++) {
//                     if (dupli[k] === arr[i]) {
//                         alreadyThere = true;
//                         break;
//                     }
//                 }

//                 if (alreadyThere === false) {
//                     dupli.push(arr[i]);
//                 }

//                 break;
//             }
//         }
//     }

//     return dupli;
// }

// console.log(duplicate(arr));



// and using include method

// let arr = [1,2,4,5,8,2,4,5];

// function duplicate(arr) {

//     let dupli = [];

//     for(let i = 0; i < arr.length; i++) {

//         for(let j = i + 1; j < arr.length; j++) {

//             if(arr[i] === arr[j]) {

//                 if(!dupli.includes(arr[i])) {
//                     dupli.push(arr[i]);
//                 }

//                 break;
//             }
//         }
//     }

//     return dupli;
// }

// console.log(duplicate(arr));


