let n = [];
console.log(n);

//Array literals
let empData = ['manisha', 10,20,40 ,20.33,false,'t'];
console.log(empData);
console.log(empData.length);
console.log(empData[0]);
console.log(empData[8]);

//1.array constructor
let number = new Array(5);//single array
console.log(number.length);

let num =  new Array(2,3,5,6,7)//behave like normal array
console.log(num);

let num2= [3,5,6,8,9,0];
console.log(num2);

let num3 = Array.of(4);
num3 = [100,200,300,400,500,60,0];
console.log(num3);

let num4 = Array.of(4,5,6,7,8,9);
console.log(num4);

console.log("=============================================");

let a1 = new Array(5);
a1 =[3,4,5,7,8,9,0,5,6,7,8,9,0,1,10,6,3,7,3,4,5];
console.log(a1); 

let a2 = Array.of(1,2,3,4,5);
console.log(a2);

//adding array in Javascript -push()-it will be added at the end
a2.push(9,7,29);
//unshift-to add at the begining
a2.unshift('manish','Taanua');
console.log(a2);
//to remove the elements from the array
let browser = ['chrome','safari','edge','firefox','opera'];
console.log(browser.length);
//remove from the end-pop()
console.log(browser.pop());
console.log(browser);
//remove from the begining-shift()
console.log(browser.shift());
console.log(browser);
let a4 =[];
console.log(a4.pop());

console.log("**********************************************************************");

let mybrowser =['opera','chrome','edge','firefox','safari'];

for(let i = 0 ;i<mybrowser.length-1;i++)
{
    console.log(mybrowser[i]);
}

for (let ele of mybrowser)
{
    if(ele === 'edge')
    {
        console.log(ele);
        break;
    }
    console.log(ele);
}

for(let i =mybrowser.length-1;i>=0;i--)
{
//console.log(mybrowser[i]);
}
  

console.log(mybrowser.reverse());


for(let ele1 in mybrowser)
{
    console.log(ele1+ "==" + mybrowser[ele1]);
}

console.log('---------------------------------------------------');
let  data = ['appu','hippu','kippu','tippu','eppu'];

let senetnec = data.join('_');
console.log(senetnec);

let ar1=[2,3,4];
let ar2=[5,6,7];
let ar3 = [...ar1,...ar2];
console.log(ar3);
