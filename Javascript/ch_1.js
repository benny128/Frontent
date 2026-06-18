//--------------- Declare your name ad=s a string and print its length in JSON.

// let name= "durgesh yadav";
// console.log(name.length);
// name.length;



//----------------- Declare your first name as a string and print its first Character.

// let name ="durgesh";
// console.log(name[0]);


//----------------- Declare your first name as a string and print its last Character.

// let name="durgesh";
// console.log(name[6]);

// -----------------What is output of following code

// let name="apnacollege"+123
// comnsole.log(name);



// ------------------What are lengths of an empty string with a single space

// What are lenghts of an empty string with a single space

// let name=" ";
// console.log(name.length);

// let name="durgesh yadav";
// console.log(name.length);


// Qs1.---------------Create a number variable num with some value.Now,print“good”if the number is divisible by 10 and print“bad”if it is not.

// let num=int(prompt("enter a number"));
// if(num%10==0){
//     console.log("good");
// }
// else{
//     console.log("bad");
// }

// Qs2.--------------------Take the user's name & age as inputusingprompts.Thenreturnbackthefollowingstatementtotheuserasanalert(bysubstitutingtheirname&age):nameisageyearsold.

// name=prompt("enter your name");
// age=prompt("enter your age");
//console.log(name+"is"+age+"years old");


// Qs3.--------------------Writeaswitchstatementtoprintthemonthsinaquarter.MonthsinQuarter1:January,February,MarchMonthsinQuarter2:April,May,JuneMonthsinQuarter3:July,August,SeptemberMonthsinQuarter4:October,November,December[Usethenumberasthecasevalueinswitch]




// let quater="1";
// switch(quater){
//     case "1":
//         console.log("January, februery ,march");
//         break;
//         case "2":
//             console.log("apr,may,june");
//             break;
//             case "3":
//                 console.log("july,aug,sep");
//                 break;
//                 case "4":
//                     console.log("oct,nov,dec");
//                     break;
//                     default:
//                         console.log("invaid");
    
//     }



// Qs4.-----------------------Astringisagoldenstringifitstartswiththecharacter‘A’or‘a’andhasatotallengthgreaterthan5.Foragivenstringprintifitisgoldenornot.





// let str="apple";
// if(str[0]=="A" || str[0]=="a" && str.length>5){
//     console.log("GOLDEN STRING");
// }
// else{
//     console.log("Not a golden string");
// }



//-----------------------------Qs5.Writeaprogramtofindthelargestof3numbers.





// let num=prompt("enter 3 numbers");
// let num1=num[0];
// let num2=num[1];
// let num3=num[2];
// if(num1>num2 && num1>num3){
//     console.log(num1+"is largest");
// }
// else if(num2>num1 && num2>num3){
//     console.log(num2+"is largest");
// }
// else if(num3>num1 && num3>num2){
//     console.log(num3+"is largest");
// }
// else{
//     console.log("invalid");
// }




//------------------------------- Qs6(Bonus).Writeaprogramtocheckif2numbershavethesamelastdigit.Eg:32and47852havethesamelastdigiti.e.2


// let num1=prompt("enter any number");
// let num2=prompt("enter any number");
// if (num1%10==num2%10){
//     console.log("same last digit");
// }
// else{
//     console.log("different last digit");
// }


// let str="i love coding";
// str.replace("love","do");