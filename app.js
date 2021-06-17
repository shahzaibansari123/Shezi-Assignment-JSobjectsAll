// Chp # 1: ALERTS

// Q1
//alert("Good Evening!!");

// Q2
//alert("Error ! Please enter a valid password");

// Q3
//alert("Welcome to JS land...\nHappy Coding!");

// Q4
//alert("Welcome to JS Land..");
//alert("Happy Coding!\n Prevent this page from creating additional dialogs");

// Q5
//alert("Hello…! I can run JS through my web browsers console");

//Chp # 2: VARIABLES FOR STRINGS

// Q1
 //var username="Shahzaib Ansari";

// Q2
//  var Myname="Shahzaib Ansari";
//  alert(Myname);

// Q3
//  var message="Hello World";
//  alert(message);

// Q4
//  var a="Shahzaib Ansari";
//  alert(a);
//  var b="20 year old";
//  alert(b);
//  var c="Certified Mobile Application Development";
//  alert(c);

// Q5
// var pizza="PIZZA\nPIZZ\nPIZ\nPI\nP";
//  alert(pizza);

// Q6
//  var email="ansarishahzaib567@gmail.com";
//  alert("My email address is "+email);

// Q7
//  var book="A smarter way to learn Java Script";
//  alert("I am learning from the book "+book);

// Q8
//  var html="Yah !  I can write HTML content through JavaScript";
//  document.write(html);

// Q9
//  var design="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬";
//  alert(design);

//Chp # 3 VARIABLES FOR NUMBERS

//Q1
//  var age= 20;
//  alert("I am "+ age+" years old")

//Q2
// var visno= 14;
// alert("You have visited this site "+ visno+" times")

//Q3
// var birthYear= 2001;
// document.write("My birth year is "+ birthYear+"<br>"+ "Datatype of my declared variable is number")

//Q4
// var visname="Shahzaib";
// var prodtitle="Tshirts";
// var quant="10";
// document.write(visname +" ordered "+quant + prodtitle+ " on XYZ Clothing Store");

//Chp # 4 VARIABLE NAMES: LEGAL AND ILLEGAL

//Q1
//var v1,v2, v3;

//Q2
//var 1s, 6z, %5z, S, V, %s, a, b, c, 2#;

//Q3
//Script in HTML body tag
//<h1><b>Rules for naming JS variables</b></h1>
// document.write("Variable names can only contain numbers, $, _ and . For example $my_1stVariable"+"<br>")
// document.write("Variables must begin with a letter, $ or_. For example $name, _name or name"+"<br>")
// document.write(" Variable names are case sensitive"+"<br>")
// document.write(" Variable names should not be JS Keywords"+"<br>")

//chp # 5 MATH EXPRESSIONS

// Q1
// var a=3;
// var b=5;
// var c=a+b;
// document.write("Sum of "+a+" and "+b+" is "+c);

// Q2
// var a=3;
// var b=5;
// var d=b-a;
// document.write("Subtraction of "+a+" and "+b+" is "+d+".<br/>");
// var e=b*a;
// document.write("Multiplication of "+a+" and "+b+" is "+e+".<br/>");
// var f=b/a;
// document.write("Division of "+a+" and "+b+" is "+f+".<br/>");
// var g=b%a;
// document.write("Modulus of "+a+" and "+b+" is "+g+".<br/>");

//Q3
// var vari="Value after variable declaration is undefined";
// document.write(vari+".<br/>");
// var var1=3;
// document.write("Initial value: "+var1+".<br/>");
// ++var1;
// document.write("After increment: "+var1+".<br/>");
// var2=var1+7;
// document.write("After Addition with 7: "+var2+".<br/>");
// --var2;
// document.write("After Decrement: "+var2+".<br/>");
// var var3=var2%3;
// document.write("The Remainder is::"+var3+".<br/>");

// Q4
// var a=600;
// var b=a*5;
// document.write("Total Cost to buy 5 movie ticket is "+b+"PKR");

// Q5
// var num= 4;
// document.write("Table of "+num+"<br>");
// document.write("4 x 1 = "+(num*1)+"<br>");
// document.write("4 x 2 = "+(num*2)+"<br>");
// document.write("4 x 3 = "+(num*3)+"<br>");
// document.write("4 x 4 = "+(num*4)+"<br>");
// document.write("4 x 5 = "+(num*5)+"<br>");
// document.write("4 x 6 = "+(num*6)+"<br>");
// document.write("4 x 7 = "+(num*7)+"<br>");
// document.write("4 x 8 = "+(num*8)+"<br>");
// document.write("4 x 9 = "+(num*9)+"<br>");
// document.write("4 x 10 = "+(num*10)+"<br>");

// Q6
// var ctemp=+prompt("Enter Temperature in Celsius");
// f=((ctemp * (9/5))+32);
// var ftemp=+prompt("Enter Temperature in Fahrenheit");
// c=((ftemp - 32) * (5/9));
// document.write(ctemp+"C Is"+f+"F"+"<br>");
// document.write(ftemp+"F Is"+c+"C"+"<br>");

// Q7
// var p1 = 650;
// var p2 = 100;
// var q1 = 3;
// var q2 = 7;
// var sc = 100; 
// document.write("Price of item 1 is "+p1+"<br>");
// document.write("Quantity of item 1 is "+q1+"<br>");
// document.write("Price of item 2 is "+p2+"<br>");
// document.write("Quantity of item 2 is "+q2+"<br>");
// document.write("Shipping Charges "+sc+"<br>");
// document.write("Total cost of your order is "+((p1*q1)+(p2*q2)+sq));

