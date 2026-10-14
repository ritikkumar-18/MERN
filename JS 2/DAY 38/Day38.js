let str="racecar"
let arr=new Array(26).fill(0)
for(let item of str){
    arr[item.charCodeAt(0)-97]++
}
console.log(arr)

for(let i=0;i<arr.length;i++){
    console.log(String.fromCharCode(i+97)+" : "+arr[i])
}