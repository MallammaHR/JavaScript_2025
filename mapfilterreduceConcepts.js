let score = [85,92,67,78,95,43,88,76,88,82];
let passingscore = score.filter(ele=>ele>=70)
                        .map(ele=>ele+5)
                        .reduce((sum,ele)=>sum+ele,0)/score.length;
                    console.log(passingscore);

//get the long words (length>4)-->convert to upperCase--->join

let dict = ['WDIO','git','playwright','selenium','cypress'];