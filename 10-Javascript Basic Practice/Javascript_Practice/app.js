
// let quit="start";
// let array=[];
// let i=-1;

// while(quit!="quit")
// {

//     quiz=prompt("Please enter add,remove,list and quit");
//     if(quiz=="quit")                                                
//     {
//         //console.log("Remove hona ha");
//         quiz="quit";
//         break;

//     }
//     if(quiz=="add")
//     {
//         let task=prompt("Please enter a task for to do list");
//         console.log(task);
//         array[i++]=task;

//     }

//     if(quiz=="list")
//     {
//         console.log("Here Is the Complete list of your To Do LIst");
//         for(let i of array)
//         {
//             console.log(i);
//         }
//     }
//     if(quiz=="remove")
//     {

//     }

// }

// let array2=[2,3,4,7,3,5,9,5,2,4,3,3]
// let num=3;
// for(let i=0;i<=array2.length;i++)
// {
//     if(array2[i]==num)
//     {
//         console.log("huzaifa"+i);
//         array2.splice(i,1);
//         i--;

//     }
// }

// for(let i of array2)
// {
//     console.log(i);
// }
// let num=45;
// let count2=0;
// while(num>0)
// {
//     num=Math.floor(num/10);
//     count2++;
// }
// console.log("Total NUmber "+count2);

// let num=45954;
// let sum=0;
// while(num>0)
// {
//     let count2=num%10;
//     num=Math.floor(num/10);
//     sum=sum+count2;
// }
// console.log("Total Sum "+sum);

//find the factorial
// let sum=1;
// let factorial=7;
// while(factorial>0)
// {
//     sum=sum*factorial--;

// }
// console.log("Total Factorial ::"+sum);


//find the largest number in array with positive only

// const arr=[4,2,7,2,9,65,3,5,65,45,98,76,87]
// let min=-1;

// for(let i of arr)
// {
//     i>min?min=i:"do nothing";

// }
// console.log(min);


//JAVASCRIPT PART 5

//Guess Game

// let max=prompt("Enter a max number");
// let guess=prompt("Enter a guess number");
// const random= Math.floor(Math.random()*max)+1;
// if(guess==random)
// {
//     console.log("Your guess is correct");
// }
// else{
//     console.log("WRong");
//     console.log("The original random number is :: "+random);
//     console.log("While You have enter a::"+guess);

// }

//Practice Question


//Question No::1

// let random=Math.floor(Math.random()*6)+1;
// console.log("The Dice Roll Have Number :: "+random);


//Question no 2

// const car={
//     name: "BMW",
//     model: "g5yhtfj",
//     color: "greeen"
// }
// console.log("The Car Name is:: "+car.name);

//Question No 3
//  const person={
//     name:"HUzaifa Saeed",
//     age:21,
//     city: "Abbtobbad"
//  }
//  person.city="New York";
//  person.country="United State";
// for(let x in person)
// {
//     console.log(person[x]);
// }



//JAVASCRIPT PART 6 FUNCTION

//Practice Question
//Question No 1

// function table(a)
// {
//     for(let i=0;i<=10;i++)
//     {
//         console.log(a+" * "+i+" = "+a*i);
//     }
// }
// table(2);

//Question No 2

// function sumofNnumbmer(n)
// {
//     let sum=0;
//     for(let i=1;i<=n;i++)
//     {
//         sum+=i;
//     }
//     return sum;
// }

// console.log(sumofNnumbmer(4));

//Question No 3 unlimited arguments

// function unlimitedarguments()
// {
//     let concat="";
//     for(let i=0;i<arguments.length;i++)
//     {
//         concat+=arguments[i];

//     }
//     return concat;
// }

// console.log(unlimitedarguments("Huzaifa   ","Saeed ","Boht ACha bacha ha"));

//Qs1. Write a JavaScript function that returns array elements larger than a number.

// console.log(largernum(6));

// function largernum(num)
// {
//     const arr=[4,96,2,7,8,5];
//     const copy=[];
//     for(let i of arr)
//     {
//         //console.log(i);
//         if(i>num)
//         {
//            // console.log("jdsjdsd");
//             copy.push(i); 
//         }
//     }
//     return copy;
// }


// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh”
// ans = “abcdefgh”

// const str= "abcdabcdefgggh";
// let copy="";
// let count=0;

// for(let i of str)
// {
//     for(let j of copy)
//     {
//         if(i==j)
//         {
//             count++;
//         }

//     }
//     if(count==0)
//     {
//         copy+=i;
//     }

//     count=0;
// }
// console.log(copy);

// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output : "United States of America"

// function longestcountry()
// {
//     let lenght1=0;
//     let str="";
//     for(let i of arguments)
//     {
//         //console.log(i.length);
//         if(i.length>lenght1)
//         {
//             lenght1=i.length;
//             str=i;
//         }

//     }
//     return str;

// }

// console.log(longestcountry("Australia", "Germany", "United States of America"));

//  arr=[4,5,3,7,5,8,3,73,5,35,35];
//  arr2=[10,20,30,50,100];
//  arr3=["Huzaodad","Ammar","Rafay","Talha","basit"];

//  let students=[
//     {
//         name: "Huzaifa",
//         marks: 98
//     },
//     {
//         name: "Ammar",
//         marks: 65

//     },
//     {
//         name: "RAfay",
//         marks: 89
//     }
// ];



// let ref= (e) =>
// {
//     console.log(e);
// }
// //For Object ForEach
// students.forEach((el) =>{
//     console.log(el.name);
// });
// //For Array ForEach
// arr.forEach((el) =>{
//     console.log(el);
// });


// //MAP Practice
// // For Array
// const double= arr.map((el) =>{
//     return el*el;
// });

// //For Object
// const gpa= students.map((e) =>{
//     return (e.marks*100)/50;
// })

