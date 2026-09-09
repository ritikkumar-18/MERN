// Diamond pattern

let n=5
for(let i=1;i<=n;i++){
    let str=""
    for(let j=1;j<=n-i;j++){
        str+="  "
    }   

    for(let k=1;k<=2*i-1;k++){
        str+="* "
    }  
    console.log(str) 
}

// // or

// let n=5
// let spaces=n-1
// let stars=1
// for(let i=1;i<=n;i++){
//     let str=""
//     for(let sp=1;sp<=spaces;sp++){
//         str+="  "
//     }
//     for(let st=1;st<=stars;st++){
//         str+="* "
//     }
//     console.log(str)
//     spaces--
//     stars+=2
// }




// hollow diamond

let n1=5
let spaces1=n1-1
let stars1=1
for(let i=1;i<=n1;i++){
    let str=""
    for(let sp=1;sp<=spaces1;sp++){
        str+="  "
    }
    for(let st=1;st<=stars1;st++){
        if(i==1||st==1||st==stars1||i==n1){
            str+="* "
        }
        else{
            str+="  "
        }
    }
    console.log(str)
    spaces1--
    stars1+=2
}



// inverted diamond

let a=5
let spaces2=0
let stars2=2*a-1
for(let i=1;i<=a;i++){
    let str=''
    for(sp1=1;sp1<=spaces2;sp1++){
        str+="  "
    }
    for(let st=1;st<=stars2;st++){
        str+="* "
    }
    console.log(str)
    spaces2++
    stars2-=2
}

// inverted hollow diamond
let w=5
let space=0
let star=2*w-1
for(let i=1;i<=w;i++){
    let str=" "
    for(let sp=1;sp<=space;sp++){
        str+="  "
    }
    for(let st=1;st<=star;st++){
        if(i==1||st==1||st==star){
            str+="* "
        }
        else{
            str+="  "
        }
    }
    console.log(str)
    space++
    star-=2
}



// // kite pattern

let b=5
let stars=1
let spaces=(b-1)/2

for(let i=1;i<=b;i++){
    let str=''
    for(let sp=1;sp<=spaces;sp++){
        str+="  "
    }
    for(let st=1;st<=stars;st++){
        str+="* "
    }
    console.log(str)

    if(i<=Math.floor(b/2)){
        spaces--
        stars+=2
    }
    else{
        spaces++
        stars-=2
    }
}





// // pyarmid inverse and right together

let z=3
let spac=z
let sta=1
for(let i=1;i<=(z*2)+1;i++){
  let str=""
  for(let sp=1;sp<=spac;sp++){
    str+="  "
  }
  for(let st=1;st<=sta;st++){
    str+="* "
  }
  console.log(str)
  if(i<=z){
    spac--
    sta+=2
  }
  else{
    sta-=2
    spac++
  }
}


// // hollow inverse and right pyramid together


let y=5
let spac1=y
let star3=1
for(let i=1;i<=(y*2)+1;i++){
  let str=""
  for(let sp=1;sp<=spac1;sp++){
    str+=" "
  }
  for(let st=1;st<=star3;st++){
    if(st==1||st==star3){
    str+="* "
  }else{
      str+=" "
  }
  }
  console.log(str)
  if(i<=y){
    spac1--
    star3+=2
  }
  else{
    star3-=2
    spac1++
  }
}


// // hourglass pattern

let x=5
let s=0
let star4=x
for(let i=1;i<=x;i++){
    let str=""
    for(let sp=1;sp<=s;sp++){
        str+="  "
    }

    for(let j=1;j<=star4;j++){
        str+="* "
    }
    console.log(str)
    if(i<=Math.floor(x/2)){
        s++
        star4-=2
    }
    else{
        s--
        star4+=2
    }
 }


// // hollow hourglass


let v=5
let spa=0
let star5=v
for(let i=1;i<=v;i++){
    let str=""
    for(let sp=1;sp<=spa;sp++){
        str+="  "
    }

    for(let j=1;j<=star5;j++){
        if(i==1||j==1||i==v||j==star5){
            str+="* "
        }
        else{
            str+="  "
        }
    }
    console.log(str)
    if(i<=Math.floor(v/2)){
        spa++
        star5-=2
    }
    else{
        spa--
        star5+=2
    }
 }



// // another example

let u=5
let spa1=u-2
let stt=1
for(let i=1;i<=u;i++){
    let str=""
    for(let star=1;star<=stt;star++){
        str+="* "
    }
    for(let space=1;space<=spa1;space++){
        str+="  "
    }
    for(let star2=1;star2<=stt;star2++){
        if(star2==stt&&i==(u+1)/2) continue
        str+="* "

    }
    console.log(str)
    if(i<u/2){
        spa1-=2
        stt++
    }
    else{
        spa1+=2
        stt--

    }
}