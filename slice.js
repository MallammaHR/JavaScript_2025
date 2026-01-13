//slice=portions of the array
let num = [1,2,3,4,5,6,7];
let n = num.slice(3,5);//slicing statr from index,4,5
console.log(n);
console.log(num);

let lastThree = num.slice(-3);
console.log(lastThree);


//slicing can  ve applied negative number as well -only in javascript
//if its positve [slice(2)=0,1] it will start from beimign with index 0,1,2....
//if its -ve number (slice(-2)=,.......,-3-2,-1(start from the last value from the array))
//if we give beyond the range then it will give the the whole array as it is--because of its low leve lanagauge

