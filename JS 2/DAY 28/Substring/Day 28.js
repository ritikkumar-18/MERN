// to print all substring
let str="abcd"
let ans=[]
for(let i=0;i<str.length;i++){
    let temp=''
    for(let j=i;j<str.length;j++){
        temp+=str[j]
        ans.push(temp) 
        // OR

        //console.log(str.slice(i,j+1))
    }
}
console.log(ans)

//another question

//return counts of substrings

function countTotalSubstrings(str)
{
let n=str.length
return  (n*(n+1))/2
}
console.log(countTotalSubstrings("abcd"))


//return substring equall to k(given target)

function substringOfLenght(str,k){
    let ans=[]
    for(let i=0;i<str.length;i++){
        for(let j=i;j<str.length;j++){
            let s=str.slice(i,j+1)
            if(s.length==k)
            {
                ans.push(s)
            }
        }
    }
    return ans
}
console.log(substringOfLenght("abcdefgh",3))

//OR better approach  samll example of sliding window

function substringOflengthwithoneloop(str,k){
    let ans=[]
    for(let i=0;i<=str.length-k;i++){
        ans.push(str.slice(i,i+k))
    }
    return ans
}
console.log(substringOflengthwithoneloop("abcdefgh",3))


//OR using count

function substringOflengthwithoneloopusingcount(str,k){
    let count=0
    
    for(let i=0;i<=str.length-k;i++){
        count++
    }
    return count
}
console.log(substringOflengthwithoneloopusingcount("abcdefgh",3))



//example

function example(str,k){
    let ans=[]
    for(let i=k;i<str.length;i++){
        for(let j=i;j<str.length;j++)
        ans.push(str.slice(i,j+1))

    }
    return ans
}
console.log(example("abcdef",2))


//print all substring which contain vowels


function printsubstringswithvowels(str)
{
    let ans=[]
    for(let i=0;i<str.length;i++){
        for(let j=i;j<str.length;j++){
           let ss= str.slice(i,j+1)
            if(ss.includes("a")||ss.includes("e")||ss.includes("i")||ss.includes("o")||ss.includes("u")){
                ans.push(ss)
            }
        }
    }
    return ans
}
console.log(printsubstringswithvowels("hello"))



//or 

function printsubstringswithvowelswithoutincludes(str)
{
    let ans=[]
    for(let i=0;i<str.length;i++){
        for(let j=i;j<str.length;j++){
           for(k=i;k<=j;k++){
            if(str[k]=="a"||str[k]=="e"||str[k]=="i"||str[k]=="o"||str[k]=="u"){
                ans.push(str.slice(i,j+1))
                break
            }
        }
    }
    }
    return ans
}
console.log(printsubstringswithvowelswithoutincludes("hello"))



// find largest substring contain vowels

function findlargestsubstringcontainvowels(str)
{
    let ans=[]
    let current=''
    for(let i=0;i<str.length;i++){
        for(let j=i;j<str.length;j++){
               let ss= str.slice(i,j+1)
                  if(ss.includes("a")||ss.includes("e")||ss.includes("i")||ss.includes("o")||ss.includes("u")){
                     ans.push(ss)
            }
                  if(ss.length>current.length){
                    current=ss
            }
        }
    }
    return current
}
console.log(findlargestsubstringcontainvowels("hello"))
        


// // to print all palindrome substring

function printallpalidrome(str){

}

// to print all substring with only vowels

function printallsubstringwithonlyvowels(str){

}

// to print largest substring containing only vowels

function printlargestsubstringcontainingonlyvowels(str){


}

// to find all substring containing target k times

function findallsubstringcontainingtargetktimes(str,target, k){


}