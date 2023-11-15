function calcFunction()
{
    let a=parseFloat(document.getElementById("t1").value);
    //document.getElementById("msg").innerHTML="On Blur Fired!!";
    //console.log(a,typeof(a));
    let b=parseFloat(document.getElementById("t2").value);
    //console.log(b,typeof(b));
    let c=a+b;
    //console.log(c);
    document.getElementById("res").innerHTML=c;
}
// var res=Math.max(23,45,67,1,23,453,203);
// console.log(res);