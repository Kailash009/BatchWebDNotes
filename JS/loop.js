const prompt=require('prompt-sync')();
var n=parseInt(prompt("Enter Number=")) // 7
var sum=0;
for(var i=1;i<=n;i++)
{
sum=sum+Math.pow(i,2); // 1+2 =>3  sum=3+3 = 6 sum=6+4=10 sum=10+5 15  1+2+3+4+5+... 10
 // 3 4 5 6
}
console.log("Sum of Natural Number=",sum);
