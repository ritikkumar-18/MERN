//to check prime number using recursion
let n=29
function prime(n,i){
    if(i**i>n){
        return true
    }
    return n%i!=0 && prime(n,i+1)
}
console.log(prime(n,2))



 // to print prime numbers in a given range using recursion
let n1=29
function prime(n1,i){
    if(n1<2){
        return false
    }
    if(i**i>n1){
        return true
    }
    return n1%i!=0 && prime(n1,i+1)
}
function printPrime(s,e){
    if(s>e)
    {
        return
    }
    let boolean=prime(s,2)
    if(boolean)
    {
        console.log(s)
    }
    printPrime(s+1,e)

}
printPrime(1,100)
