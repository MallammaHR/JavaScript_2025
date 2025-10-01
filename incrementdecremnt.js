//post-incremnt:++
let a=2;
let b=a++;
console.log(a);//3
console.log(b);//2

let m=-999;
let n=m++;
console.log(m);//-998
console.log(n);//-999

//pree-increment
let p=2;
let q=++p;
console.log(p);//3
console.log(q); //3

//post-decrement
let k=-89;
let h=k--;
console.log(k);//-90
console.log(h);//-89

//pre-decrement
let v=2;
let z=--v;
console.log(v);//1
console.log(z);//1

let total=100;
console.log(total++);//100;
console.log(total);//101

let num=1000;
console.log(++num);//1001
console.log(num);//1001

let tt='a';
console.log(++tt);
console.log(tt++);

let st='5';
console.log(++st);
console.log(st++);

//some  more examples
let i=11;

let j=i++ + ++i;// initailly i =11,i+1=12, + ,i=12,
console.log(i);//
console.log(j);

let a1=11;
let b1=22;
let c1=a1+b1+a1++ +b1++ + +a1 + ++b1;
console.log(a1);//
console.log(b1);//
console.log(c1);

let s = 0;
let w = s++ - --s + ++s -s--;
console.log(s);
console.log(w);

let m1=0;
let n1=0;
let p1=--m1 * --n1*n1--*m1--;
console.log(m1);
console.log(n1);

let d1=1.5;
let D1=2.5;
let res=d1++ + D1++;
console.log(res);