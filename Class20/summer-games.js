//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function takesInArray(array) {
    let sum = 1
    for(let i = 0; i < array.length; i++) {
        alert(sum *= array[i])
    }
}
takesInArray([1,2,3,4,5]);

// forEach way

let sum = 1
arr.forEach((item, i) => {
    sum *= item
});