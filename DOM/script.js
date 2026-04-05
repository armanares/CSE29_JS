const x=document.getElementById("p1");

// console.log(x);

// x.innerHTML="<b>Aaris</b>";

// const y=document.getElementsByClassName("p1"); // it return array

// const result=document.getElementsByClassName("p1"); 
// console.log(result);

// result[0].innerHTML="<b>Aaris</b>";
// result[1].innerHTML="<b>Arman</b>";

// const result3= document.getElementsByTagName("p1");
//  result3[0].innerHTML="<b>Aaris</b>";
//  result3[1].innerHTML="green"
//  result3[2].innerText="bluemy paragraph"

//  const test2=document.querySelector("#p1"); // it return first element
//   test2.innerHTML="<b>Aaris</b>";

//   //attributes

//   const x4=document.getElementById("p1").getAttribute("class");
//   console.log(x4);


//   //create element
//   Document.CreateElement("h2");
  


//events in javascript




//JSON(javascript object notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is commonly used for transmitting data between a server and a web application as an alternative to XML. JSON is built on two structures: a collection of name/value pairs (often realized as an object, record, struct, dictionary, hash table, keyed list, or associative array) and an ordered list of values (often realized as an array, vector, list, or sequence).

//for in loop 

// for of loop

// forEach loop

//map method    


//synchronous programming - 

//acynchonous - blocking code - 

// let promise = new Promise((resolve,reject)=>{
//   let success = true ;
//   if(success)
//     resolve("Data Loaded");
//     else 
//       reject("Error occured");
// });
// promise.then(result)

localStorage.setItem("name","aris");
console.log(name1);

///remove data 

localStorage.removeItem("name");

//storage object
var user = {name:"aris,",age:50};
localStorage.setItem("user",JSON.stringify(user));

//retrive object
var data = JSON.parse(localStorage.getItem("user"));

