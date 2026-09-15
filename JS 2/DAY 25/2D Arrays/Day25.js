// // special matrix

// function special(matrix, n){
//   for(let row=0;row<n;row++){
//     for(let col=0;col<n;col++){
//       if(row==col||col==n-row-1){
//         if(matrix[row][col]==0)
//         {
//           return false
//         }
//       }
//       else{
//         if(matrix[row][col]!=0){
//           return false
//         }
//       }
//     }
//   }
//   return true
// }
// console.log(special())


// // Print Boundary Anti Clockwise

// function printBoundaryAntiClockwise(mat){
//   let str=''
//   for(let i=0;i<mat.length;i++){
//     str+=mat[i][0]+" "
//   }
//   for(let i=1;i<mat[0].length;i++){
//     str+=mat[mat.length-1][i]+" "
//   }
//   for(let i=mat.length-2;i>=0;i--){
//     str+=mat[i][mat[0].length-1]+" "
//   }
//   for(let i=mat[0].length-2;i>0;i--){
//     str+=mat[0][i]+" "
//   }
//   console.log(str)

// }
// printBoundaryAntiClockwise([
//   [1,2,3,4],
//   [5,6,7,8],
//   [9,10,11,12],
//   [13,14,15,16]
// ])



// function printBoundaryClockwise(mat){
//   let str=''
//   for(let i=0;i<mat.length;i++){
//     str+=mat[0][i]+" "
//   }
//   for(let i=1;i<mat[0].length;i++){
//     str+=mat[i][mat.length-1]+" "
//   }
//   for(let i=mat.length-2;i>=0;i--){
//     str+=mat[mat[0].length-1][i]+" "
//   }
//   for(let i=mat[0].length-2;i>0;i--){
//     str+=mat[i][0]+" "
//   }
//   console.log(str)

// }
// printBoundaryClockwise([
//   [1,2,3,4],
//   [5,6,7,8],
//   [9,10,11,12],
//   [13,14,15,16]
// ])


