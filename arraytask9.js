
let array=[1,2,3,4,5,6,7,8]
for (let i = 2; i < array.length; i++) {
    let isPrime=true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0){
            isPrime=false;
        }
    }
    if (isPrime) console.log(i);

}