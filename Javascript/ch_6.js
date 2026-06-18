// // -----------------------THIS WITH ARROW FUNCTION------------------


// const student={
//     name:"dk",
//     marks:95,
//     age:21,
//     prop:this,
//     getname:function(){
//         console.log(this);
//         return this.name;
//     },
//     getmarks()=>{
//         console.log(this);
//         return this.marks;
//     }
// };




// // ------------------------Q1-----------------------

// function poem(){
//     console.log("twinklw twinklw,littel star");
// }


// // -------------------------Q2 ludo random number-----------------------



// function ludo(){
//     let dice=Math.floor(Math.random()*6+1);
//     console.log(dice);

// }



// function printname(name,age){
//     console.log(`My name is ${name} and my age is ${age}.`);
// }



// function sum(a,b){
//     console.log(a+b);
// }



// function avg(a,b,c){
//     let Avg=(a+b+c)/3;
//     console.log(Avg);
// }


// function table(n){
//     for(let i=n;i<=n*10;i+=n){
//         console.log(i);
//     }
// }


// function sumn(n){
//   let sum=0;
//   for(let i=0;i<=n;i++){
//     sum+=i;
//   }
//     return sum;
// }



// function table(n){
//     for( let i=1;i<=n*10;i+=n){
//         console.log(i)
//     }
// }



// let str=["hii","hello","raam raam","Namaste"];
// function concat(str){
//     let result='';
//     for( let i=0;i<=str.length;i++){
//         result+=str[i];
//     }
//     return result;
// }


// let str1=["raam raam","hii","hello"];
// function concat(){
//     let res="";
//     for(let i=0;i<str1.length;i++){
//         res+=str1[i];
//     return res;
//     }
// }


// function avg(a,b,c){
//     avg=(a+b+c)/3;
//     console.log(avg);
// }

// function table(n){
//     for(let i=1;i<=10;i++){
//     console.log(`${n}x${i}=${n*i}`);
//     }
// }

// function sum(n){
//     let sum=0;
//     for( let i=0;i<=n;i++){
//         sum=sum+i;
//         console.log(sum);
//     }
// }

// const sum=(a,b)=>{
//     return a+b;
// }
// function sum(a,b){
//     return a+b;
// }


// setTimeout(()=>{
//     console.log("hello")},2000
// );
// setTimeout(()=>{
//     console.log("kya re")},4000
// );
// setTimeout(()=>{
//     console.log("kya deakh raha hai")},6000
// );


// const square=(n)=>{
//    return n*n;
// };

// let id1=setInterval(()=>{
//     console.log("hello world");
// },2000);
// setTimeout(()=>{
//     clearInterval(id1);
// },10000);


// let para=document.createElement("p");
// para.innerText="hello im red";
// let body=document.querySelector("body");
// body.append(para);
// para.classList.add("p");

// let h3=document.createElement("h3");
// h3.innerText="I'm a blue h3";
// body.append(h3);
// h3.classList.add("blue");

// let div=document.createElement("div");
// body.append(div);
// div.classList.add("div");
// let h1=document.createElement("h1");
// h1.innerText="I'm in div";
// div.append(h1);
// let para1=document.createElement("p");
// para1.innerText="mee too";
// div.append(para1);




// let body=document.querySelector("body");

// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//     let h1=document.querySelector("h1");
//     let racolor=randomcolor();
//     h1.innerText=racolor;
//     console.log("color updated");
// let div=document.querySelector("div");
// div.style.backgroundColor=randomcolor();
// });
//  function randomcolor(){
//     let r=Math.floor(Math.random()*255)+1;
//     let g=Math.floor(Math.random()*255)+1;
//     let b=Math.floor(Math.random()*255)+1;
//     let color=(`rgb(${r},${g},${b})`);
//     return color;
//  }


// let body =document.querySelector("body");

//  let btn=document.createElement("button");
//  btn.innerText="click me!";
//  body.append(btn);

//  let p=document.createElement("p");
//  p.innerText="hii im p";
 

//  btn.addEventListener("click",function(){
//     console.log("btn clicked");
//  })

