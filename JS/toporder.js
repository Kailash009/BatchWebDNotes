function sum(a,b) // 1000
{
    console.log(a+b);
}
function sub(a,b)
{
    console.log(a-b);
}
function mult(a,b)
{
    console.log(a*b);
}
function div(a,b)
{
    console.log(a/b);
}
function pow(a,b)
{
    console.log(a**b);
}
function doanything(a,b,anytask) // 1000
{
    anytask(a,b);
}


doanything(10,5,sum);// 1000
doanything(5,7,sub); // 2000
doanything(5,2,mult);
doanything(10,4,div);
doanything(4,3,pow);








