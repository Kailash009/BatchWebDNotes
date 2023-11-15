var addition = (...arguments)=> {
    var sum = 0;
    if (arguments.length == 0) 
    {
        return 0;
    }
    else 
    {
    for (let i = 0; i < arguments.length; i++) 
    {
    sum += arguments[i];
    }
    return sum;
    }
    }
    var a = addition(1, 2,3,6,7);
    console.log('Sum='+a);