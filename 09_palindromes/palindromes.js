const palindromes = function(word) 
{
    const regex = /[^a-z0-9]/g;
    const reLow = word.toLowerCase().replace(regex, '');
    return reLow.split('').reverse().join('') === reLow;
};

// Do not edit below this line
module.exports = palindromes;
