// Ternary conditional operator 2nd part

// check negative number
var n =-24
n<0 ? console.log("Negative number") : (n>0 ? console.log("Positive number") : console.log("Zero"))


// check even or odd number
n=0
n==0 ? console.log("Zero") : (n<0 ? (n%2==0 ? console.log("-ve Even") : console.log("+ve Odd"))  
  : (n%2==0 ? console.log("+ve Even") : console.log("+ve Odd")))


//check day name

var day=3
day ==1 ? console.log("Monday") :
day ==2 ? console.log("Tuesday") :
day ==3 ? console.log("Wednesday") :
day ==4 ? console.log("Thursday") :
day ==5 ? console.log("Friday") :
day ==6 ? console.log("Saturday"):
day ==7 ? console.log("Sunday"):
console.log("Invalid Input")
