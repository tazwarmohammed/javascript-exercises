const removeFromArray = function(array, ...args) {
    // const resultArr = [];
    // for (let i = 0; i < array.length; i++) {       //method 1 using for raw loops
    //     let addElement = true;
    //     for (let j = 0; j < args.length; j++) {
    //         if(array[i] === args[j]) {
    //             addElement = false;
    //             break;
    //         }
    //     }
    //     if(addElement) {
    //         resultArr.push(array[i]);
    //     }
    // }
    // return resultArr;


    // array.forEach(element => {               //method 2 using forEach
    //     if(!args.includes(element)) {
    //         resultArr.push(element);
    //     }
    // });

    // return resultArr;


    return array.filter(element => !args.includes(element)); //method 3 using filter
};

// Do not edit below this line
module.exports = removeFromArray;
