// subsequence

function ss(arr,ans,i)
{
    if(i==arr.length)
        {
        console.log(ans)
        return
        }
        ans.push(arr[i])
        ss(arr,ans,i+1)
        ans.pop()
        ss(arr,ans,i+1)
}
ss([1,2,3],[],0)



// for string

function ss(str,ans,i)
{
    if(i==str.length)
        {
        console.log(ans)
        return
       }
       let temp=ans+str[i]
       ss(str,temp,i+1)
       ss(str,ans,i+1)
}
ss("abc"," ",0)