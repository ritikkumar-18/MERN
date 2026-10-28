// Merge sort

function mergeSortedArray(a,b)
{
    let i=0
    let j=0
    let ans=[]
    while(i<a.length && j<b.length)
    {
        if(a[i]<=b[j])
        {
            ans.push(a[i])
            i++
        }
        else
        {
            ans.push(b[j])
            j++
        }
    }
    while(i<a.length)
    {
        ans.push(a[i])
        i++
    }
    while(j<b.length)
    {
        ans.push(b[j])
        j++
    }
    return ans
}

function mergesort(arr)
{
    if(arr.length==0 || arr.length==1)
    {
        return arr
    }
    let mid=Math.floor(arr.length/2)-1
    let sortedLeft=mergesort(arr.slice(0,mid+1))
    let sortedRight=mergesort(arr.slice(mid+1))
    return mergeSortedArray(sortedLeft,sortedRight)
}
console.log(mergesort([8,6,5,0,-3,4,56,1]))