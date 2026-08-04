// Arithematic Operators
// Addition [ + ]
var a = 10;
var b = 5;
var sum = a + b;
console.log("Sum:", sum); // Output: Sum: 15

// Subtraction [ - ]
var difference = a - b;
console.log("Difference:", difference); // Output: Difference: 5

// Multiplication [ * ]
var product = a * b;  
console.log("Product:", product); // Output: Product: 50

// Division [ / ]
var quotient = a / b;   
console.log("Quotient:", quotient); // Output: Quotient: 2

// Modulus [ % ]
var remainder = a % b;
console.log("Remainder:", remainder); // Output: Remainder: 0

// exponentiation [ ** ]
var power = a ** b;
console.log("Power:", power); // Output: Power: 100000


// increament and decrement operators
var x = 5;
x++;
console.log("Incremented Value:", x); // Output: Incremented Value: 6

// decrement
var y=10
y--;
console.log("Decremented Value:", y); // Output: Decremented Value: 5       
 
// pre-increment
var z = 7;
var preIncrementedValue = ++z;
console.log("Pre-Incremented Value:", preIncrementedValue); // Output: Pre-Incremented Value: 8

// pre-decrement
var w = 12; 
var preDecrementedValue = --w;
console.log("Pre-Decremented Value:", preDecrementedValue); // Output: Pre-Decremented Value: 11


// post-increment
var m = 3;
var postIncrementedValue = m++;
console.log("Post-Incremented Value:", postIncrementedValue); // Output: Post-Incremented Value: 3
console.log("Value of m after Post-Increment:", m); // Output: Value of m after Post-Increment: 4

// post-decrement 
var n = 8;
var postDecrementedValue = n--;
console.log("Post-Decremented Value:", postDecrementedValue); // Output: Post-Decremented Value: 8
console.log("Value of n after Post-Decremented:", n); // Output: Value of n after Post-Decremented: 7


// Assignment Operators
// Add equalto [ += ]
 var q=20
 q+=5
 console.log("Add Equal To:",q) // Output: Add Equal To: 25

 // Subtract equalto [ -= ]
  var r=15
  r-=3
  console.log("Subtract Equal To:", r) // Output: Subtract Equal To: -3

  // Multiply equalto [ *= ]
  var s=4
  s*=2
  console.log("Multiply Equal To:", s) // output: Multiply Equal To: 8

 // Divide equalto [ /= ]
  var t=10
  t/=2
  console.log("Divide Equal To:", t) // Output: Divide Equal To: 5

  // Modulus equalto [ %= ]
   var u=9
   u%=4
   console.log("Modulus Equal To:", u) // output : Modulus Equal To: 1

   // Exponentiation equalto [ **= ]
   var v=2
   v**=3
   console.log("Expotnentiation Equal To:", v) // output : Exponentiation Equal To: 8


   // Comparison Operators
   // Equal to [ == ]
   var num1 = 10
   var num2 = 10;
    console.log("Equal To:", num1 == num2) // Output: Equal To: true

    // Not Equal to [ != ]
    var num3 = 5;   
    var num4 = 8;
    console.log("Not Equal To:", num3 != num4); // Output: Not Equal To: true

    // Strict Equal to [ === ]
    var num5 = 10;
    var num6 = "10";
    console.log("Strict Equal To:", num5 === num6); // Output: Strict Equal To: false

    // Strict Not Equal to [ !== ]
    var num7 = 5;
    var num8 = "5";
    console.log("Strict Not Equal To:", num7 !== num8); // Output: Strict Not Equal To: true    

    // Greater than [ > ]
    var num9=15
    var num10=10
    console.log("Greater Than:",num9>num10) // Output: Greater Than: true

    // Less than [ < ]
     var num11=5
     var num12=4
     console.log("Less Than:",num11<num12) // Output: Less Than: false

    // Greater than or equal to [ >= ]
    var num13=7
    var num14=7
    console.log("Greater Than or Equal To:",num13>=num14) // Output: Greater Than or Equal To: true

    // Less than or equal to [ <= ]
    var num15=3
    var num16=6
    console.log("Less Than or Equal To:",num15<=num16) // Output: Less Than or Equal To: true

    // logical Operators
    // Logical AND [ && ] both values should be true to get true
    var a1 = true;
    var b1 = false;
    console.log("Logical AND:", a1 && b1); // Output: Logical AND: false

    // Logical OR [ || ] either one value should be true to get true
    var a2 = true;
    var b2 = false;
    console.log("Logical OR:", a2 || b2); // Output: Logical OR: true

    // Logical NOT [ ! ] it will reverse the value
    var a3 = true;
    console.log("Logical NOT:", !a3); // Output: Logical NOT: false

   // Ternary Operator [ ? : ] it is a shorthand for if-else statement
   var age = 18;
   var eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
   console.log("Eligibility:", eligibility); // Output: Eligibility: Eligible to vote