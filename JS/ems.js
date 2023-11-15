var arr_ids=[];
var arr_names=[];
var arr_ages=[];
var arr_cities=[];
var arr_salaries=[];
function btnAdd()
{
    let eid=document.getElementById('txtEid').value;
    let ename=document.getElementById('txtName').value;
    let eage=document.getElementById('txtAge').value;
    let ecity=document.getElementById('txtCity').value;
    let esalary=document.getElementById('txtSalary').value;
    arr_ids.push(eid);
    arr_names.push(ename);
    arr_ages.push(eage);
    arr_cities.push(ecity);
    arr_salaries.push(esalary);
    alert('Employee Added SuccessFully!!');
    showEmployeeData();
}
function showEmployeeData()
{
    var employees=document.getElementById('show_Emp');
    var emp_Data=`<table border="3" bgcolor="white" width="40%" align="center">
    <tr>
    <th>EID</th>
    <th>NAME</th>
    <th>AGE</th>
    <th>CITY</th>
    <th>SALARY</th>
    </tr></table>`
    for(let i=0;i<arr_ids.length;i++)
    {
        emp_Data+=`<table border="3" bgcolor="white" width="40%" align="center">
        <td>${arr_ids[i]}</td>
        <td>${arr_names[i]}</td>
        <td>${arr_ages[i]}</td>
        <td>${arr_cities[i]}</td>
        <td>${arr_salaries[i]}</td>`
    }
    emp_Data+="</table>";
    employees.innerHTML=emp_Data;
}
function btnUpdate()
{
    let eid=document.getElementById('txtEid').value;
    let id=arr_ids.indexOf(eid);
    if(id==-1)
    {
        alert('Employee is not Found!!');
    }
    else
    {
        arr_names[id]=document.getElementById('txtName').value;
        arr_ages[id]=document.getElementById('txtAge').value;
        arr_cities[id]=document.getElementById('txtCity').value;
        arr_salaries[id]=document.getElementById('txtSalary').value;
        alert('Employee Updated SuccessFully!!');
    }
    showEmployeeData();
}
function btnDelete()
{
    let eid=document.getElementById('txtEid').value;
    let id=arr_ids.indexOf(eid);
    if(id==-1)
    {
        alert('Employee is not Found!!');
    }
    else
    {
        arr_ids.splice(id,1);
        arr_names.splice(id,1);
        arr_ages.splice(id,1);
        arr_cities.splice(id,1);
        arr_salaries.splice(id,1);
        alert('Employee Deleted SuccessFully!!');
    }
    showEmployeeData();
}
function btnSearch()
{
let eid=document.getElementById('txtEid').value;
let id=arr_ids.indexOf(eid);
if(id==-1)
{
    alert('Employee is not Found!!');
}
else
{
document.getElementById('txtName').value=arr_names[id];
document.getElementById('txtAge').value=arr_ages[id];
document.getElementById('txtCity').value=arr_cities[id];
document.getElementById('txtSalary').value=arr_salaries[id];
}
}
var index=0;
function btnFirst()
{
    index=0;
    showData_byIndex(index);
}
function btnPrev()
{
    var id=document.getElementById('txtEid').value;
    var index=arr_ids.indexOf(id);
    if(index!=0)
    {
    showData_byIndex(index-1);
}
}
function btnNext()
{
    var id=document.getElementById('txtEid').value;
    var index=arr_ids.indexOf(id);
    if(index!=arr_ids.length-1) // 0!=2 0 1 2!=2
    {
    showData_byIndex(index+1);
}
}
function btnLast()
{
    index=arr_ids.length-1;
    showData_byIndex(index);
}
function showData_byIndex(i)
{
    document.getElementById('txtEid').value=arr_ids[i];
    document.getElementById('txtName').value=arr_names[i];
    document.getElementById('txtAge').value=arr_ages[i];
    document.getElementById('txtCity').value=arr_cities[i];
    document.getElementById('txtSalary').value=arr_salaries[i];
}
function btnShowAll()
{
    showEmployeeData();
}