// 2D arrays and 2D matrix

let arr=[[1,2,3],[4,5,6],[7,8,9]]
console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

console.log(arr[0][0])
console.log(arr[0][1])
console.log(arr[0][2])
console.log(arr[1][0])
console.log(arr[1][1])
console.log(arr[1][2])
console.log(arr[2][0])
console.log(arr[2][1])
console.log(arr[2][2])


for(let i=0;i<3;i++){
    let str=""
    for(let j=0;j<3;j++){
        console.log(i,j)
    }

}


// print 2D array using loops and also hollow them 
let arr1=[[1,2,3,4],[5,6,7,8,9],[11,12,13,14,15,16]]
for(let row=0;row<arr1.length;row++){
    let str=''
    for(let col=0;col<arr1[row].length;col++)// here arr1[row].length prevents us to do hard code and columns runs till row[0] length
        {
        if(row==0||row==arr1.length-1||col==0||col==arr1[row].length-1) // to hollow te array if remove it prints the whole array
            {
            str+=arr1[row][col]+' '
        }
        else{
            str+=' '
        }
    }
    console.log(str)
}


// // column wise 


let array = [
    [1, 2, 3, 4],
    [4, 5, 6, 7],
    [8, 9, 20, 30]
];

let str = "";

for (let j = 0; j < array[0].length; j++) {
    for (let i = 0; i < array.length; i++) {
        str += array[i][j] + " ";
    }
}

console.log(str);