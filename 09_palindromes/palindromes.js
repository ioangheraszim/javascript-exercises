const palindromes = function (str) {
    let normalStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reverseStr = normalStr.split('').reverse().join('').toLowerCase();
    
   return normalStr === reverseStr
};

// Do not edit below this line
module.exports = palindromes;
