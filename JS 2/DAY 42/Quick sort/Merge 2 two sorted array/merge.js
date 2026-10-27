// Merge two sorted array

let a1=[1,3,4,22,53,2,1]
let a2=[3,4,56,99,100,101]
let ans=[]
let i=0
let j=0
while(i<a1.length && j<a2.length)
{
    if(a1[i]<=a2[j])
    {
        ans.push(a1[i])
        i++
    }
    else
    {
        ans.push(a2[j])
        j++
    }
}
while(i<a1.length)
{
    ans.push(a1[i])
    i++
}
while(j<a2.length)
{
    ans.push(a2[j])
    j++
}
console.log(ans)