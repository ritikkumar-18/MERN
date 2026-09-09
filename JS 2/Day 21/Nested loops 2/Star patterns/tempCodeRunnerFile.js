let triangle=10
for(let i=1;i<=triangle;i++){
    let str=''
    for(let spaces=1;spaces<=i-1;spaces++){
        str+="  "
    }
    for(let stars=1;stars<=triangle-i+1;stars++){
        str+="* "
    }
    console.log(str)
}


let n = 5;
let count = 1;

for (let i = 1; i <= n; i++) {

    let str = "";

    for (let space = 1; space <= i - 1; space++) {
        str += "  ";
    }

    for (let j = 1; j <= n - i + 1; j++) {
        str += String.fromCharCode(64 + count) + " ";
        count++;
    }

    console.log(str);
}