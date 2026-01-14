//destructring of array
let products = ['macbook','keyboard','imac'];
let [a,b,c,d] =products;
console.log(a);
console.log(d);

let[x='sim',y,z]=products
console.log(x);

//destructring of objects
 let person = {
    name:'tom',
    age:30,
    salary : 12.45,
    isActive :true
 }

  let {name,age,salary}=person
  console.log(name);
  console.log(age);

  let user ={
    name :'roopa',
    age:40,
    city:'Pune',

  }

  //design
  function getInfo({name,city}){
    console.log(name);
    console.log(city);
  }

  //call the function 
  getInfo(user)//call by ref
  
