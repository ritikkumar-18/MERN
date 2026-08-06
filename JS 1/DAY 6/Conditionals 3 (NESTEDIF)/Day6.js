// nested if
 var a = 24
 if (a==0)
{
    console.log("a is zero")
}
 else if (a<0)
    {
        if(a%2==0)
        {
            console.log("a is negative and even")
        }
        else
        {
            console.log("a is negative and odd")
        }
    }  
    else 
    {
        if(a%2==0)
        {
            console.log("a is positive and even")
        }
        else
        {
            console.log("a is positive and odd")
        }
    }


var age = 22
var hasdl =true
if(age<18)
{
    console.log("You are not eligible for driving license")
}
else{
    if(hasdl)
    {
        console.log("You are eligible for driving license")
    }
    else
    {
        console.log("You are not eligible for driving license")
    }

    
}



var pin =1234
var amount=500

if(pin==1234)
{
    if(amount<=5000)
    {
        console.log("Transaction successful")
    }
    else
    {
        console.log("Transaction failed")
    }

}
else{
    console.log("pin is incorrect")
}