// Q8
// var total=+prompt("Enter Total Marks");
// var obtained=+prompt("Enter Obtained Marks");
// pecentage=obtained/total
// finalpercentage=pecentage*100

// document.write("Total Marks:"+total+"<br>");
// document.write("Marks Obtained:"+obtained+"<br>");
// document.write("Percentage="+finalpercentage+"%");

// Q9
// var dollar=10;
// var riyals=25;
// var dollarpkr=dollar*104.80;
// var riyalpkr=riyals*28;
// document.write("Currency in PKR.<br>");
// document.write("10 Dollars in Rupees: "+dollarpkr+".<br>");
// document.write("25 Riyal in Rupees: "+riyalpkr+".<br>");

// Q10
// var exp=((5+1)*10)/2;
// document.write("((5+1)*10)/2 = "+exp);

// Q11
// var currentyear = 2021;
// var birthyear = 2001;
// document.write("Your age is either: "+(currentyear-birthyear)+" or "+((currentyear-birthyear)-1));

// Q12
// var r=+prompt("Enter the Radius of Circle")
// document.write("The Geometrizer<br>");
// document.write("Radius of Circle is: "+r+".<br>");
// var circum= 2*3.142*r;
// document.write("Circumference is: "+circum+".<br>");
// var area=3.14*(r*r);
// document.write("Area is: "+area+".<br>");

// Q13
// var snack = "chocolate chip";
// var age = 15;
// var max_age = 65;
// var amount = 3;
// document.write("Favourite Snack: "+(snack)+"<br>");
// document.write("Current Age: "+age+"<br>");
// document.write("Estimated Maximum Age: "+max_age+"<br>");
// document.write("Amount of snacks per day: "+amount+"<br>");
// document.write("You will need "+((max_age-age)*amount)+" to last you until the ripe old age of "+max_age);

// Chapters 6-9 MATH EXPRESSIONS

// Q1
// var a = +prompt("Enter your Number: ");
// document.write("Result:"+"<br>"+"The value of a is:"+a+"<hr>");
// var x=++a;
// document.write("The Value of ++a is"+x+"<br>"+"Now The value of a is:"+x+"<br>");
// var y=x++;
// document.write("The Value of a++ is"+y+"<br>"+"Now The value of a is:"+x+"<br>");
// var z=--x;
// document.write("The Value of --a is "+z+"<br>"+"Now The value of a is:"+x+"<br>");
// var w=x--;
// document.write("The Value of --a is "+w+"<br>"+"Now The value of a is:"+x+"<br>");

// Q2
// var a = 2, b = 1;
// document.write("a is:"+a+"<br>");
// document.write("b is:"+b+"<br>");
// var result = --a ;
// document.write("--a: "+result+"<br>");
// var re1=result- --b ;
// document.write("--a - --b: "+re1+"<br>");
// var re2=re1 + ++b ; 
// document.write("--a - --b + ++b: "+re2+"<br>"); 
// var re3=re2 + b--;
// document.write("--a - --b + ++b +b—Result is: "+re3+"<br>");

// Q3
// var name = prompt("Enter Your Name: ");
// document.write("Hello,"+name);
// alert("Hello,"+name);

//Q4 N/A

// Q5
// var a = +prompt("enter your number to generate table");
// if (a == 0) {
//     document.write("5 x 1"+"="+5*1+"<br>");
//     document.write("5 x 2"+"="+5*2+"<br>");
//     document.write("5 x 3"+"="+5*3+"<br>");
//     document.write("5 x 4"+"="+5*4+"<br>");
//     document.write("5 x 5"+"="+5*5+"<br>");
// 	document.write("5 x 6"+"="+5*6+"<br>");
// 	document.write("5 x 7"+"="+5*7+"<br>");
// 	document.write("5 x 8"+"="+5*8+"<br>");
// 	document.write("5 x 9"+"="+5*9+"<br>");
// 	document.write("5 x 10"+"="+5*10+"<br>");
//   }else {
//     document.write(a+"x 1"+"="+a*1+"<br>");
//     document.write(a+"x 2"+"="+a*2+"<br>");
//     document.write(a+"x 3"+"="+a*3+"<br>");
//     document.write(a+"x 4"+"="+a*4+"<br>");
//     document.write(a+"x 5"+"="+a*5+"<br>"); 
// 	document.write(a+"x 6"+"="+a*6+"<br>");
// 	document.write(a+"x 7"+"="+a*7+"<br>");
// 	document.write(a+"x 8"+"="+a*8+"<br>");
// 	document.write(a+"x 9"+"="+a*9+"<br>");
// 	document.write(a+"x 10"+"="+a*10+"<br>");
//   }

// Q6
// var a = prompt("enter Subject 1 Name");
// var x = +prompt("enter Subject 1 Marks");
// var b = prompt(" enter Subject 2 Name");
// var y = +prompt("enter Subject 2 Marks");
// var c = prompt("enter Subject 3 Name");
// var z = +prompt("enter Subject 3 Marks");
// var sum=x+y+z;
// var pecentage=sum/300;
// var final=pecentage*100;
// document.write("The Final Percentage is="+final);


//chapter 9-11 USER INPUT AND CONDITIONAL STATEMENTS

// Q1
// var city=prompt("Enter The City Name:","Enter City Name Here");
// if (city=="karachi") {
//     alert("Welcome to the city of lights");
// }
// else{
//     alert("Invalid City name");
// }

// Q2
// var gender=prompt("Enter your Gender:","Enter Gender Here");
// if (gender=="male") {
//     alert("Good Morning Sir");
// }
// else if (gender=="female"){
//     alert("Good Morning Ma'am");
// }
//  else{
//     alert("Invalid Gender");
// }

