class A
{
    constructor(a,b)
    {
        this.a=a;
        this.b=b;
    }
    display()
    {
        console.log("Hello Parent");
    }
}
class B extends A 
{
    constructor(a,b)
    {
        super(a,b); // This keyword is used to call parent class constructor.
        this.c=this.a+this.b;
    }
show()
{
    console.log("Hello Child")
    console.log(this.c);
}
}

var a=new B(10,20);
a.display();
a.show();
