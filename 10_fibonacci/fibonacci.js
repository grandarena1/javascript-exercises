const fibonacci = function(num) 
{
    if(num < 0)
    {
        return "OOPS";
    }

    const fibPart = [0, 1];

    for(let index = 1; index < num; index++)
    {
        fibPart.push(fibPart[index] + fibPart[index - 1]);
    }

    return fibPart[num];
};

// Do not edit below this line
module.exports = fibonacci;
