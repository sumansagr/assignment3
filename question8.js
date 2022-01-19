function fibonacci(num)
{
    var num1=0;
    var num2=1;
    var sum;
    for (var i = 0; i<num; i++) 
    {
        sum=num1+num2;
        num1=num2;
        num2=sum;
    }
    return num2;
}
console.log(fibonacci(5));
// an fun
let res=function (num)
{
    var num1=0;
    var num2=1;
    var sum;
    for (var i = 0; i<num; i++) 
    {
        sum=num1+num2;
        num1=num2;
        num2=sum;
    }
    return num2;
}
console.log(res(5));
// ar fun
let res1= (num)=>
{
    var num1=0;
    var num2=1;
    var sum;
    for (var i = 0; i<num; i++) 
    {
        sum=num1+num2;
        num1=num2;
        num2=sum;
    }
    return num2;
}
console.log(res1(5));