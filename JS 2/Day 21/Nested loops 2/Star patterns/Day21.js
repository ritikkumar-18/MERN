// // to print 1 on even row and col and 0 in odd row and col

let n=5
let count=1
for(let r=1;r<=n;r++){
  let str=''
  for(let c=1;c<=n;c++){
    if((r+c)%2==0){
      str+="1 "
    }
    else{
      str+="0 "
      
    }
  }
  console.log(str)
}


// to print rectangle 

let m=6
let l=3
for(let r=1;r<=l;r++){
  let str=''
    for(let c=1;c<=m;c++){
        str+="* "
    }
    console.log(str)
}

// to print hollow rectangle

let a=2
let b=13
let count1=1
for(let i=1;i<=a;i++){
    let string=''
    for(let j=1;j<=b;j++){
        // if(i==1 || i==a || j==1 || j==b){
        //     string+="* "
        // }
        // else{
        //     string+="  "
        // }
        string+=String.fromCharCode(64+count1)+" "
        count1++
    }
    console.log(string)
}



//to print right angle triangle

let tri=4
for(let i=1;i<=tri;i++){
    let str=''
    for(let j=1;j<=i;j++){
        str+="* "
    }
    console.log(str)
}


//to print inverted right angle triangle

 let tri1=4
 for(let i=tri1;i>=1;i--){
    let str=''
    for(let j=1;j<=i;j++){
        str+="* "
    }
    console.log(str)  
    
}  



// to print right angled triangle and also inverted right angled triangle together

let tri2=4
 for(let i=tri2;i>=1;i--){
    let str=''
    for(let j=1;j<=i;j++){
        str+="* "
    }
    console.log(str)  
    
}  
for(let i=1;i<=tri2;i++){
    let str=''
    for(let j=1;j<=i;j++){
        str+="* "
    }   
    console.log(str)
}


// to print right angled triangle with numbers

let tri3=4
for(let i=1;i<=tri3;i++){
    let str=''
    for(let j=1;j<=i;j++){
        str+=i+" "
    }
    console.log(str)
}



// to print hollow triangle

let tri4=10
for(let i=1;i<=tri4;i++){
    let str=''
    for(let j=1;j<=i;j++){
        if(i==tri4 || j==1 || j==i){
            str+="* "
        }
        else{
            str+="  "
        }

    }
    console.log(str)

}

// to print inverted hollow triangle

let tri5=10
for(let i=tri5;i>=1;i--){
    let str=''
    for(let j=1;j<=i;j++){
        if(i==tri5 || j==1 || j==i){
            str+="* "
        }
        else{
            str+="  "
        }
    }
    console.log(str)
}


// or to print hollow inverted triangle

// let tri5=10
// for(let i=1;i<=tri5;i++){
//     let str=''
//     for(let j=1;j<=tri5-i+1;j++){
//         if(i==1||j==1||j==tri5-i+1){
//             str+="* "
//         }
//         else{
//             str+="  "
//         }
//     }
//     console.log(str)
// }


// to print 180 degree rotated right angled triangle
let tri6=10
for(let i=1;i<=tri6;i++){
    let str=''
    for(let j=1;j<=tri6-i;j++){
        str+="  "
    }
        for(let k=1;k<=i;k++){
            str+="* "
        }   
    console.log(str)
}


// to print 180 degree rotated inverted right angled triangle

let tri7=10
for(let i=tri7;i>=1;i--){
    let str=''
    for(let j=1;j<=tri7-i;j++){
        str+="  "
    }
    for(let k=1;k<=i;k++){
        str+="* "
    }
    console.log(str)
}


// or

// let triangle=10
// for(let i=1;i<=triangle;i++){
//     let str=''
//     for(let spaces=1;spaces<=i-1;spaces++){
//         str+="  "
//     }
//     for(let stars=1;stars<=triangle-i+1;stars++){
//         str+="* "
//     }
//     console.log(str)
// }

