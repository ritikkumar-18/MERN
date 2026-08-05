// Conditionals 2

// if else elseif 
     var a = prompt("Enter a number");
    if (a<0 || a>100){
        console.log("The number is out of range");
    }
    else if(a>90){
        console.log("A+")
    }
    else if(a>80){
        console.log("A")
    }
    else if(a>70){
        console.log("B")
    }
    else if(a>60){
        console.log("C")
    }
    else if(a>50){
        console.log("D")
     }
     else{
        console.log("Padhne pe dhayan de badmash fail hai tu, aise jaige MNC mein")
     }
  


     // check days in month
  var month=prompt("Enter a month number");
  if(month<1 || month>12){
    console.log("Invalid month");
  }
    else if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
        console.log("31 days");

    }

    else if(month==4||month==6||month==9||month==11){
        console.log("30 days");
    }   
    else if(month==2){
        console.log("28/29 days");
    }
    else {
        console.log("Invalid month");
    }


    // check triangle type
var a=2 
var b=4
var c=5
if(a>b && a>c){
    var largest=a;
}
else if(b>a && b>c){
    var largest=b;
}
    else{
        var largest=c;
    }
let left = 2 * largest * largest;
    let right = a * a + b * b + c * c;

    if (left < right) {
        console.log(1); // Acute
    } else if (left === right) {
        console.log(2); // Right
    } else {
        console.log(3); // Obtuse
    }