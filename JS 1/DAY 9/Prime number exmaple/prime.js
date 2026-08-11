// prime number

var n=230
var i=2
var isPrime=true
while(i < Math.sqrt(n))
{
    if(n%i==0)
    {
        isPrime=false
    }
    i++

}
console.log(isPrime)



// another type

var n=230
var i=2
var isPrime=true
while(i*i<n)
{
    if(n%i==0)
    {
        isPrime=false
    }
    i++

}
console.log(isPrime)