// number
// let num = 12345;
// let rev= 0;
// let lastDigit=0;
// while(num !==0){
// lastDigit = num % 10;
// rev=rev*10+lastDigit;
// num = Math.floor(num/10);

// console.log(rev)
// }
// console.log(rev)

// String

let str = 'tesla';
let rev = '';

for (let i =  str.length-1; i >=0; i--) {

    rev = rev+str[i]
    
}
console.log(rev)