// Q3
// var color=prompt("Enter traffic signal color:","Enter color Here");
// if (color=="red") {
//     alert("Must Stop");
// }
// else if (color=="yellow"){
//     alert("Ready to Move");
// }
// else if (color=="green"){
//     alert("Move now");
// }
//  else{
//     alert("Invalid color");
// }

// Q4
// var fuel=prompt("Insert the amount of Fuel in your car(In liters)","Insert fuel Value");
// if (fuel<0.25 && fuel>0){
//     alert("Please refill fuel in your car");
// }
// else if (fuel>=0.25){
//     alert("You are ready to go");
// }
// else{
//  alert("Invalid Insertion")
// }

// Q5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
    

// Q6
// document.write("Marks Sheet<br>");
// document.write("<br/>");
// var marks=prompt("Enter your marks","Marks");
// var per= (marks/300)*100;
// if (per>=80 && per<=100){
//     document.write("Total Marks: 300.<br>");
//     document.write("Marks Obtained: "+marks+"<br/>");
//     document.write("Percentage: "+per+"<br/>");
//     document.write("Grade: A-one <br/>");
//     document.write("Remarks: Excellent");
// }
// else if(per>=70 && per<80){
//     document.write("Total Marks: 300.<br>");
//     document.write("Marks Obtained: "+marks+"<br/>");
//     document.write("Percentage: "+per+"<br/>");
//     document.write("Grade: A <br/>");
//     document.write("Remarks: Good");
// }
// else if(per>=60 && per<70){
//     document.write("Total Marks: 300.<br>");
//     document.write("Marks Obtained: "+marks+"<br/>");
//     document.write("Percentage: "+per+"<br/>");
//     document.write("Grade: B <br/>");
//     document.write("Remarks: You need to improve");
// }
// else if(per<=60 && per>=00){
//     document.write("Total Marks: 300.<br>");
//     document.write("Marks Obtained: "+marks+"<br/>");
//     document.write("Percentage: "+per+"<br/>");
//     document.write("Grade: Fail <br/>");
//     document.write("Remarks: Sorry");
// }
// else{
//     document.write("Insert valid Marks")
// }

// Q7
// var secretnum=+prompt("Enter your Number from 1 to 10: ");
// if (secretnum==7){
//  alert("Bingo! Correct answer");
// }
// else if (secretnum==7+1){
//     alert("Close enough to the correct answer");
// }
// else if (secretnum>10 || secretnum<1){
//     alert("Invalid Number");
// }
// else{
//     alert("Invalid Number");
// }

// Q8
// var num=+prompt("Insert Number to check if its Divisible by 3 or not","Enter Number here");
// if (num%3==0){
//     alert("Number is divisible by 3");
// }
// else{
//     alert("Number isn’t divisible by 3");
// }

// Q9
// var num=+prompt("Insert Number to check if its Even or Odd","Enter Number here");
// if (num%2==0){
//     alert("Number is Even");
// }
// else{
//     alert("Number is Odd");
// }

// Q10
// var T=+prompt("Enter the Temperature today","Enter Here");
// if (T>40){
//     alert("It is too hot outside.");
// }
// else if (T>=30 && T<=40){
//     alert("The Weather today is Normal.");
// }
// else if (T>=20 && T<=30){
//     alert("Today’s Weather is cool.");
// }
// else if (T>=10 && T<=20){
//     alert("OMG! Today’s weather is so Cool.");
// }
// else{
//     alert("Invalid Temperature");
// }

// Q11
// var num1=+prompt("Enter 1st Number");
// var num2=+prompt("Enter 2nd Number");
// var op=prompt("Enter the sign of Operator you want to Perform between First and Second number (like +,-,*,/,%)");
// if (op =="+"){
//     alert("The Result is: "+(num1+num2));
// }
// else if (op =="-"){
//     alert("The Result is: "+(num1-num2));
// }
// else if (op =="*"){
//     alert("The Result is: "+(num1*num2));
// }
// else if (op =="/"){
//     alert("The Result is: "+(num1/num2));
// }
// else if (op=="%"){
//     alert("The Result is: "+(num1%num2));
// }
// else {
//     alert("You have entered invalid operator");
// }

//chp # 12-13 IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS

//Q1
// var x = 102;
// if (x<65){
//     document.write("It is a number");
// }else if (x>=65 && x<=96){
//     document.write("It is uppercase letter");
// }else if (x>=97 && x<=122){
//     document.write("It is lowercase letter");
// }

//Q2
// var x = 8;
// var y = 10;
// if (x===y){
//     document.write("Both numbers are equal");
// }else if (x>y){
//     document.write("Larger Number is: "+x);
// }else if (x<y){
//     document.write("Larger Number is: "+y);
// }

//Q3
// var x = prompt();
// if (x===0){
//     document.write("Number is zero");
// }else if (x>0){
//     document.write("Number is positive");
// }else if (x<0){
//     document.write("Number is negative");
// }

//Q4
// var x = "a”;
// if (x=="a" || x=="e" || x=="i" || x=="o" || x=="u" ){
//     document.write(true);
// }else{
//     document.write(false);
// }

// Q5
// var password = "shezi”;
// var userpass = prompt();
// if (userpass==""){
//     document.write("please enter your password");
// }else if(userpass==password){
//     document.write("Correct");
// }else if(userpass!=password){
//     document.write("Incorrect Password “ + userpass);
// }

// Q6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// document.write(greeting);
// }
// else{
// greeting = "Good evening";
// document.write(greeting);
// }

