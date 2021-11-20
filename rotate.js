function rotate(arr, n) {
    var x = arr[n - 1], i;
    for (i = n - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
        arr[0] = x;
        return arr
    }
}
var arr = [1, 2, 3, 4, 5];
var n = arr.length;


console.log(rotate(arr, n))