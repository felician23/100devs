// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
     let favHoliday = 'Christmas';
     favHoliday = favHoliday.toUpperCase()
    console.log(favHoliday);
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
    let str = "Horse";
    alert(str.slice(-3));
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
    function takesInFive(n1,n2,n3,n4,n5) {
        return Math.abs((n1 + n2 + n3 + n4 + n5) - 100)
        
    }
    alert(takesInFive(5,5,5,5,5));
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
    function takesInThree(n1,n2,n3) {
        let x = Math.min(n1,n2,n3);
        let y = Math.max(n1,n2,n3);
        console.log(x);
        console.log(y);
    }
    console.log(takesInThree(50,5,70));
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
    function flipCoin() {
        let random = Math.random()
        if( random < .5) {
            return "heads"
        }else{
            return "tails"
        }
        // return Math.random() < .5 ? "heads" : "tails" ternary way of doing this problem.
    }
    console.log(flipCoin())
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flipItToday(num) {
    for(let i = 1; i <= num; i++) {
        let result = flipCoin()
        console.log(result);
    }
}
console.log(flipItToday(5));