//Q7
// var timee = +prompt();
// if (timee==1300){
//     document.write("1");
// }else if(timee==1400){
//     document.write("2");
// }else if(timee==1500){
//     document.write("3");
// }else if(timee==1600){
//     document.write("4");
// }else if(timee==1700){
//     document.write("5");
// }else if(timee==1800){
//     document.write("6");
// }else if(timee==1900){
//     document.write("7");
// }else if(timee==2000){
//     document.write("8");
// }else if(timee==2100){
//     document.write("9");
// }else if(timee==2200){
//     document.write("10");
// }else if(timee==2300){
//     document.write("11");
// }else if(timee==2400){
//     document.write("12");
// }

//chap 14-16 ARRAYS

//Q1
//var arr =  [];

//Q2
 //arr1 = new Array();

//Q3
//var str_arr = ["str1","str2","str3"];

//Q4
//var num_arr = [1,2,3,4,5];

//Q5
//var boolean_arr = [false,true];

//Q6
//var mixed_arr = ["string",2,true];

//Q7
// var education_list = ["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL","PHD"]
// document.write("1)"+education_list[0]+"<br>")
// document.write("2)"+education_list[1]+"<br>")
// document.write("3)"+education_list[2]+"<br>")
// document.write("4)"+education_list[3]+"<br>")
// document.write("5)"+education_list[4]+"<br>")
// document.write("6)"+education_list[5]+"<br>")
// document.write("7)"+education_list[6]+"<br>")
// document.write("8)"+education_list[7]+"<br>")
// document.write("<hr>");

//Q8
// var std = ["Michael","John","Tony"];
// var score = [320,230,480];

// per1=(score[0]*100)/500;
// per2=(score[1]*100)/500;
// per3=(score[2]*100)/500;

// document.write("Score of "+std[0]+" is "+score[0]+" Percentage: "+per1+"%"+"<br>");
// document.write(" ");
// document.write("Score of "+std[1]+" is "+score[1]+" Percentage: "+per2+"%"+"<br>");
// document.write(" ");
// document.write("Score of "+std[2]+" is "+score[2]+" Percentage: "+per3+"%"+"<br>");

// document.write("<hr>");

//Q9
//var clr = ['blue','red','green','black','white'];
// document.write("Array: "+clr+'<br>');
// var start = prompt("ADDING COLOR AT START: ");
// clr.unshift(start);
// document.write("After adding color at beginning: "+clr+'<br>');
// var endd = prompt("ADDING COLOR AT LAST: ");
// clr.unshift(end);
// document.write("After adding color at end: "+clr+'<br>');

// clr.unshift('purple');
// clr.unshift('yellow');
// document.write("After adding two colors at beginning: "+clr+'<br>');
// clr.shift();
// document.write("After deleting first color: "+clr+'<br>');
// clr.pop();
// document.write("After deleting last color: "+clr+'<br>');
// var usr_index = prompt("ADDING INDEX: ");
// var usr_color = prompt("COLOR: ");
// clr.splice(usr_index,2,usr_color);
// document.write("Updated Array after adding color: "+clr+'<br>');
// var del_index = prompt("DELETING INDEX: ");
// var del_colors = prompt("NUMBER OF COLORS WANT TO DELETE: ");
// clr.splice(del_index,del_colors);
// document.write("Updated Array after deleting colors: "+clr+'<br>');

//Q10
// var score = [320,230,480,120];
// document.write("Array: "+score);
// var sorted_arr = score.sort();
// document.write("Sorted Array: "+sorted_arr);

//Q11
// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("Cities List: <br>");
// document.write(cities);
// var selected_cities = [cities[1],cities[2],cities[4]];
// document.write("Selected Cities: <br>");
// document.write(selected_cities);

// Q12
// var arr = ["This","is","my",'cat'];
// var arr_j = arr.join();
// document.write(arr_j);

// Q13
// var arrayN= [];
// arrayyy.push("Keyboard");
// arrayyy.push("Mouse");
// arrayyy.push("Printer");
// arrayyy.push("Monitor");
// document.write("Devices: <br>");
// document.write(arrayN);
// document.write("<hr>");
// document.write("Out: <br>"+ arrayN [0]+"<br>");
// document.write("Out: <br>"+ arrayN [1]+"<br>");
// document.write("Out: <br>"+ arrayN [2]+"<br>");
// document.write("Out: <br>"+ arrayN [3]+"<br>");

// Q14
// var arrayN = [];
// arrayyy.push("Keyboard");
// arrayyy.push("Mouse");
// arrayyy.push("Printer");
// arrayyy.push("Monitor");
// document.write("Devices: <br>");
// document.write(arrayN);
// document.write("<hr>");
// document.write("Out: <br>"+ arrayN [3]+"<br>");
// document.write("Out: <br>"+ arrayN [2]+"<br>");
// document.write("Out: <br>"+ arrayN [1]+"<br>");
// document.write("Out: <br>"+ arrayN [0]+"<br>");

//Q15
// var phone = ["Apple","Samsung", "Motorola", "Nokia", "Sony","Haier"];
// document.write("Select Option");
// document.write(phone[0]+"<br>");
// document.write(phone[1]+"<br>");
// document.write(phone[2]+"<br>");
// document.write(phone[3]+"<br>");
// document.write(phone[4]+"<br>");
// document.write(phone[5]+"<br>");

// Chapter 17-20 ARRAYS AND LOOPS

// Question 01

// var multidimensional = [[],[],[]];

// Question 02

// var multidimensional = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// document.write(multidimensional[0]+"<br>");
// document.write(multidimensional[1]+"<br>");
// document.write(multidimensional[2]+"<br>");

// Question 03

// for (var i=1;i<=10;i++){
//     document.write(i+"<br>");
// }

