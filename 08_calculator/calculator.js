const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (num) =>  {
  let total = 0;
  for (let i = 0; i < num.length; i++){
    total += num[i];
  }

  return total;
};

const multiply = (num) => {
  let total = 1;
  for (let i = 0; i < num.length; i++){
    total *= num[i];
  }
  return total;
};

const power = (a, b) => {
  let total = 1;

  for (let i = 0; i < b; i++){
    total *= a;
  }
  
  return total;
};

const factorial = (num) => {
  let result = 1; 

  for (let i = num; i > 0; i--) {
    result *= i; 
  }

  return result; 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
