const removeFromArray = function(array=[], ...remove) // Rest operator, puts extra arguments in new array
{
    let next = array.filter(b => !remove.includes(b));

    return next;
};

// Do not edit below this line
module.exports = removeFromArray;