// Question 04

// var n1=prompt("enter number: ");
// var n2=prompt("enter number: ");
//  for (var i=1;i<=n2;i++){
//      document.write(n1+"x"+i+"="+(i*n1)+"<br>");
//  }

// Question 05

// var fruits = ["apple","banana","mango","orange","strawberry"];
// for (var i=0;i<fruits.length;i++){
//     document.write("Element at "+i+" is "+fruits[i]+"<br>");
// }

// Question 06

// var lst = []
// for (var i=1; i<=20;i++){
//     lst.push(i);    
// }
// document.write("Counting: "+lst);
// document.write("<br>");
// document.write("Reverse: "+lst.reverse());
// document.write("<br>");
// var evenn = [];
// var odd = [];
// var series = [];
// for (var j=0;j<lst.length;j++){
//     if (j%2==0){
//         evenn.push(j);
//         series.push(j+"k");
//     }else{
//         odd.push(j);
//     }
// }       
// document.write("Even: "+evenn);
// document.write("<br>");
// document.write("Odd: "+odd);
// document.write("<br>");
// document.write("Series: "+series);

// Question 07

// var items = ["cake","apple pie","cookie","chips","patties"];
// var search  = prompt();
// var found = false;
// for (var i=0; i<items.length;i++){
//     if (search==items[i]){
//         found = true;
//         document.write(search + " is avalaible");
//     }
// }
// if (found==false){
//     document.write(search + " is not avalaible");
// }

// Question 08

//  var arr = [24, 53, 78, 91, 12];
//  document.write("Array Items: "+arr+"<br>")
//  arr.sort();
//  arr.reverse();
//  document.write("Largest number is: "+arr[0]);

// Question 09

// var arr = [24, 53, 78, 91, 12];
// document.write("Array Items: "+arr+"<br>")
// arr.sort();
// document.write("Smallest number is: "+arr[0]);

// Question 10

// var num = 5;
// for (var i=1;i<=20;i++){
//     document.write(i*num+",");
// }


// Chapter 21-25 STRING METHODS

// Question 01

// var firstName = prompt("enter first name: "); //Shahzaib
// var lastName = prompt("enter last name: "); //Ansari
// var fullName = (firstName + " " + lastName);  
// document.write(" Hello ! " + fullName + "<br>" + " Have a nice day. ");

// Question 02

// var favPhone = prompt("Favourite phone: "); //Samsung galaxy S6 edge Plus
// var l = favPhone.length;
// document.write("My Favorite phone is: " + favPhone + "<br>" + "String length is: " + l);

// Question 03

// var word = "Pakistani"
// var i = word.indexOf("n");
// document.write("String: " + word + "<br>" + "Index of 'n' is: " + i);

// Question 04

// var word = "Hello World"
// var i = word.lastIndexOf("l");
// document.write("String: " + word + "<br>" + "Last index of 'l' is: " + i);

// Question 05

// var word = "Pakistani"
// var ch = word.charAt(3);
// document.write("String: " + word + "<br>" + "Character at Index 3: " + ch);

// Question 06

// var firstName = prompt("enter first name: "); //Shahzaib
// var lastName = prompt("enter last name: "); //Ansari
// var fullName = firstName.concat(lastName);
// document.write(" Hello ! " + fullName + "<br>" + " Have a nice day. ");

// Question 07

// var word = "Hyderabad";
// var r = word.replace("Hyder","Islam");
// document.write("String: " + word + "<br>" + "After replacement: " + r);

// Question 08

// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// var newMessage = message.replaceAll('and','&');
// document.write(newMessage);

// Question 09

// var value1="472";
// var value2=Number(value1);
// document.write("Value: " + value1 + "<br>");
// document.write("Type: " + typeof(value1) + "<br>");
// document.write("Value: " + value2 + "<br>")
// document.write("Type: " + typeof(value2) + "<br>");

// Question 10

// var word = prompt("Enter the word: (convert into uppercase):");
// document.write("User Input: "+ word + "<br>");
// var upperCase= word.toUpperCase();
// document.write("Upper Case: "+upperCase+"<br>");

// Question 11

// var title="javascript"
// document.write(title[0].toUpperCase() + title.slice(1,title.length).toLowerCase());

// Question 12

// var num1=35.36;
// var num2=Number(num1.toString().replace('.', ''))
// var number=num2.toString();
// document.write(typeof(num1)+" : " + num1 + "<br>");
// document.write(typeof(number)+" : " + number + "<br>");

// Question 13

// var userName = prompt("Enter your Input: ");
// var message;
// var arr=[];
// for(var i=0;i<userName.length;i++)
// {
//     arr[i]=userName.charCodeAt(i);
//     if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//     {
//             message="Correct User Name";
//     }
//     while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
//     {
//         alert("Please enter a valid username");                                                                                                                   
//         userName=prompt("Enter your Input: ");
//         for(var i=0;i<userName.length;i++)
//         {
//             arr[i]=userName.charCodeAt(i);
//             if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//             {
//                 break;
//             }
//         }
//     }
// }
// alert(message);

// Question 14

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order = prompt("Welcome to ABC Bakery What do you want to order Sir/Ma'am");
// var find = order.toLowerCase();
// var available = items.includes(find);
// if(available == true){
//     alert(find + " is available at index " + items.indexOf(find) + " in our bakery");
// }
// else{
//     alert("We are sorry. " + find + " is not in our bakery");
// }

// Question 15

// var password = prompt("Password: ");
// var pwd = password.charCodeAt(0);
// if (((pwd >=65 && pwd <=90) || (pwd >=97 && pwd<=122)) && (password.length>6)){
//     document.write("Correct Password");
// }else{
//     document.write("Incorrect Password");
// }

