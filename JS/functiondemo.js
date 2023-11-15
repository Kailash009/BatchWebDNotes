const prompt=require('prompt-sync')();

function multiplication(a,b,c) // Formal Parameter. // MARKET // BLL
{
  return a*b*c; 
}

// PLL
var i=parseInt(prompt('Enter First Number='));
var j=parseInt(prompt('Enter Second Number='));
var k=parseInt(prompt('Enter Third Number='));
var siddant=multiplication(i,j,k); // Function Calling. [Home]
console.log('Multiply=',siddant);