// //Filter Practice
// //filter array elemnt on the basis of condition
// let filter= arr.filter((el)=> {
//     return el % 2!=0;
// })

// Reduce Practicecccccccccccccccc

// let finalval= arr.reduce(maxfunction);

// function maxfunction(res,el)
// {
//     if(el>res)
//     {
//         return el;

//     }
//     else{
//         return res;
//     }
// }
// console.log(finalval);

//Practice Question 1

// let finalresult=arr2.every(everyfunction);
// function everyfunction(el)
// {
//     return el%10==0;
// }

// Practice Excersixe 1
// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array
// const square= arr.map((e) =>{
//     return e*e;
// });
// let sum=arr.reduce((res,el) =>{
//     return res+el;
// });
//  let average= sum/arr.length;

// Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5.

// const sum5=arr.map((e) =>{
//     return e+5;
// })

// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array

// const arrayuppercase= arr3.map((e)=>{
//       return e.toUpperCase();
// })

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.

// let newArrray=doubleAndReturnArgs(arr,111111111,111111111111,1232323,43425435,453453453,5345345345);
// function doubleAndReturnArgs(a,...args){
//     return a+args;

// }

// let container= document.getElementById("container");
// console.log("djhjd");

// let paragraph1=document.createElement("p");
// paragraph1.innerText="Hey I'm Red";
// // paragraph1.style.color="red";
// paragraph1.classList.add("paragraph");

// container.appendChild(paragraph1);

// let heading1=document.createElement("h3");
// heading1.innerText="I'm blue h3";
// // heading1.style.color="blue";
// heading1.classList.add("heading");

// container.appendChild(heading1);

// let div=document.createElement("div");
// // div.style.borderColor="black";
// // div.style.backgroundColor="pink";
// div.classList.add("div_one");

// container.appendChild(div);

// let heaedingdiv=document.createElement("h1");
// heaedingdiv.innerText="I'm in a div";

// let paragraphdiv=document.createElement("p");
// paragraphdiv.innerText="Me TOO";

// div.appendChild(heaedingdiv);
// div.appendChild(paragraphdiv);


// //Qs1. Create a new input and button element on the page using JavaScript only. Set the
// // text of button to “Click me”;

// let inputtext=document.createElement("input");
// inputtext.setAttribute("type","text");
// container.appendChild(inputtext);
// let btn=document.createElement("button")
// btn.innerText="Click Me"
// container.appendChild(btn);

// //Qs2. Add following attributes to the element :
// // - Change placeholder value of input to “username”
// // - Change the id of button to “btn”
// inputtext.setAttribute("placeholder","username");
// btn.setAttribute("id","btn");

// // Qs3. Access the btn using the querySelector and button id. Change the button
// // background color to blue and text color to white.
// let btn2=document.querySelector("#btn");
// btn2.classList.add("btn_style");

// // Qs4. Create an h1 element on the page and set its text to “DOM Practice” underlined.
// // Change its color to purple.
// let h1_heading=document.createElement("h1");
// h1_heading.innerText="DOM Practice";
// container.appendChild(h1_heading);
// h1_heading.classList.add("h1_heading");
// // Qs5. Create a p tag on the page and set its text to “Apna College Delta Practice”,
// // where Delta is bold.

// let paragrap_p1=document.createElement("p");
// paragrap_p1.innerHTML="Apna College <strong>Delta</strong> Practice";
// container.appendChild(paragrap_p1);

//Generate RGB value

// let btn=document.querySelector("button");
// btn.addEventListener("click",rgbvalue);
// function rgbvalue()
// {
//     let i= Math.floor(Math.random()*255);
//     let j= Math.floor(Math.random()*255);
//     let k= Math.floor(Math.random()*255);
//     let h1=document.querySelector("h1");
//     h1.innerText="rgb("+i+","+j+","+k+")";

//     let div2=document.getElementById("color_div");
//     let div3=document.querySelector("sample");
//     div2.style.backgroundColor="rgb("+i+","+j+","+k+")";

//     console.dir(div2);

// }


//TO DO APP
// let btnsubmit = document.getElementById("submitbutton");
// btnsubmit.addEventListener("click", function (event) {
//     event.preventDefault();
//     //Make a delete Button
//     let deletebutton = document.createElement("button");
//     deletebutton.innerText = "delete";
//     deletebutton.classList.add("delete1");
//     //Add Event Listner to new Element,Other Method is Event Delegation
//     // deletebutton.addEventListener("click", delete_function);




//     let inputtext = document.querySelector("#inputtext");
//     let ulclass = document.querySelector(".ulclass");

//     //Maka new Li Item
//     let newLi = document.createElement("li");
//     newLi.innerHTML = inputtext.value;
//     //Add delete and li item
//     newLi.append(deletebutton);

//     ulclass.appendChild(newLi);
//     inputtext.value = "";
// });
//Event Delegation
// let ul=document.querySelector("ul");
// ul.addEventListener("click",function(event){
//     console.dir(event.target.nodeName);
//     if(event.target.nodeName=="BUTTON")
//     {
//         event.target.parentNode.remove();
//         console.log("Event Trigger");
//     }

// });


//Funtion to delete List Task
// let deletebtn = document.querySelectorAll(".delete1");
// for (btn of deletebtn) {
//     btn.addEventListener("click", delete_function);
// }

// function delete_function(event) {
//     this.parentNode.remove();
// }

h1=document.querySelector("h1");

// setTimeout(function(){
//     changeColor("red");
//     setTimeout(function(){
//         changeColor("blue")
//         setTimeout(function(){
//             changeColor("green");

//         },1000);


//     },1000);
// },1000);

setTimeout(changeColor,1000);

function changeColor(color){
    h1.style.color=color;
}

