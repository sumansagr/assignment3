console.log("---------------Named function------------------");

function secondLargest(arr)
{
    for(var i=0;i<=arr.length;i++)
    {
        for(var j=i;j<=arr.length;j++)
        {
            if(arr[i]<=arr[j])
            {
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
          }
        }
    }
    console.log("Second largest number in array",arr[1]);
}
var arr=[90,30,70,100,50,40]
secondLargest(arr);




console.log("---------------annonymus function------------------");

var secondLargest=function(arr)
{
    for(var i=0;i<=arr.length;i++)
    {
        for(var j=i;j<=arr.length;j++)
        {
            if(arr[i]<=arr[j])
            {
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
          }
        }
    }
    console.log("Second largest number in array",arr[1]);
}
var arr=[0,30,70,80,400,100,40]
secondLargest(arr);



console.log("---------------Self invoke function------------------");

(function(arr)
{
    for(var i=0;i<=arr.length;i++)
    {
        for(var j=i;j<=arr.length;j++)
        {
            if(arr[i]<=arr[j])
            {
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
          }
        }
    }
    console.log("Second largest number in array",arr[1]);
})([1,300,70,80,200,5,40])


console.log("-----------------Arrow function-------");


    var secondLargest=arry3=>{
        
    for(var i=0;i<=arry3.length;i++)
    {
        for(var j=i;j<=arry3.length;j++)
        {
            if(arry3[i]<=arry3[j])
            {
                var temp=arry3[i];
                arry3[i]=arry3[j];
                arry3[j]=temp;
          }
        }
    }
    console.log("Second largest number in array",arry3[1]);
}
var arry3=[100,30,70,80,500,40]
secondLargest(arry3);