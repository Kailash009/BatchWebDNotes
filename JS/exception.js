function check_Number()
{
try
{
var a=parseInt(document.getElementById('t1').value);
var b=parseInt(document.getElementById('t2').value);
var res=a/b;
alart(res);
document.getElementById('res').value=res;
}
catch(err)
{
document.getElementById('error').innerHTML=err.message;
}
}
function showDateTime()
{
    document.getElementById('error').innerHTML=Date();
}