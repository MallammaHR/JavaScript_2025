let number =[1,2,3,4,5]//total=0,total+num=total
//in reduce we use two parameter --if we have two arguments we have to use varaibles then ==>
// let sub =(a,b )=>a-b;
//let sb= sub(4,3);
//sum opf all the number
let sum =number.reduce((total,num)=>total+num,0);
console.log(sum);

//multiply all the number=120
let mul = number.reduce((total,num)=>total*num,1);
console.log(mul);