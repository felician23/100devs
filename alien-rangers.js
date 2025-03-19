//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let myArr = ["white Chicks", "ST4", "Home Alone"];
for(let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
}
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let myArr2 = [2,3,4,5,6];
function onlyEven(arr) {
    return arr.filter(num => num % 2 === 0)
}
console.log(onlyEven(myArr2));
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function takesInArr(arr) {
    let sorted = arr.sorted((a,b) => a-b)
    alert(sorted[1] + sorted[sorted.length - 2])
}
takesInArr([2,3,4,5,1]);