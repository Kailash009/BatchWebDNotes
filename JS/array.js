arr=[11,23,45,67,89,12];
function isEven(num){
    return num%2==0;
}
var even=arr.find(isEven);
console.log(even);
