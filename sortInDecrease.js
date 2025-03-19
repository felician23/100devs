// Array methods jsinfo.com

function sortIt(a,b) {
    if(a > b) {
        return -1;
    } else if(a == b) {
        return 0;
    }else if(a < b) {
        return 1;
    }
}

let arr = [5,2,1,-10,8];

console.log(arr.sort(sortIt));