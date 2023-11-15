var obj=[
    {'id':101,'name':'rahul','age':23},
    {'id':102,'name':'ajay','age':12},
    {'id':103,'name':'shivam','age':34},
    {'id':104,'name':'kunal','age':24},
    {'id':105,'name':'tinku','age':53},
];
process.stdout.write("id name age\n")
for(var res in obj)
{
    console.log(obj[res].id,obj[res].name,obj[res].age);
}



