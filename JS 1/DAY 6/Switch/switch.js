// Switch case

// check days name
var day =2;
 switch(day)
 {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")   
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
    default:
        console.log("Invalid day")                        

 }

// check month's total days

var month=4
switch(month)
{
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(31)
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(30)
        break
    case 2:
        console.log("28/29")
         break
    default:
        console.log("Invalid Input")        
}


// check zero, positive, negative
var n=20
switch(true)
{
    case n==0:
        console.log("zero")
        break
    case n<0:
        console.log("-ve")
        break
    default:
        console.log("+ve")        
}



