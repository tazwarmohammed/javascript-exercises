const sumAll = function(num1, num2) {

    if (num1 < 0 || num2 <0 || typeof num1!=="number" || typeof num2!=="number") {
        return `ERROR`;
    } else {
        let start, end, result = 0;

        if(num1<num2) {
            start = num1;
            end = num2;
        } else {
            start = num2;
            end = num1;
        }
    
        for (let i = start; i <= end; i++) {
            result += i;
        }
    
        return result;
    }
};

// Do not edit below this line
module.exports = sumAll;
