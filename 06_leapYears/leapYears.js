const leapYears = (currentYear) => {
    if(currentYear % 4 === 0 && currentYear % 100 !== 0) {
        return true;
    }
};

// Do not edit below this line
module.exports = leapYears;
