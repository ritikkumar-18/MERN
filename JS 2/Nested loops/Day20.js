//Nested loops 
// to print squares stars

let n=3
for(let row=1;row<=n;row++){
    let str=''
    for(let stars=1;stars<=n;stars++){
        str+=' *'
    }
    console.log(str)
}


// to print number like 111, 222, 333

let k=3
for(let rows=1;rows<=k;rows++){
    let str1=''
    for(let col=1;col<=k;col++){
        str1+=' '+rows
    }
    console.log(str1)
}


// to print number like 123 123 123

let m=3
for(let rowss=1;rowss<=m;rowss++){
    let str2=''
    for(col1=1;col1<=m;col1++){
         str2+=col1}
        console.log(str2)
}   


// to print number like 123 456 789

let p=3
let count=1
for(let ro=1;ro<=p;ro++){
    let str3=''
    for(let c=1;c<=p;c++){
        str3+=count
        count++
    }
    console.log(str3)
}




// for hollow square star pattern


let a=5
for(let r=1;r<=a;r++){
    let str4=''
    for(let c=1;c<=a;c++){
        if(r==1 || r==a || c==1 || c==a){
            str4+='* '
        }else{ 
            str4+='  '
        }   
}
console.log(str4)
}


// to print AAAA BBBB CCCC DDDD
let b=5
for(let r1=1;r1<=b;r1++){
    let str5=''
    for(let c1=1;c1<=b;c1++){
        str5+=String.fromCharCode(64+r1)+' '
    }  
    console.log(str5)
 }



// to print ABCD EFGH IJKL MNOP
let c=5
let count1=1    
for(let r2=1;r2<=c;r2++){
    let str6=''
    for(let c2=1;c2<=c;c2++){
        
        str6+=String.fromCharCode(64+count1)+" "
        count1++
    }
    console.log(str6)

}



// hollow squares in number forms

let d=5
for(r3=1;r3<=d;r3++){
    let str7=' '
    for(let c4=1;c4<=d;c4++){
        if(r3==1||r3==d|| c4==1||c4==d){
            str7+=c4+" "
        }
        else{
            str7+='  ' 
        }
    }
    console.log(str7)
}



// hollow squares in alphabet forms
let e=5
for(r4=1;r4<=e;r4++){
    let str8=' '
    for(let c5=1;c5<=e;c5++){
        if(r4==1||r4==e|| c5==1||c5==e){
            str8+=String.fromCharCode(64+c5)+" "
        }
        else{
            str8+='  ' 
        }       
    }
    console.log(str8)
}

// to print diagonal stars

let f=6
for(let r5=1;r5<=f;r5++ ){
    let str9=''
    for(let c6=1;c6<=f;c6++){
        if(r5==c6){
            str9+='* '
        }
        else{
            str9+='  '
        }
    }
    console.log(str9)
}


// to print reverse diagonal stars

let g=6
for(let r6=1;r6<=g;r6++){
    let str10=''
    for(let c7=1;c7<=g;c7++){
        if(r6+c7==g+1){
            str10+='* '
        }
        else{
            str10+='  '
        }   }
    console.log(str10)}




// let g=6
// for(let r6=1;r6<=g;r6++){
//     let str10=''
//     for(let c7=1;c7<=g;c7++){
//         if(r6==1||c7==1||r6==g||c7==g||r6==c7||(c7=g-r6+1)){
//             str10+='* '
//         }
//         else{
//             str10+='  '
//         }   }
//     console.log(str10)}
