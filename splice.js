//splice == add/remove the element from the specific array
//splice(start,deleteCount,item1,iytem2....);


let cart =['apple','banana','orange','grape','kiwi'];
//remove 1 element at index 2
let sp = cart.splice(2,1,'avacoda','pineapple');
console.log(sp);//orange
console.log(cart);//apple,bannan,grape,kiwi

console.log("******************************************************");
let cart1 =['apple','banana','orange','grape','kiwi'];
//remove 3 elemenst startinf from index 3
cart1.splice(2,0);
console.log(cart1);//apple,bana
 console.log("******************************************************");
let cart2 =['apple','banana','orange','grape','kiwi'];
//remove from the end =-ve index
//remove last two elements
cart2.splice(-2,2);
console.log(cart2);//apple,bana,ornage
 console.log("******************************************************");
 //add mulitple elements
 let numb = [4,5,6];
 numb.splice(0,0,1,2,3,4);
 console.log(numb);

/*
1. How would you design a scalable Selenium automation framework using Java and TestNG?
2. Explain the Page Object Model (POM).
3. How do you manage test execution across different browsers and environments like QA, UAT, and Staging?
4. How do you run parallel tests in TestNG and avoid thread-safety issues?
5. How do you handle dynamic elements with changing IDs?
6. Can you automate file upload/download in Selenium? What approach or tools do you use?
7. How do you handle alerts, popups, and iframes?
8. How do you capture screenshots on test failures and attach them to Extent Reports?
9. How do you debug flaky or intermittent test failures?
10. Have you worked with Rest Assured or Postman for API automation?
11. How do you validate a JSON response using Java?
12. Different waits in Selenium — when to use implicit, explicit, or fluent waits
13. Difference between Jenkins freestyle jobs and pipeline scripts
14. How to integrate your Selenium suite with Jenkins or GitHub Actions
15. How to implement data-driven testing using Excel, CSV, or JSON
16. Strategies to keep test scripts reusable and maintainable as the project grows
17. Write a Java program to reverse a string or check for a palindrome
*/