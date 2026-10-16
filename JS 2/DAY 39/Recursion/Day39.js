// Recursion
 
// for forward order
let str="Hello World"
function myfirstRecursion(s,e) {
    if(s==e)
    {
        return 
    }
    console.log(str)
    myfirstRecursion(s+1,e)
}
myfirstRecursion(1,5)

// for reverse order
function mysecondRecursion(n) {
    if(n==0){
        return 
    }
    console.log(str)
    mysecondRecursion(n-1)
}
mysecondRecursion(5)


// printing counting numbers
function mythirdRecursion(i,n) {
    if(i>n){
        return
    }
    console.log(i)
    mythirdRecursion(i+1,n)
    console.log(i)
}
mythirdRecursion(1,5)

// sum of n numbers
function myfourthrecursion(i,n,ans){
      if(i>n){
        return ans
      }
      ans+=i
      return myfourthrecursion(i+1,n,ans)
} 
console.log(myfourthrecursion(1,10,0))
