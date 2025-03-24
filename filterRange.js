function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item.length && b <= item.length));
}

let arr = [5,3,8,1];
let filtered = filterRange(arr,1,4)
console.log(filterRange(1,4))

