//size=reduces or same

let number =[ 1,2,3,4,5,6,,7,8]
let evenNumber = number.filter(ele=>ele%2==0);
console.log(evenNumber);

let oddNumnber=number.filter(ele=>ele%2 ==1);
console.log(oddNumnber);

let greaterNumber =number.filter(ele=>ele>=5);
console.log(greaterNumber);
 

let greatless = number.filter(ele=>ele>=3 && ele<=7)
console.log(greatless); 



let links= ['help','contact','music','prime','price']
let newString = links.filter(ele=>ele.length>=4)
console.log(newString);

let footer = ['amazon help','amazon contact','amazon music','amazon prime','price'];
let newFooter = footer.filter(ele=>ele.startsWith('amazon'));
console.log(newFooter);


let marks = [85,92,67,78,43,88,95];
let greaterMarsk = marks.filter(ele=>ele>=70);
console.log(greaterMarsk);



let mark = [-85,0,-9,92,-67,78,43,88,-95];
let positiveNum = mark.filter(ele=>ele>=0);
console.log(positiveNum);


let headers = ['amazon help','amazon contact','amazon music','amazon prime','price'];
let newHeader = headers.filter(ele=>ele.startsWith('amazon')).filter(ele=>ele.includes('prime'));
console.log(newHeader);
;
//let newWord = word.split('').filter(ch => ch !== 'a').join('');
let word = 'aaaaaajavascriptasaaaa';
//let newWord = word.replace(/a/g, '');
let newWord = word.match(/javascript/)[0];

//2.const newWord = word.includes('javascript') ? 'javascript' : null;
//3.const match = word.match(/javascript/i);

console.log(newWord);


