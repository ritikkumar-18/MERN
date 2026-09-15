// // leet code problem no 54

// var spiralOrder=function(arr){
//     let left=0
//     let top=0
//     let right=arr[0].length-1
//     let bottom=arr.length-1
//     let ans=[]

//     while(left<=right&&top<=bottom)
//         {
//         if(left<=right&&top<=bottom){    
//           for(let i=left;i<=right;i++){
//            ans.push(arr[top][i])  
//     }
// }
//     top++
//         if(left<=right&&top<=bottom){    

//     for(let i=top;i<=bottom;i++){
//         ans.push(arr[i][right])
//     }
// }
//     right--
//         if(left<=right&&top<=bottom){    

//     for(let i=right;i>=left;i--){
//         ans.push(arr[bottom][i])
//     }
// }
//     bottom--
//              if(left<=right&&top<=bottom){    

//     for(let i=bottom;i>=top;i--){
//         ans.push(arr[i][left])
//     }
// }
//     left++
// }

//     return ans
// }

// console.log(spiralOrder([
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]))

// its reverse and 

// var reversespiralorder=function(arr){
//     let left=0
//     let right=arr[0].length-1
//     let top=0
//     let bottom=arr.length-1
//     let ans=[]
//     while(left<=right && top<=bottom){
//         for(let i=top; i<=bottom; i++){
//             ans.push(arr[i][left])
//         }
//         left++
//         if(left<=right&&top<=bottom){

//         for(let i=left; i<=right; i++){
//             ans.push(arr[bottom][i])
//         }
//        }
//         bottom--
//         if(left<=right&&top<=bottom){
//         for(let i=bottom;i>=top;i--){
//             ans.push(arr[i][right])
//         }
//     }
//         right--
//                 if(left<=right&&top<=bottom){
//                     for(let i=right;i>=left;i--){
//                         ans.push(arr[top][i])
//                     }
//                 }
//                 right++

//     }
//     return ans

// }
// console.log(reversespiralorder([
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]))