// Question 16

// var university = 'University of Karachi';
// array=university.split("");
// for (let i = 0; i < array.length; i++) {
//     document.write(array[i]+"<br>");
// }

// Question 17

// var word=prompt("Please Enter A Word: ");
// lastchar=word.charAt(word.length-1);
// document.write("User Input: "+word+"<br>");
// document.write("Last Character Of Input: "+lastchar);

// Question 18

// var text="The quick brown fox jumps over the lazy dog";
// document.write("Text: " + text + "<br>");
// text=text.toLowerCase()
// textarr=text.split(" ")
// var a=0;
// var word="the";
// for (let i = 0; i < textarr.length; i++) {
//     if (textarr[i]===word) {
//         a=a+1;
//     }  
// }
// document.write("There are "+a+" occurrence(s) of word:"+word)

//Chapter 26-30 MATH METHODS

//Question 01

// var n = prompt("Enter your value");
// document.write("Number :"+ Math.abs(n)+"<br>");
// document.write("Round off value :"+Math.round(n)+"<br>");
// document.write("Floor Value :"+Math.floor(n)+"<br>");
// document.write("Ceil Value :"+Math.ceil(n)+"<br>");

// Question 02

// var n =prompt("Enter your value");
// document.write("Number : "+ -Math.abs(n)+"<br>");
// document.write("Round off value : "+ -Math.round(n)+"<br>");
// document.write("Floor Value : "+ -Math.floor(n)+"<br>");
// document.write("Ceil Value : "+ -Math.ceil(n)+"<br>");

// Question 03

// var n =prompt("Enter your value");
// document.write("Number : "+ Math.abs(n)+"<br>");

// Question 04

// document.write("Random Dice Value : "+ Math.round(Math.random()*5+1) +"<br>");
// document.write("Random Dice Value : "+ Math.round(Math.random()*5+1) +"<br>");

// Question 05

// var n=Math.round(Math.random()*1+1);
// document.write(""+n+"<br>");
// if (n==2){
//     document.write(" Random Coin Value : Heads");
// }
// else{
//     document.write(" Random Coin Value : Tails");
// }

// Question 06

// document.write("Random Value between 1 and 100 : "+ Math.round(Math.random()*99+1) +"<br>");

// Question 07

// var a =+prompt("Enter your weight in Kilograms");
// var b = parseFloat(a)
// document.write("The weight of user is "+b+" kgs");

// Question 08

// var b=+prompt("Enter your Number from 1-10");
// var a=Math.round(Math.random()*9+1);
// document.write("The Magic Number is "+a+"<br>");
// if (a==b){
//     document.write("Congrats");
// }
// else{
//     document.write("Try Again");
// }

//Chapter 31-34 DATE METHODS

//Question 01

// var now=new Date();
// document.write(now);

//Question 02

// var monthsList=["january","february","march","april","may","june","july","august","september","october","november","december"];
// var now=new Date();
// var month=now.getMonth();
// var currentMonth=monthsList[month];
// alert(currentMonth);

//Question 03

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// alert(nameOfToday.slice(0,3));

//Question 04

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// if(nameOfToday=="Sunday" || nameOfToday=="Saturday"){
//         document.write("it's fun day");
//     }
//     else{
//         document.write("week Day");
//     }

//Question 05

// var d=new Date();
// var day=d.getDate();
// if(day<=15){
//     document.write("first fifteen days of the month");
// }
// else{
//     document.write("last days of the month");
// }

//Question 06

// var d=new Date();
// var ms=d.getTime();
// var min=d.getTime()/60000;
// document.write("Current Date: "+d+"<br>");
// document.write("Elapsed milliseconds since january 1, 1970: "+ms+"<br>");
// document.write("Elapsed minutes since january 1, 1970: "+min);

//Question 07

// var d= new Date();
// var hrs=d.getHours();
// if(hrs=0){
//     document.write("Midnight");
// }
// if(hrs>=1 || hrs<12){
//     document.write("its AM");
// }
// else{
//     document.write("its PM");
// }

// Question 08

// var laterDate = new Date("December 31, 2020");
// document.write("Later date:"+laterDate+"<br>");

// Question 09

// var startDate = new Date("June 18, 2015");
// var t = new Date();
// var today = t.getTime();
// var ramadan = startDate.getTime();
// var diff = today - ramadan ;
// var days = diff / (1000 * 60 * 60 * 24);
// var daysfinal=Math.floor(days)
// document.write(daysfinal+" days have past since "+startDate+"<br>");

// Question 10

// var ref = new Date("Dec 05, 2015");
// var begin = new Date("Dec 01, 2015");
// var beg = begin.getTime();
// var refdate = ref.getTime();
// var diff = refdate - beg ;
// var secs = diff / (1000);
// var finalsecs=Math.floor(secs)
// document.write("On reference date "+ref+", "+finalsecs+" Seconds had passed since the begining of 2015"+"<br>");

// Question 11

// var d = new Date();
// document.write("Current Date "+d+"<br>");
// var dd=d.setHours(6);
// document.write("1 hour ago it was "+d+"<br>");

// Question 12

// var d = new Date();
// document.write("Current Date "+d+"<br>");
// var dd=d.setFullYear(1921);
// document.write("100 years back, it was "+d+"<br>");

// Question 13

// var age=+prompt("Whats your age?")
// var present = new Date();
// var year=present.getFullYear()
// var birthYear=year - age;
// document.write("Your age is "+age+"<br>");
// document.write("Your birth Year is "+birthYear+"<br>");

// Question 14

