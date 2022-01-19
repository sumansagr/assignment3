var num = [];

for (var i = 1; i <= 50; i++) {
   num.push(i);
}
var randomIndex=Math.floor(Math.random()*num.length);
console.log(num[randomIndex]);