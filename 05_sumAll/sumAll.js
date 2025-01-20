const sumAll = (start, end) => {
    
    let total = 0;

    for (let i = start; i <= end; i++){
      total += i;
    }
    
    return total;
    
    // let arr = [1, 2, 3, 4];
    // let sumOfAll = arr.reduce((total, sum) => total + sum);
    // return sumOfAll;
};

// Do not edit below this line
module.exports = sumAll;
