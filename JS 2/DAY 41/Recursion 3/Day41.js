// fibonaaci series using recursion
let map=new Map()
function fib(n)
{
    if (map.has(n))
    {
      map.get(n)
    }
    if(n==1)
    {
        return 0
    }
    if(n==2)
    {
        return 1
    }
    let ans=fib(n-1)+fib(n-2)
    map.set(n,ans)
    return ans
}
console.log(fib(10))