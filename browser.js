//Nested if conditon=if-if-if-else-if-if
let marks=75;

if(marks>=90)
{
    console.log("Grade-A");
    if(marks>=95){
        console.log("Grade-A++");
        if(marks===100){
            console.log("You are eleigible for scholarship");
        }
    }
}
else{
    if(marks>=80)
    {
        console.log("Grade=B+");
    }
    if(marks>=70)
    {
        console.log("Grade=B")
    }
}

////bug+perofrmace issue
// let browsername="chrome";
// if(browsername==='chrome')
// {
//     console.log("launch the chrome browsre");
// }
// if(browsername==='edge')
// {
//     console.log("launch the edge browsre");
// }
// if(browsername==='safari')
// {
//     console.log("launch the safari browsre");
// }
// if(browsername==='firefox')
// {
//     console.log("launch the firefox browsre");
// }
// else
// {
//     console.group("pla close the browser.................");
// }


console.log("=======================================================");
let browsername="firefox";
if(browsername==='chrome')
{
    console.log("launch the chrome browsre");
}
else if(browsername==='edge')
{
    console.log("launch the edge browsre");
}
else if(browsername==='safari')
{
    console.log("launch the safari browsre");
}
else if(browsername==='firefox')
{
    console.log("launch the firefox browsre");
}
else
{
    console.group("pla close the browser.................");
}