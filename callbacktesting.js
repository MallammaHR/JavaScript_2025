//callback hell:pyrmid of doom

//callback example
function startMachine(callback){
    console.log('start machine .........................');
   callback();
}
// Callback function using arrow function

startMachine(()=>{
    console.log('Done!!!!');
});

// Callback function using anonymous function 
startMachine(function(){
    console.log('pass!!!!!!!!!!');
})

function getInfo(callback){
    console.log('getting some Info.....');
    callback('mallu');
}
//Anonymous arrow callback function
getInfo((x)=>{
    console.log(x);
})


function print(callback){
    console.log('printing on console..................');
   // callback();it will pass the callback function but  whatever we mention inside the call back function will never execute
   
}

print(()=>{
    console.log('Done');
})



function getMarks(callback){
    console.log('hi!!!!!!!!!Getting marks..........');
    callback(200);
    return 500;
}


let t1 = getMarks((num)=>{
    console.log(num);
})
console.log(t1);



function openPage(url,callback){
console.log('app url : '+url);
let broswer=callback('Amazon Login Page');
console.log(broswer);
return true;
}

let page = openPage('https://www.amazon.com',(title)=>{
    console.log('getting th page title.....',title);
    return 'chrome';
})
console.log(page);
