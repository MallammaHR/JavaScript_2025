let numbers = [1,2,3,4,5,6];
let newNum = numbers.map(e => e+2);
console.log(newNum.length)
console.log(newNum);

//sqaureroot
let sqrNum =  numbers.map(ele => ele * ele);
console.log((sqrNum));
console.log((sqrNum.length));

let words = ['hello', 'world','javascript','playwright'];
let upString = words.map(ele =>ele.toUpperCase());
console.log((upString.length));
console.log(upString);

//get the first letter of each worda
let firstLette=words.map(ele=>ele[0]);
console.log(firstLette);

//concatination
let newWords = words.map(ele =>ele + '$');
console.log(newWords);

let newWord=words.map(ele=>ele+'mallu');
console.log(newWord);

let links = ['help','contact','music','prime'];
console.log(links.map(ele=>'amazon'+ele));