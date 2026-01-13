//1 to 100
//1.while
//2.for
//3.do-while

//4.for ...in
//5.for ... of
//foreach
//case : 1
// let i=1;//nitialization
// while(i <= 10)//condtional statement
// {
//     console.log(i);
//    ///it will keep priniting the value 1111111111......... becuse i value is not incremented here...
 

// }

// //case=2
// while(i <= 10)
// {
//     console.log(i);//now i value will be increse 
//     i++;
//     //ca be written i++,++i,i=i+1

// }

// //case 3:how to break the loop in bewteen
// let i  = 1;
// while( i <= 10)
// {
//     if(i === 5)
//     {
//         console.log('bye!!!!')//nothing output beacue here I am not incrmenting th 'i' value
//         break;
//     }
// }

// //case 4:
// let i  = 1;
// while( i <= 10)
// {   
//     console.log(i);
//     if(i === 5)
//     {
//         console.log('bye!!!!')//nothing output beacue here I am not incrmenting th 'i' value
//         break;
//     }
//     i++;
    
// }

//case : 4
// let i  = 1;
// while( i <= 10)
// {   
//     console.log(i);
//     if(i === 5)
//     {
//         console.log('bye!!!!')//nothing output beacue here I am not incrmenting th 'i' value
//        // break;
//     }
//     i++;
//     break;//will break the entire loop
    
// }


//case : 5
let i  = 1;
while( i <= 10)
{   
    break;//will break the entire loop i will not go to the next step
    console.log(i);
    if(i === 5)
    {
        console.log('bye!!!!')//nothing output beacue here I am not incrmenting th 'i' value
       // break;
    }
    i++;
   
    
}


//case : 6//true
while(true)
{
    //console.log("Mallu Mani!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    break;
}

//case : 7 //1-true[any thing other than falsy values it will be considered as true ]
while('%')
{
    console.log("Mallu Mani!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    break;
}

//case:8
let k=1;
while(k <= 1)
{
    console.log('hi!!!!!!!!!!');
    if(k == 5)
    {
        console.log('bye!!!!!!!!!!!!');
        break;

    }
    k++;
}