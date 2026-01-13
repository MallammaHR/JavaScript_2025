
let num =[ 1,2,3,4,5,6,,7,8];

    if(num%2==0)
    {
        console.log("Number is Even");
    }
    else{
        console.log("Number is odd");
    }
 function sqr(number){
    let root = number*number;
    console.log(root);
 }
 sqr(2);

 function add(a,b){
    let sum = a+b;
    console.log(sum);
 }
 add(3,2);

 //anonymous function
 let mul = function(a,b){
    return a*b;
 }
 let res=mul(2,3);
 console.log(res);

 let sub = (a,b)=>a-b;
 let res1= sub(9-3);
 console.log(res1);