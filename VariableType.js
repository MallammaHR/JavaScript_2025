var a=10;//globally declared
function test(){
    var a=20;
    console.log(a);//20
    if(true){
        var a=30;
        console.log(a);//30
        
    }
     console.log(a);//30
}
test();
 console.log(a);//10

 var number=30;
 var number =40;
 console.log(number);
 console.log("===========");
 var browser="chrome";
 var browser="firefox";
 console.log(browser);
 //de decalrtion is allowed 
 console.log("===========");
 var t=30;
 t=40;
 console.log(t);
 //reassignment  is allowed 

 //hoisting
 console.log(num);
 var num=10;
 console.log("********************************************");
 
 let b=10;//block scoped 
 function test(){
    let b = 20;
    console.log(b);//20
    if(true)
    {
        let b=40;
        console.log(40);//40
    }
 }
 console.log(b);//10
 test();
 console.log(b);//10

 