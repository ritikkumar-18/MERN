// Quick sort
function quickSort(arr) 
{
    if(arr.length==0|| arr.length==1)
    {
        return arr
    }
    let left=[]
    let right=[]
    let pivotindex=Math.floor(Math.random()*arr.length)
    let pivot=arr[pivotindex]
    for(let i=0;i<arr.length;i++)
    {
        if(i==pivotindex)
        {
            continue
        }
        if(arr[i]<pivot)
        {
            left.push(arr[i])
        }
        else
        {
            right.push(arr[i])
        }
    }
        let sortedLeft=quickSort(left)
        let sortedRight=quickSort(right)
        return[...sortedLeft,pivot,...sortedRight]
}
console.log(quickSort([4,54,-245,0,1,43,1]))


