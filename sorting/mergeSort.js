
let arr = [5, 3, 23, 10, 1, 9, 8, 33, 2, 43];
function mergeSort(arr) {
    let mid = Math.floor(arr.length / 2);
    if (arr.length < 2) {
        return arr;
    }
    let left = arr.splice(0, mid);
    // console.log(left,"======>left")
    // console.log(arr,"------->arr")
    return merge(mergeSort(left), mergeSort(arr))
}

const merge = (left, right) => {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [...arr, ...left, ...right]
}
console.log(mergeSort(arr))