// var d= new Date();
// var monthList = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November" , "December"];
// monthNum=d.getMonth()
// var month = monthList[monthNum];
// var name=prompt("Please Enter Your Name?")
// var unitNo=+prompt("Please Enter Your Number Of Units?")
// document.write("K-Electric Bill"+"<br>")
// document.write("Customer Name: "+ name+"<br>")
// document.write("Month: "+month+"<br>");
// document.write("Number Of Units:"+unitNo+"<br>");
// document.write("Charges Per Unit: 16"+"<br>");
// var payable=unitNo*16
// document.write("Net Amount Payble (within Due Date):"+ payable+"<br>");
// document.write("Late Payment Surcharge: 350"+"<br>");
// var payableDue= payable+350
// document.write("Gross Amount Payble (after Due Date):"+ payableDue+"<br>");

//Chapter 35-38 FUNCTION 

// Question 01

// function dateTime(){
//     var d = new Date();
//     document.write(d);
// }
// dateTime();

// Question 02

// function greeting(){
//     var fn=prompt("Enter Your First name:")
//     var ln=prompt("Enter you Last name:")
//     document.write("Hello "+fn+" "+ln+", Have a good day !")
// }
// greeting();

// Question 03

// function sum(a,b){
//     var a=+prompt("Enter Your First Number:")
//     var b=+prompt("Enter you Last Number:")
//     var c =a+b;
//     return c;
// }
// document.write("The sum of two number: "+sum());

// Question 04

// function calculator(){
//     var num1=+prompt("Enter Your First Number:")
//     var num2=+prompt("Enter you Last Number:")
//     var operator=prompt("Enter the symbol of operation you want to perform (+,-,*,/,%)")
// if(operator==="+"){
//     return (num1+num2);
// }
// else if(operator==="-"){
//     return (num1-num2);
// }
// else if(operator==="*"){
//     return (num1*num2);
// }
// else if(operator==="/"){
//     return (num1/num2);
// }
// else if(operator==="%"){
//     return (num1%num2);
// }
// }
// document.write("The result of your operation is "+calculator());

// Question 05

// function sqr(a){
// var b= Math.pow(a,2);
// return b;
// }
// document.write("The Square of your given number number is "+sqr(5));

// Question 06

// function fact(n){
//     if(n == 0 || n == 1){
//         return 1;
//     }else{
//         return n * fact(n-1);
//     }
// }
// alert("The factorial is " + fact(5));

// Question 07

// function printCounting(start,end){
//     for(var i=start;i<=end;i++){
//         document.write(i+"<br>");
//     }
// }
// printCounting(1,25);

// Question 08

// function calculateSquare(a){
//  return Math.pow(a,2)
// }
// function calculateHypotenuse(Base,Perdendicular){
//  var Hypotenuse=calculateSquare(Base)+calculateSquare(Perdendicular)
//  var sqrtHypotenuse=Math.sqrt(Hypotenuse)
//  alert(sqrtHypotenuse)
// }
// calculateHypotenuse(4,3);

// Question 09

// function area(width,height){
//     var Area= width*height;
//     return Area;
// }
// document.write("Area of Rectangle is "+area(6,6));

// Question 10

// function checkPalindrome(str) {
//     var a = string.split("");
//     var b = a.reverse();
//     var c = b.join("");
//     if(string == c) {
//         alert('It is a palindrome');
//     }
//     else {
//         alert('It is not a palindrome');
//     }
//     document.write(a)
// }
// var string = prompt('Enter a string: ');
// checkPalindrome(string);

// Question 11

// function titleCase(str) {
//     var a = str.toLowerCase().split(" ");
//     for (var i = 0; i < a.length; i++) {
//         a[i] = a[i].charAt(0).toUpperCase() + a[i].substring(1,a[i].length);     
//     }
//     return a.join(" "); 
//  }
//  document.write(titleCase("the quick brown fox"));

// Question 12

// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// document.write(longestWord("Web Development Tutorial"));

// Question 13

// function charCount(str, letter) 
// {
//  var letterCount = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letterCount += 1;
//       }
//   }
//   return letterCount;
// }
// document.write(charCount("JSResourceS.com", "o"));

// Question 14

// function calcCircumference(radius) {
//     var y = (Math.PI * radius) * 2;
//   document.write("The circumference is " + y + "<br>");
//   }
//   function calcArea(radius) {
//     var x = (Math.PI * radius) * radius;
//   document.write("The area is " + x);
//   }
//   calcCircumference(10);
//   calcArea(12);

//Chapter 38-42 FUNCTIONS, SWITCH, WHILE/DO-WHILE LOOPS

//Question 01

// function varPower(a,b){
//     document.write(Math.pow(a,b));
// }
// varPower(2,3);

//Question 02

// function leapYear(){
//     var year=+prompt("Enter year: ");
//     if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
//         document.write("leap year");
//     }
//     else{
//         document.write("not a leap year");
//     }
// }
// leapYear();

//Question 03

// function area() {
//     var a = 6;
//     var b = 6;
//     var c = 6;
//     var s;
//     function inner() {
//         s = (a + b + c) / 2;
//     }
//     inner()
//     var area = s * (s - a) * (s - b) * (s - c)
//     document.write("the area of triangle is " + area)
// }
// area()

//Question 04

// function main() {
//     var a = +prompt("enter the 1 subject marks");
//     var b = +prompt("enter the 2 subject marks");
//     var c = +prompt("enter  the 3 subject marks");
//     document.write("Mark sheet of a Student: "+"<br>");
//     function average() {
//         var average = (a+b+c)/2;
//         document.write( "average: "+average+"<br>");
//     }
//     average()
//     function percentage() { 
//         var percentage =  ((a+b+c)/300)*100;
//         document.write( "percentage is = " + percentage );        
//     }
//     percentage();
// }
// main();

