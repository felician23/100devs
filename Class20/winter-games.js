//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function takesInArray(array) {
    let myArr = [];
    array.forEach((item, i) => {
        if(item % 2 === 0) {
            myArr.push(item);
        }
    });
    return myArr
}

