"use strict";


function isValidIP() {
let str = document.getElementById("ip").value;
//alert(str);
let arr = str.split('.')
if (arr.length < 4 || arr.length > 4) {document.getElementById("result").innerHTML = "Invalid IP Address"; return false;}
let result = 1;
for (let i of arr) {
if ((i >= 0) && (i <= 255) && (String(Number(i)) == i)) {result *= 1;} else {result *= 0;}	
}
if (result == 1) {document.getElementById("result").innerHTML = "Valid IP Address"; return true;}

document.getElementById("result").innerHTML = "Invalid IP Address";
return false;
}

//document.getElementById("result").innerHTML = "true";
//console.log(isValidIP("255.156.100"));