//Question 05

// function index() {
//     var a = prompt("enter a letter");
//     var name = "shahzaib";
//     for (var i=0 ; i<name.length ; i++){
//         var sel = name.charAt(i);
//         switch (true){
//             case ( input == sel):
//             document.write( "your character " + a + "on my sentence at index = " +i);
//             var i=num.length;
//             case (i== name.length):
//             console.log ("-1");
//         }
//     }
// index();

//Question 06

// function remove() {
//     var a =prompt("enter the sentence");
//     var b=a.replace(/[aeiou]/gi, '');
//     document.write(b);
// }
// remove();

//Question 07

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
//     return count
//   }
//   document.write("the count of vowels appearing twice is " + findOccurrences());

//Question 08

// var distanceInKm=+prompt("distance between two cities in km: ");
// function meters(){
//     var m=distanceInKm*1000;
//     document.write("meters: "+m+"<br>");
// }
// function feet(){
//     var m=distanceInKm*3281;
//     document.write("feet: "+m+"<br>");
// }
// function inches(){
//     var m=distanceInKm*39370;
//     document.write("inches: "+m+"<br>");
// }
// function centimeters(){
//     var m=distanceInKm*100000;
//     document.write("centimeters: "+m);
// }
// meters();
// feet();
// inches();
// centimeters();

//Question 09

// var empCount=1;
// while(empCount<=4){
// var workingHours=+prompt("enter working hours of employee "+empCount+ ": " );
// if(workingHours>40){
//     var overTime=workingHours-40;
//     var overTimePay=overTime*12;
//     document.write("employee no " +empCount+ " overtime pay is: " +overTimePay+ "<br>");
// }
// else{
//     document.write("employee no " +empCount+ " you have to work for more than 40 hours to get over time pay"+"<br>");
// }
// empCount++;
// }

//Question 10

// var amount= +prompt("enter amount to be withdrawn (in hundreds): ");
// var h=amount/100;
// var f=(amount%100)/50;
// var t=(((amount%100)%50)/10);
// var r=(((amount%100)%50)%10);
// document.write("notes of RS.100: "+h+"<br>");
// document.write("notes of RS.50: "+ f+"<br>");
// document.write("notes of RS.10: "+ t+"<br>");
// document.write("remaining amount: "+ r);

// Chapter 58-67 "DOM"

// Question 01 
// Part 01

// var q1Part1 = document.getElementById('main-content');

// Question 01 
// Part 02

// console.log(q1Part1.children);

// Question 01 
// Part 03

// var q1Part3 = document.getElementsByClassName('render');
// document.write("<br>"+"Below written data is from assignment, where it was asked to display all childs on browser" + "<br>")
// for (i=0 ; i<q1Part3.length ; i++) {
//     document.write(q1Part3[i].innerHTML + "<br>")
// }

// Question 01 
// Part 04

// var q1Part4 = document.getElementById('first-name');
// q1Part4.value = "Shahzaib"

// Question 01 
// Part 05

// var q1Part5One = document.getElementById('last-name');
// q1Part5One.value = "Ansari"
// var q1Part5Two = document.getElementById('email');
// q1Part5Two.value = "ansarishahzaib567@gmail.com"

// Question 02 
// Part 01

// var q2Part1 = document.getElementById('form-content');
// console.log(q2Part1.nodeType); 

// Question 02 
// Part 02

// var q2Part2 = document.getElementById('lastName');
// console.log(q2Part2.nodeType);
// console.log(q2Part2.childNodes);

// Question 02 
// Part 03

// q2Part2.childNodes[0].nodeValue = "Last Name : Ansari";

// Question 02 
// Part 04

// console.log(q1Part1.lastElementChild);
// console.log(q1Part1.firstElementChild);

// Question 02 
// Part 05

// console.log(q2Part2.nextElementSibling);
// console.log(q2Part2.previousElementSibling);

// Question 02 
// Part 06

// console.log(q1Part5Two.parentNode)
// console.log(q1Part5Two.parentNode.nodeType)

// chapter 68-75 "Objects"

// question 01

// var items = [
//     {
//         name: "juice",
//         price: "50",
//         quantity: "3",
//     },
//     {
//         name: "cookie",
//         price: "30",
//         quantity: "9",
//     },
//     {
//         name: "shirt",
//         price: "880",
//         quantity: "1",
//     },
//     {
//         name: "pen",
//         price: "100",
//         quantity: "2",
//     },    
// ]
//     items.forEach(function(item){
//     var calc = item.price * item.quantity ;
//     console.log(calc);
// });

//     function sumItems(){
//     var sum = 0;
//     items.forEach(function(item){
//     var calculation = item.price * item.quantity;
//     sum += calculation;
// });

//     console.log(sum);
// };

//     sumItems();

// question 02

// var info = {
//     firstName: "Shahzaib",
//     lastName: "Ansari",
//     email: "ansarishahzaib567@gmail.com",
//     password: "000000",
//     age: "20",
//     gender: "Male",
//     city: "Karachi",
//     country: "Pakistan",
// };
//     console.log(info.age);
//     console.log(info.country);

// question 03

// function Plan(name, price, space, transfer, pages) {
//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.transfer = transfer;
//     this.pages = pages;
// }

// var p1 = new Plan("Gold", 10.99, 5000, 1000, 10);
// var p2 = new Plan("Silver", 7.99, 2500, 5000, 50);
// var p3 = new Plan("Bronze", 3.99, 800, 20000, 500);

