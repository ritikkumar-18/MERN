// // for loop
 
for(let i=1; i<=10; i++)
{
    console.log(i)
}

// // other syntax of for loop
 let j=1
 for(;j<=10;j++)
 {
    console.log(j)
 }
 
//  // another syntax of for loop

 let k=1
 for(;k<=10;)
 {
    console.log(k)
    k++
 }

 // printing table of any number using for loop

 //let n=prompt("Enter a number ")
 
 for(let i=1;i<=10;i++){
    console.log(`${n} x ${i} = ${n *i}`)
 }

 // print even number

 for(let i=1;i<=100;i++){
    if(i%2==0){
        console.log(`${i} is a even number`)
    }
    else{
        console.log(`${i} is a odd number`)
    }
 }


 // Break in loops

 for (let i=1; i<=10; i++){
    if(i%3==0){
        break // it exits/stops the loop 
    }
    console.log(i)
 }

 // Break in while loop

 let i=1
 while(i<=10){
    if(i%3==0){
        break
    }
    console.log(i)
      i++
 }



 // continue is for loop

 
 for (let i=1; i<=10; i++){
    if(i%3==0){
        continue // it skips that condition and move on
    }
    console.log(i)
    //  i++ if it is written here it also goes infinitely
 }

// continue in while loop

let i=1
while(i<=10){
    if(i%3==0){
        i++ // if this was written below continue the loop run infinitely
        continue
    }
    console.log(i)
    i++

    // i++ here it goes infinitely
}


