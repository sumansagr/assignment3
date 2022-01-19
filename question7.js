function fact(num)   
{  
if (num == 0) {  
return 1;  
}  
else {  
return num * fact( num - 1 );  
}  
}  
console.log(fact(4));
// an fun
let res=function (num)   
{  
if (num == 0) {  
return 1;  
}  
else {  
return num * fact( num - 1 );  
}  
} 
console.log(res(4));
// ar fun
let res1=(num) =>  
{  
if (num == 0) {  
return 1;  
}  
else {  
return num * fact( num - 1 );  
}  
}  
console.log(res1(4));