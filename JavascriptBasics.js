//data types 
let name = 'Taanvi' ;
let age = 5 ;
//console.log(name + ' ' + age);

//primitive data types-number,string,boolean,null,undefined
let s1 = 'Taanya';
let num = 30;
let salaray = 12.33;
let flag = true;
let isActive =  false;
let price;
let wheels =  undefined;
let model =null;

console.log(typeof(s1));//string
console.log(typeof(num));//number
console.log(typeof(salaray));//number 
console.log(typeof(flag));//boolean
console.log(typeof(isActive));//boolean
console.log(typeof(price));//undefined
console.log(typeof(wheels));//nundefined
console.log(typeof(model));//type of null---object--esisting in JS

// //Reference data types
//1.objects
 
let user=
{
name :"Tom",
age : 35
};
console.log(user);

let names={fierst_name:'Tannaya',second_name:'Taanvi',third_name:null};
console.log(names.fierst_name);
console.log(names.second_name);
console.log(typeof(names.third_name));
// //to access the above properties either we can use dot notataion or bracket notataion
// //dot-notation
console.log(user.name);
console.log(user.age);

// //bracket-notation 
// user['name']='Mary';
// console.log(user.name);

// //Arrays
let languages = ['java','javascript'];
console.log(languages.length);
console.log(languages); 

// languages[2]='Ruby';
 console.log("Languages " + languages[0]);

//function
 function add(a,b)
 {
    
    return a + b;
 }
  let res = add(3,4);
  console.log(res);

// //zero parmater based function
// function getName()
// {
//     console.log("This is my function");

// }
// getName();

// //parameter based function
// function greet(name,age){

//     console.log(' hello ' + name + ' ' +age);
// }
// greet('Mallu',23);

// //sqaure rroot function
// function squareRoot(num){
//     let root = num * num;
//     return root;
// }
// console.log(squareRoot(2));



