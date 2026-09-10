
// // print table in ranges
// let start=1
// let end=10
// for(let i=start;i<=end;i++){
//   for(let j=1;j<=10;j++){
//     console.log(`${i} x ${j} = ${i*j}`)
//   }
// }


// print prime numbers in range

let starts=5
let ends=50

for(let i=starts;i<=ends;i++){
    let isPrime=true
    
    for(let j=2;j<=Math.sqrt(i);j++){
        if(i%j===0){
            isPrime=false
            break
        }
    }
    if(isPrime){
        console.log(`${i} is a prime number`)
    }
    else{
        console.log(`${i} is not a prime number`)
    }
}
