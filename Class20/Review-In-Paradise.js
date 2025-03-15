// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
    let myFavoriteFood;
    myFavoriteFood = "Burger";
    alert(myFavoriteFood);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let myStr = "Horse";
alert(myStr.charAt(1));

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function takesInThree(n1,n2,n3) {
    alert((n1 / n2 * n3).toFixed(2));
}
takesInThree(3,3,3);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function takesInOne(n1) {
    console.log(Math.cbrt(n1));
}
takesInOne(2);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function takesInMonth(month) {
    let lcmonth = month.toLowerCase()
    if(lcmonth === "June" || lcmonth === "July" || lcmonth === "August") {
        alert("Yayy");
    } else {
        alert("Booo");
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function takesInNum(n1) {
    for(let i = 1; i < 100; i++) {
        if(i % 5 !== 0) {
            console.log(i);
        }
    }
}
    