console.log(10 == 10);  

 let a=10;
 let b=20;
 if(a>b)
 {
    console.log("pass");
 }
 else{
     console.log("hiii");
 }
 /////Unreachable code detected-not good way of wrinting program
 
 if(false)
 {
     console.log("bye!!");
 }
 else{
    console.log("heloo!!!!!!!!!");///Unreachable code detected
 }

 let isELementDisplayed=false;
 if(isELementDisplayed)
 {
    console.log("click on the element");
 }
 else{
    console.log("wait for the element ");
 }



 //JS suprotrs two operetaors when we want to compare two things:
 //==(loose-equality)=>check the value 
 //===(strict equality)=>check the value +Data tytpe

 let n1=10;//number
 let n2="10";//string

 console.log(n1==n2);//
 console.log(n1===n2);

 console.log(true==1);
console.log(true===1);

console.log(false==0);
console.log(false===0);

console.log(""==0);
console.log(""===0);

console.log([]==0);
//console.log([]===0);


//special case

console.log(null==undefined);//null=undefined,undefined==undefined[bug and its bit confusing]
console.log(null===undefined);//typrof(null)=object,undefined=undefine=>object===undefined=>false[best way of comaring the two thing is strict equality]


if(null===undefined)
{
    console.log("click on the Element");
}
else{
    console.log("close Brwoser");
}